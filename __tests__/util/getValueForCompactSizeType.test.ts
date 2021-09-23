import { SizeType } from '../../src/types';
import { getValueForCompactSizeType } from '../../src/util/getValueForCompactSizeType';

describe('getValueForLargeSizeType', () => {
    it('returns compact option when medium or compact is provided', () => {
        expect(getValueForCompactSizeType(SizeType.compact, 'compact', 'fallback')).toBe('compact');
        expect(getValueForCompactSizeType(SizeType.medium, 'compact', 'fallback')).toBe('compact');
    });

    it('returns fallback option when large or extra large is provided', () => {
        expect(getValueForCompactSizeType(SizeType.large, 'compact', 'fallback')).toBe('fallback');
        expect(getValueForCompactSizeType(SizeType.extraLarge, 'compact', 'fallback')).toBe('fallback');
    });
});
