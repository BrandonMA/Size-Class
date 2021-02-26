import { HeightSizeClass, SizeType, WidthSizeClass } from '../../src/types';
import { getDesktopSize } from '../../src/util/getDesktopSize';

describe('getDesktopSize for WidthSizeClass', () => {
    it('returns compact from 0 to 591', () => {
        expect(getDesktopSize(0, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(300, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(500, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(591, WidthSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(592, WidthSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 592 to 825', () => {
        expect(getDesktopSize(592, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(700, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(800, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(825, WidthSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(826, WidthSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 826 to 1679', () => {
        expect(getDesktopSize(826, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(900, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1000, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1679, WidthSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1680, WidthSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1680 to infinite', () => {
        expect(getDesktopSize(1680, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSize(2000, WidthSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSize(3000, WidthSizeClass)).toBe(SizeType.extraLarge);
    });
});

describe('getDesktopSize for HeightSizeClass', () => {
    it('returns compact from 0 to 596', () => {
        expect(getDesktopSize(0, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(300, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(500, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(596, HeightSizeClass)).toBe(SizeType.compact);
        expect(getDesktopSize(597, HeightSizeClass)).not.toBe(SizeType.compact);
    });

    it('returns medium from 597 to 774', () => {
        expect(getDesktopSize(597, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(600, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(700, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(774, HeightSizeClass)).toBe(SizeType.medium);
        expect(getDesktopSize(775, HeightSizeClass)).not.toBe(SizeType.medium);
    });

    it('returns large from 775 to 1049', () => {
        expect(getDesktopSize(775, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(900, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1000, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1049, HeightSizeClass)).toBe(SizeType.large);
        expect(getDesktopSize(1050, HeightSizeClass)).not.toBe(SizeType.large);
    });

    it('returns extra large from 1050 to infinite', () => {
        expect(getDesktopSize(1050, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSize(2000, HeightSizeClass)).toBe(SizeType.extraLarge);
        expect(getDesktopSize(3000, HeightSizeClass)).toBe(SizeType.extraLarge);
    });
});
