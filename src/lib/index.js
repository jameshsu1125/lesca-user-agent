import MobileDetect from 'mobile-detect';

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const ua = navigator.userAgent || navigator.vendor || window.opera;

const get = (tabletEqualDesktop = false) => {
	if (mobileDetect.tablet()) {
		if (tabletEqualDesktop) return 'desktop';
		else return 'mobile';
	} else if (mobileDetect.mobile()) return 'mobile';
	else return 'desktop';
};

const wechat = () => {
	return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
};

const facebook = () => {
	return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

const ios = () => {
	return mobileDetect.os() == 'iOS';
};

const android = () => {
	return mobileDetect.os() == 'AndroidOS';
};

const line = () => {
	return ua.indexOf('Line') > -1 || ua.indexOf('Line') > -1;
};

const mac = () => {
	return ua.indexOf('Mac OS X') > -1;
};

const pc = () => {
	return ua.indexOf('Mac OS X') < 0;
};

const UserAgent = { get, wechat, facebook, ios, android, line, mac, pc };
export default UserAgent;
