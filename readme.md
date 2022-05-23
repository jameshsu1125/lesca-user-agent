[![NPM](https://img.shields.io/badge/NPM-ba443f?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
[![React](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![React](https://img.shields.io/badge/-ReactJs-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://zh-hant.reactjs.org/)
[![React](https://img.shields.io/badge/Less-1d365d?style=for-the-badge&logo=less&logoColor=white)](https://lesscss.org/)
[![React](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://www.w3schools.com/html/)
[![React](https://img.shields.io/badge/-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3schools.com/css/)
[![NPM](https://img.shields.io/badge/DEV-Jameshsu1125-9cf?style=for-the-badge)](https://www.npmjs.com/~jameshsu1125)

# Why use it?

Simple browser detection using the user agent.

#### [Live Demo](https://jameshsu1125.github.io/lesca-user-agent/)

# Installation

```sh
npm install lesca-user-agent --save
```

## Usage

location redirect

```javascript
import UserAgent from 'lesca-user-agent';

if (UserAgent.get() === 'mobile') window.location.replace('./m/');
```

detect device

```JSX
import UserAgent from 'lesca-user-agent';

const appIOS = 'https://apps.apple.com/us/app/github/id1477376905';
const appAndroid = 'https://play.google.com/store/apps/details?id=com.github.android';

function download() {
  if (UserAgent.ios()) window.open(appIOS);
  else window.open(appAndroid);
}

<button onClick={download}>download github</button>;
```

## Development

### Methods

| method                                              |     description     | default |
| :-------------------------------------------------- | :-----------------: | ------: |
| .**get**(**tabletEqualDesktop**:_boolean_):_string_ |   get user device   |   false |
| .**facebook**():_boolean_                           | is facebook browser |         |
| .**line**():_boolean_                               |   is Line browser   |         |
| .**ios**():_boolean_                                |   is Ios browser    |         |
| .**android**():_boolean_                            | is Android browser  |         |
| .**mac**():_boolean_                                |   is Mac browser    |         |
| .**pc**():_boolean_                                 |    is PC browser    |         |

### Features

- maintain if necessary
