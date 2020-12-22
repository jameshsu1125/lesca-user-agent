[![dev by JamesHsu](https://img.shields.io/badge/Dev%20by-Jameshsu1125-green)](https://github.com/jameshsu1125/) [![made in Taiwan](https://img.shields.io/badge/Made%20in-Taiwan-orange)](https://github.com/jameshsu1125/)

# Installation

```sh
$ npm install lesca-user-agent --save
```

# Usage

- location redirect

```javascript
import UserAgent from 'lesca-user-agent';

if (UserAgent.get() === 'mobile') window.location.replace('./m/');
```

- detect device

```javascript
import UserAgent from 'lesca-user-agent';

function download() {
	if (UserAgent.Ios.is()) window.open('https://apps.apple.com/us/app/github/id1477376905');
	else window.open('https://play.google.com/store/apps/details?id=com.github.android&hl=zh_TW&gl=US');
}

<button onClick={download}>download github</button>;
```

# Methods

| method                  |      options       |   description    | default |
| :---------------------- | :----------------: | :--------------: | ------: |
| get(tabletEqualDesktop) | tabletEqualDesktop | tablet = Desktop |   false |

# Properties

| Properties    | type |     description     | default |
| :------------ | :--: | :-----------------: | ------: |
| Wechat.is()   | func |  is wechat browser  |         |
| Facebook.is() | func | is facebook browser |         |
| Line.is()     | func |   is Line browser   |         |
| Ios.is()      | func |   is Ios browser    |         |
| Ios.Android() | func | is Android browser  |         |
| Ios.Mac()     | func |   is Mac browser    |         |
| Ios.PC()      | func |    is PC browser    |         |
