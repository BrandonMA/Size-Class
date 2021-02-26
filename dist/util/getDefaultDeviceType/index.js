import { DeviceType } from '../../types';
import UAParser from 'ua-parser-js';
export function getDefaultDeviceType() {
    var parser = new UAParser(window.navigator.userAgent);
    switch (parser.getResult().device.type) {
        case 'mobile':
            return DeviceType.PHONE;
        case 'tablet':
            return DeviceType.TABLET;
        case 'smarttv':
            return DeviceType.TV;
        case 'console':
        case 'embedded':
        case 'wearable':
            return DeviceType.UNKNOWN;
        default:
            return DeviceType.DESKTOP;
    }
}
//# sourceMappingURL=index.js.map