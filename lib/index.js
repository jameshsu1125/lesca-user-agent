var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "mobile-detect"], function (require, exports, mobile_detect_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    mobile_detect_1 = __importDefault(mobile_detect_1);
    var get = function (tabletEqualDesktop) {
        if (tabletEqualDesktop === void 0) { tabletEqualDesktop = false; }
        var mobileDetect = new mobile_detect_1.default(window.navigator.userAgent);
        if (mobileDetect.tablet()) {
            if (tabletEqualDesktop)
                return 'desktop';
            else
                return 'mobile';
        }
        else if (mobileDetect.mobile())
            return 'mobile';
        else
            return 'desktop';
    };
    var facebook = function () {
        var ua = navigator.userAgent || navigator.vendor;
        return ua.indexOf('FBAN') > -1 || ua.indexOf('FBAV') > -1;
    };
    var ios = function () {
        var mobileDetect = new mobile_detect_1.default(window.navigator.userAgent);
        return mobileDetect.os() == 'iOS';
    };
    var android = function () {
        var mobileDetect = new mobile_detect_1.default(window.navigator.userAgent);
        return mobileDetect.os() == 'AndroidOS';
    };
    var line = function () {
        var ua = navigator.userAgent || navigator.vendor;
        return ua.indexOf('Line') > -1 || ua.indexOf('Line') > -1;
    };
    var mac = function () {
        var ua = navigator.userAgent || navigator.vendor;
        return ua.indexOf('Mac OS X') > -1;
    };
    var pc = function () {
        var ua = navigator.userAgent || navigator.vendor;
        return ua.indexOf('Mac OS X') < 0;
    };
    var UserAgent = { get: get, facebook: facebook, ios: ios, android: android, line: line, mac: mac, pc: pc };
    exports.default = UserAgent;
});
