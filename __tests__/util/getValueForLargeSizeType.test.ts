import { SizeType } from '../../src/types';
import { getValueForLargeSizeType } from '../../src/util/getValueForLargeSizeType';

describe('getValueForLargeSizeType', () => {
    it('returns large option when large or extra large is provided', () => {
        expect(getValueForLargeSizeType(SizeType.large, 'large', 'fallback')).toBe('large');
        expect(getValueForLargeSizeType(SizeType.extraLarge, 'large', 'fallback')).toBe('large');
    });

    it('returns fallback option when medium or compact is provided', () => {
        expect(getValueForLargeSizeType(SizeType.compact, 'large', 'fallback')).toBe('fallback');
        expect(getValueForLargeSizeType(SizeType.medium, 'large', 'fallback')).toBe('fallback');
    });
});
