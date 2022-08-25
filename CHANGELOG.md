# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.14.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.13.0...v1.14.0) (2022-08-25)


### Features

* 🎸 add format command ([a1262ac](https://github.com/yeukfei02/singapore-bus-arrival/commit/a1262ac7a2d2a8b2f398eab1a6d3a428f0697810))


### Bug Fixes

* 🐛 add line break ([a438d0b](https://github.com/yeukfei02/singapore-bus-arrival/commit/a438d0b48e6080f1ff4ef4b3a3cc92c236609840))
* 🐛 fix busStopByLatLong logic and fix env ([db99a0e](https://github.com/yeukfei02/singapore-bus-arrival/commit/db99a0eccbee758ec3062e9989dddf070350bd54))
* 🐛 fix format command ([11d7c20](https://github.com/yeukfei02/singapore-bus-arrival/commit/11d7c20f3cb6d0d620113e698e55e23be43149b8))
* 🐛 fix format script ([8b3cd85](https://github.com/yeukfei02/singapore-bus-arrival/commit/8b3cd85c1b74d4f760ee7643c9f1c0a3a8ef5e8c))

## [1.13.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.12.1...v1.13.0) (2022-06-06)


### Features

* 🎸 fix order by ([b86f90d](https://github.com/yeukfei02/singapore-bus-arrival/commit/b86f90d5066708859d8b7bddf55b83f570777f8d))


### Bug Fixes

* 🐛 fix github action deploy.yml ([d9cc0d3](https://github.com/yeukfei02/singapore-bus-arrival/commit/d9cc0d37f72d4f9fef927e6e0adad9bd72edd7a5))
* 🐛 fix lat long ([ad109e3](https://github.com/yeukfei02/singapore-bus-arrival/commit/ad109e3a37e437e72609f6da5512ba475ddd4f77))
* 🐛 fix order by ([c6b275c](https://github.com/yeukfei02/singapore-bus-arrival/commit/c6b275c562f0c126458a7c20e8315a4f22db5958))
* 🐛 remove not used order by ([049a588](https://github.com/yeukfei02/singapore-bus-arrival/commit/049a58894a3154ece773c85cc93d2068d5068dce))

### [1.12.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.12.0...v1.12.1) (2022-06-01)


### Bug Fixes

* 🐛 add missing log ([08e79b6](https://github.com/yeukfei02/singapore-bus-arrival/commit/08e79b68fe45e5ab04f02f400484c3f998da657c))
* 🐛 fix test case and cron job logic ([ee2eb8e](https://github.com/yeukfei02/singapore-bus-arrival/commit/ee2eb8ed82f15f8b455b8142909425e92c8e1cc2))
* 🐛 update husky lib ([e0caf8a](https://github.com/yeukfei02/singapore-bus-arrival/commit/e0caf8a27d13b203573f40157e3450644d1e7ac1))

## [1.12.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.11.0...v1.12.0) (2022-05-23)


### Features

* 🎸 add defualt memorySize to 2000 ([168bc5c](https://github.com/yeukfei02/singapore-bus-arrival/commit/168bc5c43aa0b9d9aa777cc54d1ce87c0b968697))


### Bug Fixes

* 🐛 update sls lib and fix model ([34860b0](https://github.com/yeukfei02/singapore-bus-arrival/commit/34860b096d81aa4c344b7135f7819e791289b707))

## [1.11.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.10.0...v1.11.0) (2022-05-03)


### Features

* 🎸 add busServiceNo filter in allBusService api ([3049c71](https://github.com/yeukfei02/singapore-bus-arrival/commit/3049c71b7e21b608d24a2c38bdcace353820a0f8))

## [1.10.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.9.3...v1.10.0) (2022-05-03)


### Features

* 🎸 add allBusRoute api ([4faf8e7](https://github.com/yeukfei02/singapore-bus-arrival/commit/4faf8e7054ca950bc18b837eb9e075726b63c1b7))
* 🎸 add allBusService api ([cb1768b](https://github.com/yeukfei02/singapore-bus-arrival/commit/cb1768bedb1afb6d1ed7f0a0bc637859d158eec6))
* 🎸 add allBusStop api ([9e69f63](https://github.com/yeukfei02/singapore-bus-arrival/commit/9e69f63fb759f7d5541e2620978c6a69eaf7d691))
* 🎸 add allBusStop cron job ([990d8d4](https://github.com/yeukfei02/singapore-bus-arrival/commit/990d8d486d54e99ea33ae9f5f530882c4016aecc))
* 🎸 add cron job for all bus service and bus route ([01b9d3f](https://github.com/yeukfei02/singapore-bus-arrival/commit/01b9d3fc4f93839b2f4faae0ca825ae70be9759c))


### Bug Fixes

* 🐛 fix busRoute and busService logic ([1eebb65](https://github.com/yeukfei02/singapore-bus-arrival/commit/1eebb6570e2f7d74b29140449760ffe9326ed9fc))
* 🐛 fix busServiceByBusServiceNo api ([c3093ef](https://github.com/yeukfei02/singapore-bus-arrival/commit/c3093efd2642334d4c5b1ee9a8b5e071ddb98889))
* 🐛 fix getBusRouteByBusServiceNo api logic ([988e3dc](https://github.com/yeukfei02/singapore-bus-arrival/commit/988e3dc00bb474697cd06302ca44e3701b4d60d2))
* 🐛 fix logic ([2f27e28](https://github.com/yeukfei02/singapore-bus-arrival/commit/2f27e28e31c9178ef6835ad29122d05374f8e9f5))
* 🐛 increase allBusStop memorySize ([7c4749b](https://github.com/yeukfei02/singapore-bus-arrival/commit/7c4749bb0c59c2b7f9a0bd42f29bde3b551bbb7c))
* 🐛 update sls lib and fix test case ([c584dcd](https://github.com/yeukfei02/singapore-bus-arrival/commit/c584dcdcce619887d5ed3846bc0132d14eae6da7))

### [1.9.3](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.9.2...v1.9.3) (2022-04-10)


### Bug Fixes

* 🐛 update order by ([ad7d18e](https://github.com/yeukfei02/singapore-bus-arrival/commit/ad7d18e2e60b22bf2794cd107fd4433d878130f8))

### [1.9.2](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.9.1...v1.9.2) (2022-04-06)


### Bug Fixes

* 🐛 add order by ([4c6b3dc](https://github.com/yeukfei02/singapore-bus-arrival/commit/4c6b3dc0e6860e575691af6d9b6e60d11f48fe18))
* 🐛 update test case ([09b48f0](https://github.com/yeukfei02/singapore-bus-arrival/commit/09b48f0ac5170f622ba566738a5359787aafde4a))

### [1.9.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.9.0...v1.9.1) (2022-03-18)


### Bug Fixes

* 🐛 update sls to v3 and remove postman collection ([e400123](https://github.com/yeukfei02/singapore-bus-arrival/commit/e400123af3521aa0ffb8db16de554efe388f17d2))

## [1.9.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.8.1...v1.9.0) (2022-02-22)


### Features

* 🎸 add getFavouritesByInstallationId createdat desc ([b83d0fe](https://github.com/yeukfei02/singapore-bus-arrival/commit/b83d0fe28b951d64beea8fe94d32251a26245bcf))


### Bug Fixes

* 🐛 fix busStopByLatLongControllerFunc ([5e69a2f](https://github.com/yeukfei02/singapore-bus-arrival/commit/5e69a2f3c8611702178cdacf7a4e0db4ac9fe49f))
* 🐛 fix lat long and foreach loop ([53adb00](https://github.com/yeukfei02/singapore-bus-arrival/commit/53adb0028743ce74b17244413939a393a5977819))

### [1.8.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.8.0...v1.8.1) (2022-01-31)


### Bug Fixes

* 🐛 update sls lib ([94ff371](https://github.com/yeukfei02/singapore-bus-arrival/commit/94ff371e0faf54583d8e756b3efdbcec7edd3790))

## [1.8.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.7.0...v1.8.0) (2022-01-12)


### Features

* 🎸 add .env.sample ([397eab3](https://github.com/yeukfei02/singapore-bus-arrival/commit/397eab31e168b0c50b620d2b59a876fe8897622b))
* 🎸 add generate:nexus script ([699257b](https://github.com/yeukfei02/singapore-bus-arrival/commit/699257b61a0a5507a57cc5d2196c10dc728cad11))
* 🎸 add graphql-request ([d3f92ef](https://github.com/yeukfei02/singapore-bus-arrival/commit/d3f92ef6750f4a13c743c7d31aa94a95ee19bcca))
* 🎸 add semgrep.yml ([b545f76](https://github.com/yeukfei02/singapore-bus-arrival/commit/b545f7609c18b4a138d73e4cd28ca1b2a37679dd))
* 🎸 update sls lib and use arm64 arch ([ab2d43a](https://github.com/yeukfei02/singapore-bus-arrival/commit/ab2d43a5e780712d33523c12d45b1acca2d4f683))


### Bug Fixes

* 🐛 add missing var ([83e366e](https://github.com/yeukfei02/singapore-bus-arrival/commit/83e366e26cefa8023b45cb0d5832d173e7e97923))
* 🐛 add timeout to 30 sec ([14e8607](https://github.com/yeukfei02/singapore-bus-arrival/commit/14e86072533bed38aaa6efbe6239952f19155ad2))
* 🐛 fix yarn.lock ([37ce4eb](https://github.com/yeukfei02/singapore-bus-arrival/commit/37ce4eb6a13d13bf78c36181468a854b3ebebe4d))

## [1.7.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.6.0...v1.7.0) (2021-10-24)


### Features

* 🎸 add bus route api ([e6254b0](https://github.com/yeukfei02/singapore-bus-arrival/commit/e6254b0a957e48696445c230f3b381fc4b725acc))

## [1.6.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.5.0...v1.6.0) (2021-10-24)


### Features

* 🎸 add getBusServiceByBusServiceNo api ([39c66b1](https://github.com/yeukfei02/singapore-bus-arrival/commit/39c66b1d91152a7413335cd9d4bffa03c1e3f1a3))


### Bug Fixes

* 🐛 update latitude and longitude range ([e874f3e](https://github.com/yeukfei02/singapore-bus-arrival/commit/e874f3ecf1d816e63507aa9bd629958a906915a4))

## [1.5.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.4.0...v1.5.0) (2021-10-10)


### Features

* 🎸 add busStopByBusStopCode api ([940d7b2](https://github.com/yeukfei02/singapore-bus-arrival/commit/940d7b257352cdb627c878c0766d35e6343faa8f))

## [1.4.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.3.3...v1.4.0) (2021-08-04)


### Features

* 🎸 add nexus lib for generate schema.graphql ([f0f8da0](https://github.com/yeukfei02/singapore-bus-arrival/commit/f0f8da0e2f7210d4afd1c7354e45a74b70a4d948))

### [1.3.3](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.3.2...v1.3.3) (2021-07-31)


### Bug Fixes

* 🐛 update github actions ([7eb4c39](https://github.com/yeukfei02/singapore-bus-arrival/commit/7eb4c39dd0387380939761294a369912228f10d3))

### [1.3.2](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.3.1...v1.3.2) (2021-07-04)


### Bug Fixes

* 🐛 add controller func ([8814c66](https://github.com/yeukfei02/singapore-bus-arrival/commit/8814c66a94edac73c552b20546c3b8221260d3d7))

### [1.3.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.3.0...v1.3.1) (2021-04-24)


### Bug Fixes

* 🐛 fix busStopByLatLong logic ([11254b6](https://github.com/yeukfei02/singapore-bus-arrival/commit/11254b6dd4d47c90723857ef76b6539ed1d942c1))
* 🐛 fix if location in not sg return full busStopCodeList ([2d63d6a](https://github.com/yeukfei02/singapore-bus-arrival/commit/2d63d6a1ae6a4f55b38b866afdd24dd6ab842930))
* 🐛 fix sls.yml, readme.md ([fd0111c](https://github.com/yeukfei02/singapore-bus-arrival/commit/fd0111ca6575ed281a9bc4e91947a8a2b6e50ba9))
* 🐛 fix stage in deploy.yml ([ed77e4d](https://github.com/yeukfei02/singapore-bus-arrival/commit/ed77e4d6ed742c5bcc89cc207b453d750345214e))
* 🐛 update serverless-plugin-split-stacks lib ([31c4f8e](https://github.com/yeukfei02/singapore-bus-arrival/commit/31c4f8e5fe904f7ac42699f94fde2d3250cf1d77))
* 🐛 update sls lib ([565562c](https://github.com/yeukfei02/singapore-bus-arrival/commit/565562cc4be97cae58ca5950047c2d2a853e0414))

## [1.3.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.2.2...v1.3.0) (2021-03-16)


### Features

* 🎸 add github actions ([98c0515](https://github.com/yeukfei02/singapore-bus-arrival/commit/98c0515d1946735d726f91c2bffe59de42e1c71a))


### Bug Fixes

* 🐛 format file ([82760df](https://github.com/yeukfei02/singapore-bus-arrival/commit/82760df763a27212cea9878d2a55f65a8737e4b9))
* 🐛 update sls lib ([0df2f98](https://github.com/yeukfei02/singapore-bus-arrival/commit/0df2f981085a40e3abece07bdf59b509e3e070ac))

### [1.2.2](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.2.1...v1.2.2) (2021-01-27)


### Bug Fixes

* 🐛 add remove command ([5bd20fd](https://github.com/yeukfei02/singapore-bus-arrival/commit/5bd20fd7e379513bd24e5f8f5ea8fcbbf1c208eb))

### [1.2.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.2.0...v1.2.1) (2021-01-26)


### Bug Fixes

* 🐛 fix xray tracing id ([74b7fde](https://github.com/yeukfei02/singapore-bus-arrival/commit/74b7fde184def617633a481c8a7d45bb1f02f840))

## [1.2.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.1.1...v1.2.0) (2021-01-22)


### Features

* 🎸 add package command ([5582f5c](https://github.com/yeukfei02/singapore-bus-arrival/commit/5582f5c8f4e0fa71290338a564c51d9478574bea))
* 🎸 add serverless-prune-plugin ([c008c5a](https://github.com/yeukfei02/singapore-bus-arrival/commit/c008c5afe5adf3fba1a3280742f5fe2a22ca99fb))


### Bug Fixes

* 🐛 update sls lib ([243da3a](https://github.com/yeukfei02/singapore-bus-arrival/commit/243da3a8c16ffbb8e8ce11aaaa70289785971732))

### [1.1.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.1.0...v1.1.1) (2021-01-22)


### Bug Fixes

* 🐛 remove not used file and lib ([5b482e6](https://github.com/yeukfei02/singapore-bus-arrival/commit/5b482e66c28d1e700157b26b9b02c5c9cc41123d))

## [1.1.0](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.0.2...v1.1.0) (2021-01-22)


### Features

* 🎸 update sls and dynamoose lib ([f7c5f58](https://github.com/yeukfei02/singapore-bus-arrival/commit/f7c5f5872cbd25e9edce1070ea479c9d8b0e39f9))


### Bug Fixes

* 🐛 add  apiGateway description ([17f7158](https://github.com/yeukfei02/singapore-bus-arrival/commit/17f71584014b6d27c7dfb04944da475526591550))
* 🐛 fix apiGateway description in master ([6faf879](https://github.com/yeukfei02/singapore-bus-arrival/commit/6faf879d4e766dbc15b20ea65525bab2774c4ab7))

### [1.0.2](https://github.com/yeukfei02/singapore-bus-arrival/compare/v1.0.1...v1.0.2) (2021-01-07)


### Bug Fixes

* 🐛 fix apiName in master ([0cfd3a5](https://github.com/yeukfei02/singapore-bus-arrival/commit/0cfd3a51a636317908782a77f707d8c1197bb934))
* 🐛 fix sls deploy error ([79a00f1](https://github.com/yeukfei02/singapore-bus-arrival/commit/79a00f13ca56d8e19eea3f459b5d140943257823))
* 🐛 update sls lib ([f55e7f0](https://github.com/yeukfei02/singapore-bus-arrival/commit/f55e7f077e60a62a30ebb03f36ea03d827b69ad7))

### [1.0.1](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.20...v1.0.1) (2021-01-06)

### [0.1.20](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.19...v0.1.20) (2021-01-06)


### Features

* 🎸 add context in handler ([fdca235](https://github.com/yeukfei02/singapore-bus-arrival/commit/fdca235547f51a1ff483602f6c897005db79f32c))


### Bug Fixes

* 🐛 fix playground endpoint ([e1a2797](https://github.com/yeukfei02/singapore-bus-arrival/commit/e1a2797a8e5e868f48e3fdaa9a67e43f557bdbc3))

### [0.1.19](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.18...v0.1.19) (2021-01-06)

### [0.1.18](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.17...v0.1.18) (2021-01-06)


### Bug Fixes

* 🐛 remove not used lib and update sls lib ([a2b1663](https://github.com/yeukfei02/singapore-bus-arrival/commit/a2b1663cac86a2129d1b06091a59d6a361eee190))

### [0.1.17](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.16...v0.1.17) (2020-12-15)


### Bug Fixes

* 🐛 fix playground endpoint ([fb386ec](https://github.com/yeukfei02/singapore-bus-arrival/commit/fb386ecc4820337445b786a157a9aeb635849835))

### [0.1.16](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.15...v0.1.16) (2020-12-15)


### Bug Fixes

* 🐛 fix stage and NODE_ENV ([d30ec57](https://github.com/yeukfei02/singapore-bus-arrival/commit/d30ec574dde518e0b97e83613739e9aeda839fed))
* 🐛 fix stage and NODE_ENV in master branch ([1894021](https://github.com/yeukfei02/singapore-bus-arrival/commit/18940213fa3846765473eecd23a70e1d6c17aefe))

### [0.1.15](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.14...v0.1.15) (2020-11-25)

### [0.1.14](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.13...v0.1.14) (2020-11-16)

### [0.1.13](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.12...v0.1.13) (2020-11-16)

### [0.1.12](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.11...v0.1.12) (2020-11-15)

### [0.1.11](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.10...v0.1.11) (2020-11-14)


### Features

* 🎸 add apollo-server-testing for test case ([59e8d09](https://github.com/yeukfei02/singapore-bus-arrival/commit/59e8d099ceab215483bb95e66c5ad951a24e3a8a))

### [0.1.10](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.9...v0.1.10) (2020-11-14)

### [0.1.9](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.8...v0.1.9) (2020-11-11)

### [0.1.8](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.7...v0.1.8) (2020-11-11)


### Bug Fixes

* 🐛 add introspection ([afd4394](https://github.com/yeukfei02/singapore-bus-arrival/commit/afd43949ec7443edf0e61d4e50136ccc169a118b))

### [0.1.7](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.6...v0.1.7) (2020-11-10)

### [0.1.6](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.5...v0.1.6) (2020-11-09)


### Features

* 🎸 add pageNumber in busStopByLatLong ([1a8df50](https://github.com/yeukfei02/singapore-bus-arrival/commit/1a8df50510a51feb7e96c177c0c353548a6e5e8b))

### [0.1.5](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.4...v0.1.5) (2020-11-09)


### Features

* 🎸 add deleteFavouritesById ([4aa857b](https://github.com/yeukfei02/singapore-bus-arrival/commit/4aa857b2336fff4df1718453bb8c94c135c0615a))

### [0.1.4](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.3...v0.1.4) (2020-11-08)


### Features

* 🎸 add addfavourites and getfavouritesbyinstallationid ([be3e450](https://github.com/yeukfei02/singapore-bus-arrival/commit/be3e4505573d1c36d78944685423b88bb4dd1e1b))

### [0.1.3](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.2...v0.1.3) (2020-11-07)


### Bug Fixes

* 🐛 fix getbusstop pagination in api ([ac2d86d](https://github.com/yeukfei02/singapore-bus-arrival/commit/ac2d86dc08b1c69f58d47659454724cde6d6207d))

### [0.1.2](https://github.com/yeukfei02/singapore-bus-arrival/compare/v0.1.1...v0.1.2) (2020-11-07)

### 0.1.1 (2020-11-07)


### Features

* 🎸 create project structure ([a32db13](https://github.com/yeukfei02/singapore-bus-arrival/commit/a32db13cd7760baed036c8baade505caed8dd81d))


### Bug Fixes

* 🐛 fix serverless version ([44cb699](https://github.com/yeukfei02/singapore-bus-arrival/commit/44cb6994c6e16f52bad9c99e599812a55fdf7033))
