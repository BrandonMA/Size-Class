import { DeviceType } from 'expo-device';
import { getDefaultDeviceType } from '../../../src/util/getDefaultDeviceType';

describe('getDefaultDeviceType', () => {
    it('returns desktop for anything else', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.DESKTOP);
    });
});
