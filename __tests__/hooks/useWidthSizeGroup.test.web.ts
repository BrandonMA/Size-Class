import { renderHook } from '@testing-library/react-hooks';
import { useWidthSizeGroup } from '../../src/hooks/useWidthSizeGroup';

describe('useWidthSizeGroup', () => {
    it('returns SizeGroup', () => {
        const { result } = renderHook(() => useWidthSizeGroup());
        expect(result.current).not.toBeNull();
        expect(result.current.length).toBe(2);
    });
});
