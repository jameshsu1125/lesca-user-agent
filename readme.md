[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/) [![npm](https://img.shields.io/badge/npm-Jameshsu1125-red)](https://www.npmjs.com/~jameshsu1125)

# Installation

```sh
$ npm install lesca-user-agent --save
```

# Demo

[Live Demo](https://jameshsu1125.github.io/lesca-user-agent/)

# Usage

- location redirect

```javascript
import UserAgent from 'lesca-user-agent';

if (UserAgent.get() === 'mobile') window.location.replace('./m/');
```

- detect device

```javascript
import UserAgent from 'lesca-user-agent';

const appIOS = 'https://apps.apple.com/us/app/github/id1477376905';
const appAndroid = 'https://play.google.com/store/apps/details?id=com.github.android';

function download() {
	if (UserAgent.ios()) window.open(appIOS);
	else window.open(appAndroid);
}

<button onClick={download}>download github</button>;
```

# Methods

| method                  |      options       |   description    | default |
| :---------------------- | :----------------: | :--------------: | ------: |
| get(tabletEqualDesktop) | tabletEqualDesktop | tablet = Desktop |   false |

# Properties

| Properties  | type |     description     | default |
| :---------- | :--: | :-----------------: | ------: |
| .wechat()   | func |  is wechat browser  |         |
| .facebook() | func | is facebook browser |         |
| .line()     | func |   is Line browser   |         |
| .ios()      | func |   is Ios browser    |         |
| .android()  | func | is Android browser  |         |
| .mac()      | func |   is Mac browser    |         |
| .pc()       | func |    is PC browser    |         |
