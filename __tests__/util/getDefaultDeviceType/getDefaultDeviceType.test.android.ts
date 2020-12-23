import { DeviceType } from 'expo-device';
import { Platform } from 'react-native';
import { getDefaultDeviceType } from '../../../src/util/getDefaultDeviceType';

describe('getDefaultDeviceType', () => {
    it('returns phone for android', () => {
        if (Platform.OS === 'android') {
            expect(getDefaultDeviceType()).toBe(DeviceType.PHONE);
        }
    });
});
