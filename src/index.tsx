import { useState, useLayoutEffect } from 'react';
import { Platform } from 'react-native';
import { useResponsiveWidth, useResponsiveHeight } from 'react-native-responsive-dimensions';
import { getDeviceTypeAsync, DeviceType, osName } from 'expo-device';

export enum WidthSize {
    compactPhone = 375, // iPhone 11 Pro
    largePhone = 667, // iPhone 7 Landscape
    compactTablet = 592, // iPad Pro 11 2/4
    largeTablet = 768, // iPad normal Width
    extraLargeTablet = 1366, // iPad Pro 12.9 full screen
    compactDesktop = 592, // iPad Pro 11 2/4 (Chrome)
    largeDesktop = 826, // Macbook Pro 13' 3/4 (Chrome)
    extraLargeDesktop = 1680 // Macbook Pro 13' Max dynamic resolution
}

export enum HeightSize {
    compactPhone = 667, // iPhone 7 Height
    largePhone = 812, // iPhone X Height
    compactTablet = 768, // iPad Standard Height
    largeTablet = 834, // iPad Pro 11 Height
    extraLargeTablet = 1024, // iPad Pro 12.9 Height
    compactDesktop = 597, // iPad Pro 11 2/4 (Chrome)
    largeDesktop = 775, // Macbook Pro 13' 3/4 (Chrome)
    extraLargeDesktop = 1050 // Macbook Pro 13' Max dynamic resolution
}

export enum Size {
    compact,
    medium,
    large,
    extraLarge
}

// Interace to use styled components easier
export interface StyledComponentSizeClassProps {
    widthSizeClass: WidthSize;
    heightSizeClass: HeightSize;
}

function isDesktop(): boolean {
    return osName !== 'iOS' && osName !== 'Android' && (Platform.OS === 'web' || Platform.OS === 'windows' || Platform.OS === 'macos');
}

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
