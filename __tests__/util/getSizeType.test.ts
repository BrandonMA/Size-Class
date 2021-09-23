import { DeviceType, SizeType, WidthSizeClass } from '../../src/types';
import { getSizeType } from '../../src/util/getSizeType';

describe('getSizeType', () => {
    it('returns large from 826 to 1679 for DeviceType.DESKTOP', () => {
        expect(getSizeType(DeviceType.DESKTOP, 826, WidthSizeClass)).toBe(SizeType.large);
        expect(getSizeType(DeviceType.DESKTOP, 900, WidthSizeClass)).toBe(SizeType.large);
        expect(getSizeType(DeviceType.DESKTOP, 1000, WidthSizeClass)).toBe(SizeType.large);
        expect(getSizeType(DeviceType.DESKTOP, 1679, WidthSizeClass)).toBe(SizeType.large);
        expect(getSizeType(DeviceType.DESKTOP, 1680, WidthSizeClass)).not.toBe(SizeType.large);
    });

    it('returns medium from 592 to 767 for DeviceType.TABLET', () => {
        expect(getSizeType(DeviceType.TABLET, 592, WidthSizeClass)).toBe(SizeType.medium);
        expect(getSizeType(DeviceType.TABLET, 700, WidthSizeClass)).toBe(SizeType.medium);
        expect(getSizeType(DeviceType.TABLET, 767, WidthSizeClass)).toBe(SizeType.medium);
        expect(getSizeType(DeviceType.TABLET, 768, WidthSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns compact from 0 to 666', () => {
        expect(getSizeType(DeviceType.PHONE, 0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getSizeType(DeviceType.PHONE, 666, WidthSizeClass)).toBe(SizeType.compact);
        expect(getSizeType(DeviceType.PHONE, 667, WidthSizeClass)).not.toBe(SizeType.compact);
    });
});
