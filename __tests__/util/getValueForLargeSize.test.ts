import { Size } from '../../src/types';
import { getValueForLargeSize } from '../../src/util/getValueForLargeSize';

describe('getValueForLargeSize', () => {
    it('returns large option when large or extra large is provided', () => {
        expect(getValueForLargeSize(Size.large, 'large', 'fallback')).toBe('large');
        expect(getValueForLargeSize(Size.extraLarge, 'large', 'fallback')).toBe('large');
    });

    it('returns fallback option when medium or compact is provided', () => {
        expect(getValueForLargeSize(Size.compact, 'large', 'fallback')).toBe('fallback');
        expect(getValueForLargeSize(Size.medium, 'large', 'fallback')).toBe('fallback');
    });
});
