import YourClass, { UserAgentType } from '.';

const createApp = () => {
  return new Promise<HTMLElement>((resolve) => {
    const app = document.createElement('div');
    app.innerHTML = String(YourClass.get() === UserAgentType.Desktop);
    console.log(YourClass);
    resolve(app);
  });
};

export default createApp;

const appElement = document.getElementById('app');
if (appElement && appElement.children.length === 0) {
  createApp().then((app) => {
    appElement.appendChild(app);
  });
}
