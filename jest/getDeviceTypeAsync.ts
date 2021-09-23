import { DeviceType, getDeviceTypeAsync } from 'expo-device';

jest.mock('expo-device');

(getDeviceTypeAsync as any).mockReturnValue(Promise.resolve(DeviceType.PHONE));
