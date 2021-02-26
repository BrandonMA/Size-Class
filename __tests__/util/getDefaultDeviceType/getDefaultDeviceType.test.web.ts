import { DeviceType } from '../../../src/types/DeviceType';
import { getDefaultDeviceType } from '../../../src/util/getDefaultDeviceType';

describe('getDefaultDeviceType', () => {
    it('returns desktop for anything else', () => {
        expect(getDefaultDeviceType()).toBe(DeviceType.DESKTOP);
    });
});
