# cordova-is-background

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Dependency Status][dependency-status-badge]][dependency-status]
[![devDependency Status][dev-dependency-status-badge]][dev-dependency-status]

> Utility function for finding out if the application is in the background or not

## Install

```
$ npm install --save cordova-is-background
```

## Usage

```javascript
import isBackground from 'cordova-is-background';

if (isBackground()) {
  notify('you have a new message!');
}
```

## License

See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).

[build-badge]: https://img.shields.io/travis/perrin4869/cordova-is-background/master.svg?style=flat-square
[build]: https://travis-ci.org/perrin4869/cordova-is-background

[npm-badge]: https://img.shields.io/npm/v/cordova-is-background.svg?style=flat-square
[npm]: https://www.npmjs.org/package/cordova-is-background

[dependency-status-badge]: https://david-dm.org/perrin4869/cordova-is-background.svg?style=flat-square
[dependency-status]: https://david-dm.org/perrin4869/cordova-is-background

[dev-dependency-status-badge]: https://david-dm.org/perrin4869/cordova-is-background/dev-status.svg?style=flat-square
[dev-dependency-status]: https://david-dm.org/perrin4869/cordova-is-background#info=devDependencies
