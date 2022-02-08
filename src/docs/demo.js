import { useEffect } from 'react';
import UserAgent from '../lib';
import { Code } from './components';

const code = `import UserAgent from 'lesca-user-agent';

<span>
	your device is { UserAgent.get() }
</span>
`;

const code1 = `UserAgent.facebook()`;
const code2 = `UserAgent.ios()`;
const code3 = `UserAgent.android()`;
const code4 = `UserAgent.line()`;
const code5 = `UserAgent.mac()`;
const code6 = `UserAgent.pc()`;

const Demo = () => {
	useEffect(() => {}, []);
	return (
		<>
			<div>
				<h2>detect device</h2>
				<Code code={code} />
				<pre>
					<code>your device is {UserAgent.get()}</code>
				</pre>
			</div>
			<div>
				<h2>Is it facebook in-app browser?</h2>
				<Code code={code1} />
				<pre>
					<code>{JSON.stringify(UserAgent.facebook())}</code>
				</pre>
			</div>
			<div>
				<h2>Is it Line in-app browser?</h2>
				<Code code={code4} />
				<pre>
					<code>{JSON.stringify(UserAgent.line())}</code>
				</pre>
			</div>
			<div>
				<h2>Is it IOS device?</h2>
				<Code code={code2} />
				<pre>
					<code>{JSON.stringify(UserAgent.ios())}</code>
				</pre>
			</div>
			<div>
				<h2>Is it Android device?</h2>
				<Code code={code3} />
				<pre>
					<code>{JSON.stringify(UserAgent.android())}</code>
				</pre>
			</div>
			<div>
				<h2>Is it Mac device?</h2>
				<Code code={code5} />
				<pre>
					<code>{JSON.stringify(UserAgent.mac())}</code>
				</pre>
			</div>
			<div>
				<h2>Is it PC device?</h2>
				<Code code={code6} />
				<pre>
					<code>{JSON.stringify(UserAgent.pc())}</code>
				</pre>
			</div>
		</>
	);
};
export default Demo;
