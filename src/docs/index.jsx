import React from 'react';
import { render } from 'react-dom';
import UserAgent from './../lib/index';

import './styles.css';

console.log(UserAgent);

//if (UserAgent.get() === 'mobile') window.location.replace('./m/');

function download() {
	if (UserAgent.Ios.is()) window.open('https://apps.apple.com/us/app/github/id1477376905');
	else window.open('https://play.google.com/store/apps/details?id=com.github.android&hl=zh_TW&gl=US');
}

function Demo() {
	return (
		<>
			<div>{UserAgent.get() === 'desktop' ? 'desktop' : 'mobile'}</div>
			<button onClick={download}>download github</button>
		</>
	);
}

render(<Demo />, document.getElementById('app'));
