"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.UserAgentType = void 0;
var _mobileDetect = _interopRequireDefault(require("mobile-detect"));
var UserAgentType = exports.UserAgentType = /*#__PURE__*/function (UserAgentType) {
  UserAgentType[UserAgentType["Desktop"] = 0] = "Desktop";
  UserAgentType[UserAgentType["Mobile"] = 1] = "Mobile";
  return UserAgentType;
}({});
var get = function get() {
  var tabletEqualDesktop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var mobileDetect = new _mobileDetect["default"](window.navigator.userAgent);
  if (mobileDetect.tablet()) {
    if (tabletEqualDesktop) return UserAgentType.Desktop;else return UserAgentType.Mobile;
  } else if (mobileDetect.mobile()) return UserAgentType.Mobile;else return UserAgentType.Desktop;
};
var facebook = function facebook() {
  var ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
};
var ios = function ios() {
  var mobileDetect = new _mobileDetect["default"](window.navigator.userAgent);
  return mobileDetect.os() == 'iOS';
};
var android = function android() {
  var mobileDetect = new _mobileDetect["default"](window.navigator.userAgent);
  return mobileDetect.os() == 'AndroidOS';
};
var line = function line() {
  var ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Line') > -1 || ua.indexOf('Line') > -1;
};
var mac = function mac() {
  var ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Mac OS X') > -1;
};
var pc = function pc() {
  var ua = navigator.userAgent || navigator.vendor;
  return ua.indexOf('Mac OS X') < 0;
};
var UserAgent = {
  get: get,
  facebook: facebook,
  ios: ios,
  android: android,
  line: line,
  mac: mac,
  pc: pc
};
var _default = exports["default"] = UserAgent;