import { DeviceType } from '../../../src/types/DeviceType';
import { getDefaultDeviceType } from '../../../src/util/getDefaultDeviceType';

describe('getDefaultDeviceType', () => {
    it('returns phone for ios', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.PHONE);
    });
});
