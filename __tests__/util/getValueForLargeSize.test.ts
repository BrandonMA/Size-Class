import { SizeType } from '../../src/types';
import { getValueForLargeSize } from '../../src/util/getValueForLargeSize';

describe('getValueForLargeSize', () => {
    it('returns large option when large or extra large is provided', () => {
        expect(getValueForLargeSize(SizeType.large, 'large', 'fallback')).toBe('large');
        expect(getValueForLargeSize(SizeType.extraLarge, 'large', 'fallback')).toBe('large');
    });

    it('returns fallback option when medium or compact is provided', () => {
        expect(getValueForLargeSize(SizeType.compact, 'large', 'fallback')).toBe('fallback');
        expect(getValueForLargeSize(SizeType.medium, 'large', 'fallback')).toBe('fallback');
    });
});
