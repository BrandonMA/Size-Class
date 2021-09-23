import { DeviceType } from '../../src/types';
import { getStringNameFromDeviceType } from '../../src/util/getStringNameFromDeviceType';

describe('getStringNameFromDeviceType', () => {
    it('returns phone for DeviceType.PHONE', () => {
        expect(getStringNameFromDeviceType(DeviceType.PHONE)).toBe('phone');
    });

    it('returns tablet for DeviceType.TABLET', () => {
        expect(getStringNameFromDeviceType(DeviceType.TABLET)).toBe('tablet');
    });

    it('returns desktop for DeviceType.DESKTOP', () => {
        expect(getStringNameFromDeviceType(DeviceType.DESKTOP)).toBe('desktop');
    });

    it('returns tv for DeviceType.TV', () => {
        expect(getStringNameFromDeviceType(DeviceType.TV)).toBe('tv');
    });

    it('returns unknown for DeviceType.UNKNOWN', () => {
        expect(getStringNameFromDeviceType(DeviceType.UNKNOWN)).toBe('unknown');
    });
});
