import { SizeType } from '../../src/types';
import { getValueForSizeType } from '../../src/util/getValueForSizeType';

describe('getValueForSize', () => {
    it('returns extra large when extra large is provided', () => {
        expect(getValueForSizeType(SizeType.extraLarge, 'extra large', 'large', 'medium', 'compact')).toBe('extra large');
        expect(getValueForSizeType(SizeType.extraLarge, 'extra large', 'large', 'medium', 'compact')).not.toBe('large');
    });

    it('returns large when large is provided', () => {
        expect(getValueForSizeType(SizeType.large, 'extra large', 'large', 'medium', 'compact')).toBe('large');
        expect(getValueForSizeType(SizeType.large, 'extra large', 'large', 'medium', 'compact')).not.toBe('medium');
    });

    it('returns medium when medium is provided', () => {
        expect(getValueForSizeType(SizeType.medium, 'extra large', 'large', 'medium', 'compact')).toBe('medium');
        expect(getValueForSizeType(SizeType.medium, 'extra large', 'large', 'medium', 'compact')).not.toBe('compact');
    });

    it('returns compact when compact is provided', () => {
        expect(getValueForSizeType(SizeType.compact, 'extra large', 'large', 'medium', 'compact')).toBe('compact');
        expect(getValueForSizeType(SizeType.compact, 'extra large', 'large', 'medium', 'compact')).not.toBe('extra large');
    });
});
