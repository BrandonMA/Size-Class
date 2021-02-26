import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getTabletSize } from '../../src/util/getTabletSize';

describe('getTabletSize for WidthSizeClass', () => {
    it('returns compact from 0 to 591', () => {
        expect(getTabletSize(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(300, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(500, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(591, WidthSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(592, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 592 to 767', () => {
        expect(getTabletSize(592, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSize(700, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSize(767, WidthSizeClass)).toBe(SizeType.medium);
        expect(getTabletSize(768, WidthSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 768 to 1365', () => {
        expect(getTabletSize(768, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(900, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1000, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1365, WidthSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1366, WidthSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1366 to infinite', () => {
        expect(getTabletSize(1366, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSize(2000, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSize(3000, WidthSizeClass)).toBe(SizeType.extraLarge);
    });
});

describe('getTabletSize for HeightSizeClass', () => {
    it('returns compact from 0 to 767', () => {
        expect(getTabletSize(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(300, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(500, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(767, HeightSizeClass)).toBe(SizeType.compact);
        expect(getTabletSize(768, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 768 to 833', () => {
        expect(getTabletSize(768, HeightSizeClass)).toBe(SizeType.medium);
        expect(getTabletSize(833, HeightSizeClass)).toBe(SizeType.medium);
        expect(getTabletSize(834, HeightSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 834 to 1024', () => {
        expect(getTabletSize(834, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(900, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1000, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1023, HeightSizeClass)).toBe(SizeType.large);
        expect(getTabletSize(1024, HeightSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1024 to infinite', () => {
        expect(getTabletSize(1024, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSize(2000, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getTabletSize(3000, HeightSizeClass)).toBe(SizeType.extraLarge);
    });
});
