# Node dynamic import support

Tested on with all Node `>=12.0.0` versions manually via [nvm](https://github.com/nvm-sh/nvm). To run tests yourself, clone this repo and execute `node src/index.js`. The number `42` should be printed to the console.

## Support status

| Node version | [Release Date](https://nodejs.org/en/download/releases/) | Dynamic import support                                      |
| ------------ | -------------------------------------------------------- | ----------------------------------------------------------- |
| `12.16.3`    | 2020-05-26                                               | Not supported                                               |
| `12.17.0`    | 2020-05-26                                               | Supported, but marked as experimental                       |
| `>=12.20.0`  | 2020-11-24                                               | Fully supported (https://github.com/nodejs/node/pull/31974) |
| `13.0.0`     | 2019-10-22                                               | Not supported                                               |
| `>=13.2.0`   | 2019-11-21                                               | Fully supported                                             |
