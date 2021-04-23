import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getDesktopSizeType } from '../../src/util/getDesktopSizeType';

describe('getDesktopSize for WidthSizeClass', () => {
    it('returns compact from 0 to 591', () => {
        expect(getDesktopSizeType(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(300, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(500, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(591, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(592, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 592 to 825', () => {
        expect(getDesktopSizeType(592, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(700, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(800, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(825, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(826, WidthSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 826 to 1679', () => {
        expect(getDesktopSizeType(826, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(900, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1000, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1679, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1680, WidthSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1680 to infinite', () => {
        expect(getDesktopSizeType(1680, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSizeType(2000, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSizeType(3000, WidthSizeClass)).toBe(SizeType.extraLarge);
    });
});

describe('getDesktopSize for HeightSizeClass', () => {
    it('returns compact from 0 to 596', () => {
        expect(getDesktopSizeType(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(300, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(500, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(596, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSizeType(597, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 597 to 774', () => {
        expect(getDesktopSizeType(597, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(600, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(700, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(774, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSizeType(775, HeightSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 775 to 1049', () => {
        expect(getDesktopSizeType(775, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(900, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1000, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1049, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSizeType(1050, HeightSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1050 to infinite', () => {
        expect(getDesktopSizeType(1050, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSizeType(2000, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSizeType(3000, HeightSizeClass)).toBe(SizeType.extraLarge);
    });
});
