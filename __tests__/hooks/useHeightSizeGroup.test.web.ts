import { renderHook } from '@testing-library/react-hooks';
import { useHeightSizeGroup } from '../../src/hooks/useHeightSizeGroup';

describe('useHeightSizeGroup', () => {
    it('returns SizeGroup', () => {
        const { result } = renderHook(() => useHeightSizeGroup());
        expect(result.current).not.toBeNull();
        expect(result.current.length).toBe(2);
    });
});
