import { useState, useLayoutEffect } from 'react';
import { useResponsiveHeight } from 'react-native-responsive-dimensions';
import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { Size } from '../enums/Size';
import { isDesktop } from '../utilityFunctions/isDesktop';
import { HeightSize } from '../enums/HeightSize';

export function useHeightSizeClass(): [Size, DeviceType] | null {
    const [type, setType] = useState<DeviceType | null>(null);
    const height = useResponsiveHeight(100);

    useLayoutEffect(() => {
        getDeviceTypeAsync()
            .then((type) => {
                return setType(type);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (type != null) {
        if (isDesktop()) {
            if (height >= HeightSize.extraLargeDesktop) {
                return [Size.extraLarge, type];
            } else if (height >= HeightSize.largeDesktop) {
                return [Size.large, type];
            } else if (height >= HeightSize.compactDesktop) {
                return [Size.medium, type];
            } else {
                return [Size.compact, type];
            }
        } else {
            if (type === DeviceType.TABLET) {
                console.log(height);
                if (height >= HeightSize.extraLargeTablet) {
                    // Show a bigger iPad UI for the biggest one
                    return [Size.extraLarge, type];
                } else if (height >= HeightSize.largeTablet) {
                    // Show the ideal iPad UI
                    return [Size.large, type];
                } else if (height >= HeightSize.compactTablet) {
                    // Show a slightly reduced interface
                    return [Size.medium, type];
                } else {
                    // Show a phone interface
                    return [Size.compact, type];
                }
            } else {
                if (height >= HeightSize.largePhone) {
                    // Landscape, you can show more content
                    return [Size.medium, type];
                } else {
                    // Normal phone interface
                    return [Size.compact, type];
                }
            }
        }
    }
    return null;
}
