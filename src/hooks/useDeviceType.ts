import { DeviceType, getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { getDefaultValueBasedOnPlatform } from '../util/getDefaultValueBasedOnPlatform';

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
