import { SizeType } from '../../src/types';
import { getValueForSize } from '../../src/util/getValueForSize';

describe('getValueForSize', () => {
    it('returns extra large when extra large is provided', () => {
        expect(getValueForSize(SizeType.extraLarge, 'extra large', 'large', 'medium', 'compact')).toBe('extra large');
        expect(getValueForSize(SizeType.extraLarge, 'extra large', 'large', 'medium', 'compact')).not.toBe('large');
    });

    it('returns large when large is provided', () => {
        expect(getValueForSize(SizeType.large, 'extra large', 'large', 'medium', 'compact')).toBe('large');
        expect(getValueForSize(SizeType.large, 'extra large', 'large', 'medium', 'compact')).not.toBe('medium');
    });

    it('returns medium when medium is provided', () => {
        expect(getValueForSize(SizeType.medium, 'extra large', 'large', 'medium', 'compact')).toBe('medium');
        expect(getValueForSize(SizeType.medium, 'extra large', 'large', 'medium', 'compact')).not.toBe('compact');
    });

    it('returns compact when compact is provided', () => {
        expect(getValueForSize(SizeType.compact, 'extra large', 'large', 'medium', 'compact')).toBe('compact');
        expect(getValueForSize(SizeType.compact, 'extra large', 'large', 'medium', 'compact')).not.toBe('extra large');
    });
});
