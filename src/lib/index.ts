import MobileDetect from 'mobile-detect';

const get = (tabletEqualDesktop = false) => {
  let mobileDetect = new MobileDetect(window.navigator.userAgent);
  if (mobileDetect.tablet()) {
    if (tabletEqualDesktop) return 'desktop';
    else return 'mobile';
  } else if (mobileDetect.mobile()) return 'mobile';
  else return 'desktop';
};

const facebook = () => {
  const ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

const ios = () => {
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  return mobileDetect.os() == 'iOS';
};

const android = () => {
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  return mobileDetect.os() == 'AndroidOS';
};

const line = () => {
  const ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Line') > -1 || ua.indexOf('Line') > -1;
};

const mac = () => {
  const ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Mac OS X') > -1;
};

const pc = () => {
  const ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Mac OS X') < 0;
};

const UserAgent = { get, facebook, ios, android, line, mac, pc };
export default UserAgent;
