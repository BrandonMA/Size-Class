import '../../jest/getDeviceTypeAsync';
import { useDeviceType } from '../../src/hooks/useDeviceType';
import { renderHook } from '@testing-library/react-hooks';
import { DeviceType } from 'expo-device';

describe('useDeviceType', () => {
    it('returns default based on platform', async () => {
        const resultObject = renderHook(() => useDeviceType());
        expect(resultObject.result.current).toBe(DeviceType.DESKTOP);
        await resultObject.waitForNextUpdate();
        expect(resultObject.result.current).toBe(DeviceType.PHONE);
    });
});
