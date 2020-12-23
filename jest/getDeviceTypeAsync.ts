jest.mock('expo-device');

import { DeviceType, getDeviceTypeAsync } from 'expo-device';

(getDeviceTypeAsync as any).mockReturnValue(Promise.resolve(DeviceType.PHONE));
