import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getPhoneSizeType } from '../../src/util/getPhoneSizeType';

describe('getPhoneSize for WidthSizeClass', () => {
    it('returns compact from 0 to 666', () => {
        expect(getPhoneSizeType(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSizeType(666, WidthSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSizeType(667, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 667 to infinite', () => {
        expect(getPhoneSizeType(667, WidthSizeClass)).toBe(SizeType.medium);
        expect(getPhoneSizeType(1000, WidthSizeClass)).toBe(SizeType.medium);
    });
});

describe('getPhoneSize for HeightSizeClass', () => {
    it('returns compact from 0 to 811', () => {
        expect(getPhoneSizeType(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSizeType(811, HeightSizeClass)).toBe(SizeType.compact);
        expect(getPhoneSizeType(812, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 812 to infinite', () => {
        expect(getPhoneSizeType(812, HeightSizeClass)).toBe(SizeType.medium);
        expect(getPhoneSizeType(1000, HeightSizeClass)).toBe(SizeType.medium);
    });
});
