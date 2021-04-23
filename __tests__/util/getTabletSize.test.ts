import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getTabletSizeType } from '../../src/util/getTabletSizeType';

describe('getTabletSize for WidthSizeClass', () => {
    it('returns compact from 0 to 591', () => {
        expect(getTabletSizeType(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(300, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(500, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(591, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(592, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 592 to 767', () => {
        expect(getTabletSizeType(592, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSizeType(700, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSizeType(767, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSizeType(768, WidthSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 768 to 1365', () => {
        expect(getTabletSizeType(768, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(900, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1000, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1365, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1366, WidthSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1366 to infinite', () => {
        expect(getTabletSizeType(1366, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSizeType(2000, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSizeType(3000, WidthSizeClass)).toBe(SizeType.extraLarge);
    });
});

describe('getTabletSize for HeightSizeClass', () => {
    it('returns compact from 0 to 767', () => {
        expect(getTabletSizeType(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(300, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(500, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(767, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSizeType(768, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 768 to 833', () => {
        expect(getTabletSizeType(768, HeightSizeClass)).toBe(SizeType.medium);
        expect(getTabletSizeType(833, HeightSizeClass)).toBe(SizeType.medium);
        expect(getTabletSizeType(834, HeightSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 834 to 1024', () => {
        expect(getTabletSizeType(834, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(900, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1000, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1023, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSizeType(1024, HeightSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1024 to infinite', () => {
        expect(getTabletSizeType(1024, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSizeType(2000, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSizeType(3000, HeightSizeClass)).toBe(SizeType.extraLarge);
    });
});
