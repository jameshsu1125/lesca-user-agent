"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

var mobileDetect = new _mobileDetect["default"](window.navigator.userAgent);
var ua = navigator.userAgent || navigator.vendor || window.opera;

var get = function get() {
  var tabletEqualDesktop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  if (mobileDetect.tablet()) {
    if (tabletEqualDesktop) return 'desktop';else return 'mobile';
  } else if (mobileDetect.mobile()) return 'mobile';else return 'desktop';
};

var wechat = function wechat() {
  return navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger';
};

var facebook = function facebook() {
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};

var ios = function ios() {
  return mobileDetect.os() == 'iOS';
};

var android = function android() {
  return mobileDetect.os() == 'AndroidOS';
};

var line = function line() {
  return ua.indexOf('Line') > -1 || ua.indexOf('Line') > -1;
};

var mac = function mac() {
  return ua.indexOf('Mac OS X') > -1;
};

var pc = function pc() {
  return ua.indexOf('Mac OS X') < 0;
};

var UserAgent = {
  get: get,
  wechat: wechat,
  facebook: facebook,
  ios: ios,
  android: android,
  line: line,
  mac: mac,
  pc: pc
};
var _default = UserAgent;
exports["default"] = _default;