import { useSizeValue } from '../../src/hooks/useSizeValue';
import { renderHook } from '@testing-library/react-hooks';

describe('useSizeValue', () => {
    it('returns a value', () => {
        const { result } = renderHook(() => useSizeValue('width'));
        console.log(result.current);
        expect(result.current).toBeGreaterThanOrEqual(0);
    });
});
