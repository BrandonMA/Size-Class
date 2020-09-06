import { useState, useLayoutEffect } from 'react';
import { useResponsiveWidth } from 'react-native-responsive-dimensions';
import { getDeviceTypeAsync, DeviceType } from 'expo-device';
import { WidthSize } from '../enums/WidthSize';
import { Size } from '../enums/Size';
import { isDesktop } from '../utilityFunctions/isDesktop';

export function useWidthSizeClass(): [Size, DeviceType] | null {
    const [type, setType] = useState<DeviceType | null>(null);
    const width = useResponsiveWidth(100);

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
            if (width >= WidthSize.extraLargeDesktop) {
                return [Size.extraLarge, type];
            } else if (width >= WidthSize.largeDesktop) {
                return [Size.large, type];
            } else if (width >= WidthSize.compactDesktop) {
                return [Size.medium, type];
            } else {
                return [Size.compact, type];
            }
        } else {
            if (type === DeviceType.TABLET) {
                if (width >= WidthSize.extraLargeTablet) {
                    // Show a bigger iPad UI for the biggest one
                    return [Size.extraLarge, type];
                } else if (width >= WidthSize.largeTablet) {
                    // Show the ideal iPad UI
                    return [Size.large, type];
                } else if (width >= WidthSize.compactTablet) {
                    // Show a slightly reduced interface
                    return [Size.medium, type];
                } else {
                    // Show a phone interface
                    return [Size.compact, type];
                }
            } else {
                if (width >= WidthSize.largePhone) {
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
