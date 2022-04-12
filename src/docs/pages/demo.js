import { useEffect } from 'react';
import UserAgent from '../../lib/';

const Demo = () => {
  useEffect(() => {}, []);
  return (
    <div className='Demo'>
      <h2>Demo</h2>

      <h4>What is your device?</h4>
      <pre>
        <code>{UserAgent.get()}</code>
      </pre>

      <h4>Is it facebook in-app browser?</h4>
      <pre>
        <code>{JSON.stringify(UserAgent.facebook())}</code>
      </pre>

      <h4>Is it Line in-app browser?</h4>
      <pre>
        <code>{JSON.stringify(UserAgent.line())}</code>
      </pre>

      <h4>Is it Android device?</h4>
      <pre>
        <code>{JSON.stringify(UserAgent.android())}</code>
      </pre>

      <h4>Is it Mac device?</h4>
      <pre>
        <code>{JSON.stringify(UserAgent.mac())}</code>
      </pre>

      <h4>Is it PC device?</h4>
      <pre>
        <code>{JSON.stringify(UserAgent.pc())}</code>
      </pre>
    </div>
  );
};
export default Demo;
