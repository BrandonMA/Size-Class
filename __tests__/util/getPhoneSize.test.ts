import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getPhoneSize } from '../../src/util/getPhoneSize';

describe('getPhoneSize for WidthSizeClass', () => {
    it('returns compact from 0 to 666', () => {
        expect(getPhoneSize(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSize(666, WidthSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSize(667, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 667 to infinite', () => {
        expect(getPhoneSize(667, WidthSizeClass)).toBe(SizeType.medium);
        expect(getPhoneSize(1000, WidthSizeClass)).toBe(SizeType.medium);
    });
});

describe('getPhoneSize for HeightSizeClass', () => {
    it('returns compact from 0 to 811', () => {
        expect(getPhoneSize(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSize(811, HeightSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSize(812, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 812 to infinite', () => {
        expect(getPhoneSize(812, HeightSizeClass)).toBe(SizeType.medium);
        expect(getPhoneSize(1000, HeightSizeClass)).toBe(SizeType.medium);
    });
});
