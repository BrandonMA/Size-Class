import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { Platform } from 'react-native';

// Provide a basic implementation for the first run
function getDefaultValueBasedOnPlatform(): DeviceType {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        return DeviceType.PHONE;
    } else {
        return DeviceType.DESKTOP;
    }
}

export function useDeviceType(): DeviceType {
    const [type, setType] = useState<DeviceType>(getDefaultValueBasedOnPlatform());

    useLayoutEffect(() => {
        getDeviceTypeAsync()
            .then((type) => {
                return setType(type);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return type;
}
