# Changelog

### [3.5.4](https://github.com/roseline124/action-semantic-pull-request/compare/v3.5.3...v3.5.4) (2021-10-18)


### Bug Fixes

* action.yml (description has to be below 125 chars) ([2a842ba](https://github.com/roseline124/action-semantic-pull-request/commit/2a842ba81b7af123d27889169d3ef27aaa04bd4a))

### [3.5.2](https://github.com/roseline124/action-semantic-pull-request/compare/v3.5.1...v3.5.2) (2021-10-18)


### Bug Fixes

* action.yml ([#1](https://github.com/roseline124/action-semantic-pull-request/issues/1)) ([419b45a](https://github.com/roseline124/action-semantic-pull-request/commit/419b45adece04418ae7a38ee3b3cb3b01234d9a1))

### [3.5.1](https://github.com/roseline124/action-semantic-pull-request/compare/v3.5.0...v3.5.1) (2021-10-18)


### Bug Fixes

* move conventional-changelog package to dev deps ([d1140bb](https://github.com/roseline124/action-semantic-pull-request/commit/d1140bb02f1295d102832e126ab226a8e7b98f7c))

## [3.5.0](https://github.com/roseline124/action-semantic-pull-request/compare/v3.4.2...v3.5.0) (2021-10-18)


### Features

* add validationErrorHandler ([f545e6e](https://github.com/roseline124/action-semantic-pull-request/commit/f545e6e5b6a94b5daa328db2c0414bc47fee6ad4))
* fork conventional-commit-parser codes ([c5759fc](https://github.com/roseline124/action-semantic-pull-request/commit/c5759fc5362f28a63228995c713601fc6b4c786d))
* suggest word 추 ([4f16b16](https://github.com/roseline124/action-semantic-pull-request/commit/4f16b162a360bc9ca12230a84563bd1422525a2b))


### Bug Fixes

* amannn -> roseline124 ([5ed84f7](https://github.com/roseline124/action-semantic-pull-request/commit/5ed84f7494105deb5b8cdde014635d79948a5f83))
* build error ([7864a21](https://github.com/roseline124/action-semantic-pull-request/commit/7864a2192b9577dc9328517d4d533d6b07743466))
* header pattern ([3d8de72](https://github.com/roseline124/action-semantic-pull-request/commit/3d8de7279006032ec2a0d1c531e64f845a7ec823))
* migrate configParser, parseConfig to typescript and fix action ([5bcc6f4](https://github.com/roseline124/action-semantic-pull-request/commit/5bcc6f49170679e4bb00e8f6b3f18acb7c391b54))
* migrate parser to typescript ([b3e7ec9](https://github.com/roseline124/action-semantic-pull-request/commit/b3e7ec945a61825251b5797390737f1c4911287e))
* migrate validatePrTitle, formateMessage to typescript ([21b1135](https://github.com/roseline124/action-semantic-pull-request/commit/21b11356d649ba5c2f3587d1470ef635b8a5b8cb))
* pr template ([1af50b5](https://github.com/roseline124/action-semantic-pull-request/commit/1af50b57265f377f1c78406bac3cd6afd031238a))
* release error ([81dbbf3](https://github.com/roseline124/action-semantic-pull-request/commit/81dbbf31430aee666f5e6d17306a6479521333c0))
* subject pattern에서 콜론 다음에 띄어쓰기 가능하도록 변경 ([ffe3f37](https://github.com/roseline124/action-semantic-pull-request/commit/ffe3f37bd9bf83f25780d1a66b75904ffdb656ea))

### [3.4.2](https://github.com/amannn/action-semantic-pull-request/compare/v3.4.1...v3.4.2) (2021-08-16)


### Bug Fixes

* Don't require `scopes` when `requireScope` enabled ([#114](https://github.com/amannn/action-semantic-pull-request/issues/114)) ([4c0fe2f](https://github.com/amannn/action-semantic-pull-request/commit/4c0fe2f50d26390ef6a2553a01d9bd13bef2caf2))

### [3.4.1](https://github.com/amannn/action-semantic-pull-request/compare/v3.4.0...v3.4.1) (2021-07-26)


### Bug Fixes

* Make link in error message clickable ([#112](https://github.com/amannn/action-semantic-pull-request/issues/112)) ([2a292a6](https://github.com/amannn/action-semantic-pull-request/commit/2a292a6550224ddc9d79731bcd15732b42344ebf))

## [3.4.0](https://github.com/amannn/action-semantic-pull-request/compare/v3.3.0...v3.4.0) (2021-02-15)


### Features

* Add `validateSingleCommit` flag to validate the commit message if there's only a single commit in the PR (opt-in). This is intended to be used as a workaround for an issue with Github as in this case, the PR title won't be used as the default commit message when merging a PR. ([#87](https://github.com/amannn/action-semantic-pull-request/issues/87)) ([3f20459](https://github.com/amannn/action-semantic-pull-request/commit/3f20459aa1121f2f0093f06f565a95fe7c5cf402))

## [3.3.0](https://github.com/amannn/action-semantic-pull-request/compare/v3.2.6...v3.3.0) (2021-02-10)


### Features

* Add ability to use multiple scopes ([#85](https://github.com/amannn/action-semantic-pull-request/issues/85)) ([d6aabb6](https://github.com/amannn/action-semantic-pull-request/commit/d6aabb6fedc5f57cec60b16db8595a92f1e263ab))

### [3.2.6](https://github.com/amannn/action-semantic-pull-request/compare/v3.2.5...v3.2.6) (2021-01-25)


### Bug Fixes

* Publish changelog ([47ac28b](https://github.com/amannn/action-semantic-pull-request/commit/47ac28b008b9b34b6cda0c1d558f4b8f25a0d3bb))

### [3.2.1](https://github.com/amannn/action-semantic-pull-request/compare/v3.2.0...v3.2.1) (2021-01-19)


### Bug Fixes

* Move configuration docs to a separate section ([dd78147](https://github.com/amannn/action-semantic-pull-request/commit/dd78147b453899371b7406672fb5ebe9dc5e2c5f))

## [3.2.0](https://github.com/amannn/action-semantic-pull-request/compare/v3.1.0...v3.2.0) (2021-01-18)


### Features

* Add `subjectPatternError` option to allow users to override the default error when `subjectPattern` doesn't match ([#76](https://github.com/amannn/action-semantic-pull-request/issues/76)) ([e617d81](https://github.com/amannn/action-semantic-pull-request/commit/e617d811330c87d229d4d7c9a91517f6197869a2))

## [3.1.0](https://github.com/amannn/action-semantic-pull-request/compare/v3.0.0...v3.1.0) (2021-01-11)


### Features

* Add regex validation for subject ([#71](https://github.com/amannn/action-semantic-pull-request/issues/71)) ([04b071e](https://github.com/amannn/action-semantic-pull-request/commit/04b071e606842fe1c6b50fcbc0cab856c7d1cb49))

## [3.0.0](https://github.com/amannn/action-semantic-pull-request/compare/v2.2.0...v3.0.0) (2021-01-08)


### ⚠ BREAKING CHANGES

* Add opt-in for WIP (#73)

### Features

* Add opt-in for WIP ([#73](https://github.com/amannn/action-semantic-pull-request/issues/73)) ([fb077fa](https://github.com/amannn/action-semantic-pull-request/commit/fb077fa571d6e14bc0ba9bc5b971e741ac693399))

## [2.2.0](https://github.com/amannn/action-semantic-pull-request/compare/v2.1.1...v2.2.0) (2020-12-21)


### Features

* Add ability to constrain scopes ([#66](https://github.com/amannn/action-semantic-pull-request/issues/66)) ([95b7031](https://github.com/amannn/action-semantic-pull-request/commit/95b703180f65c7da62280f216fb2a6fcc176dd26))

### [2.1.1](https://github.com/amannn/action-semantic-pull-request/compare/v2.1.0...v2.1.1) (2020-12-03)


### Bug Fixes

* Get rid of deprecation notice ([#63](https://github.com/amannn/action-semantic-pull-request/issues/63)) ([ec157ab](https://github.com/amannn/action-semantic-pull-request/commit/ec157abe0cb1f9c0ec79c022db8a5e6245f53df8))

## [2.1.0](https://github.com/amannn/action-semantic-pull-request/compare/v2.0.0...v2.1.0) (2020-10-21)


### Features

* Allow configuration for custom types ([@alorma](https://github.com/alorma), [@mrchief](https://github.com/mrchief) and [@amannn](https://github.com/amannn) in [#53](https://github.com/amannn/action-semantic-pull-request/issues/53)) ([2fe39e2](https://github.com/amannn/action-semantic-pull-request/commit/2fe39e2ce8ed0337bff045b6b6457e685d0dd51f))

## [2.0.0](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.10...v2.0.0) (2020-09-17)


### ⚠ BREAKING CHANGES

* Remove support for `improvement` prefix (as per commitizen/conventional-commit-types#16).

### Miscellaneous Chores

* Update dependencies. ([b9bc3f1](https://github.com/amannn/action-semantic-pull-request/commit/b9bc3f12d1e30b03273a4077cb7936b091fb1ba2))

### [1.2.10](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.9...v1.2.10) (2020-09-17)


### ⚠ BREAKING CHANGES

* Remove support for `improvement` prefix (as per https://github.com/commitizen/conventional-commit-types/pull/16).

### Miscellaneous Chores

* Update dependencies ([#31](https://github.com/amannn/action-semantic-pull-request/issues/31)) ([2aa2eb7](https://github.com/amannn/action-semantic-pull-request/commit/2aa2eb7e08ff8a6d0eaf3d42df0efec1cdeb1984))

### [1.2.9](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.8...v1.2.9) (2020-09-17)


### Bug Fixes

* Improve reporting for failed checks ([#30](https://github.com/amannn/action-semantic-pull-request/issues/30)) ([1aa9e17](https://github.com/amannn/action-semantic-pull-request/commit/1aa9e172840b7e07c0751e80aa03271b80d27ebe))

### [1.2.8](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.7...v1.2.8) (2020-08-23)

### [1.2.7](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.6...v1.2.7) (2020-08-22)


### Bug Fixes

* update workflow to use pull_request_target ([#25](https://github.com/amannn/action-semantic-pull-request/issues/25)) ([73f02a4](https://github.com/amannn/action-semantic-pull-request/commit/73f02a44b31b2c716caf45cc18e5e12d405ae225)), closes [#24](https://github.com/amannn/action-semantic-pull-request/issues/24)

### [1.2.6](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.5...v1.2.6) (2020-08-14)

### [1.2.5](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.4...v1.2.5) (2020-08-14)

### [1.2.4](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.3...v1.2.4) (2020-08-14)

### [1.2.3](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.2...v1.2.3) (2020-08-14)

### [1.2.2](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.1...v1.2.2) (2020-06-15)


### Bug Fixes

* Bump npm from 6.13.0 to 6.14.5 ([#8](https://github.com/amannn/action-semantic-pull-request/issues/8)) ([9779e20](https://github.com/amannn/action-semantic-pull-request/commit/9779e20f1998f8b97180af283e8f4b29f120d44f))

### [1.2.1](https://github.com/amannn/action-semantic-pull-request/compare/v1.2.0...v1.2.1) (2020-05-13)

## [1.2.0](https://github.com/amannn/action-semantic-pull-request/compare/v1.1.1...v1.2.0) (2019-11-20)


### Features

* Add [WIP] support.  ([#3](https://github.com/amannn/action-semantic-pull-request/issues/3)) ([2b4d25e](https://github.com/amannn/action-semantic-pull-request/commit/2b4d25ed4b55efc389f5e5898b061615ae96a1da))

### 1.1.1 First usable release
