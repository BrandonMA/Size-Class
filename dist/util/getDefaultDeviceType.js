// Provide a basic implementation for the first run
import { DeviceType } from 'expo-device';
import { Platform } from 'react-native';
export function getDefaultDeviceType() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        return DeviceType.PHONE;
    }
    else {
        return DeviceType.DESKTOP;
    }
}
//# sourceMappingURL=getDefaultDeviceType.js.map