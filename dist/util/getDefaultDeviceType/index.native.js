import { DeviceType } from '../../types';
import { Platform } from 'react-native';
export function getDefaultDeviceType() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        return DeviceType.PHONE;
    }
    else {
        return DeviceType.DESKTOP;
    }
}
//# sourceMappingURL=index.native.js.map