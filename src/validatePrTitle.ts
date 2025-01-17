const conventionalCommitTypes = require('conventional-commit-types');
import is from '@sindresorhus/is';
import { tryCatch, always } from 'ramda';
import { sync as parser } from './parser';
import { formatMessage } from './formatMessage';
import { getPaserOptions } from './parser/parserOptions';
import { ErrorHandlerAction } from './types';
import { ErrorType, ValidationError } from './errors';
import { suggestWord } from './suggestWord';

type ValidationOptions = {
  types?: string[];
  scopes?: string[];
  subjectPattern?: string;
  subjectPatternError?: string;
  action?: ErrorHandlerAction;
};

export const validatePrTitle = async (prTitle: string, options?: ValidationOptions) => {
  const parserOpts = getPaserOptions();
  const result = parser(prTitle, parserOpts);

  let errors: ValidationError[] = [];
  /** errors 참조 못하는 버그 수정 */
  const typeError = tryCatch<() => void, ValidationError, ValidationError>(
    () => validateType(prTitle, result.type, options?.types),
    (error) => always(error)()
  )();
  if (typeError) {
    errors.push(typeError);
  }
  const scopeError = tryCatch<() => void, ValidationError, ValidationError>(
    () => validateScope(prTitle, result.scope, options?.scopes),
    (error) => always(error)()
  )();
  if (scopeError) {
    errors.push(scopeError);
  }
  const subjectError = tryCatch<() => void, ValidationError, ValidationError>(
    () => validateSubject(prTitle, result.subject, options),
    (error) => always(error)()
  )();
  if (subjectError) {
    errors.push(subjectError);
  }

  return errors;

  function deferError(error: ValidationError) {
    errors.push(error);
  }
};

function validateType(prTitle: string, prType: string, types?: string[]) {
  const defaultTypes = Object.keys(conventionalCommitTypes.types);
  const availableTypes = types == null || types.length === 0 ? defaultTypes : types;

  if (!availableTypes.includes(prType)) {
    throw new ValidationError(
      `Unknown release type "${prType}" found in pull request title "${prTitle}". ${suggestWord(
        prType,
        types
      )}\n\n${printAvailableTypes()}`,
      ErrorType.TYPE_ERROR,
      { errorWord: prType, availableWords: types }
    );
  }

  function printAvailableTypes() {
    return `Available types:\n${availableTypes
      .map((type) => {
        let bullet = ` - ${type}`;
        if (availableTypes === defaultTypes) {
          bullet += `: ${conventionalCommitTypes.types[type].description}`;
        }
        return bullet;
      })
      .join('\n')}`;
  }
}

function validateScope(prTitle: string, scope?: string, scopes?: string[]) {
  const givenScopes = scope?.split(',')?.map((scope) => scope.trim());
  const unknownScopes = givenScopes ? givenScopes.filter((scope) => !scopes?.includes(scope)) : [];
  if (scopes && unknownScopes.length > 0) {
    throw new ValidationError(
      `Unknown ${unknownScopes.length > 1 ? 'scopes' : 'scope'} "${unknownScopes.join(
        ','
      )}" found in pull request title "${prTitle}". ${suggestWord(
        unknownScopes,
        scopes
      )}Use one of the available scopes: ${scopes.join(', ')}.`,
      ErrorType.SCOPE_ERROR,
      { errorWord: scope, availableWords: scopes }
    );
  }
}

function validateSubject(prTitle: string, subject?: string, options?: ValidationOptions) {
  if (is.nullOrUndefined(subject) || is.emptyStringOrWhitespace(subject)) {
    throw new ValidationError(
      `No subject found in pull request title "${prTitle}".`,
      ErrorType.SUBJECT_NOT_FOUND_ERROR
    );
  }

  if (options?.subjectPattern) {
    const match = (subject as string).match(new RegExp(options.subjectPattern));

    if (!match) {
      throwSubjectPatternError(
        `The subject "${subject}" found in pull request title "${prTitle}" doesn't match the configured pattern "${
          options!.subjectPattern
        }".`
      );
    }

    const matchedPart = match?.[0];
    if (matchedPart!.length !== (subject as string).length) {
      throwSubjectPatternError(
        `The subject "${subject}" found in pull request title "${prTitle}" isn't an exact match for the configured pattern "${
          options!.subjectPattern
        }". Please provide a subject that matches the whole pattern exactly.`
      );
    }
  }

  function throwSubjectPatternError(message: string) {
    if (options?.subjectPatternError) {
      message = formatMessage(options.subjectPatternError, {
        subject,
        subjectPattern: options?.subjectPattern,
        title: prTitle,
      });
    }

    throw new ValidationError(message, ErrorType.SUBJECT_ERROR, {
      subject,
      subjectPattern: options?.subjectPattern,
    });
  }
}
