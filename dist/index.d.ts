import { DeviceType } from 'expo-device';
export declare enum WidthSize {
    compactPhone = 375,
    largePhone = 667,
    compactTablet = 592,
    largeTablet = 768,
    extraLargeTablet = 1366,
    compactDesktop = 592,
    largeDesktop = 826,
    extraLargeDesktop = 1680
}
export declare enum HeightSize {
    compactPhone = 667,
    largePhone = 812,
    compactTablet = 768,
    largeTablet = 834,
    extraLargeTablet = 1024,
    compactDesktop = 597,
    largeDesktop = 775,
    extraLargeDesktop = 1050
}
export declare enum Size {
    compact = 0,
    medium = 1,
    large = 2,
    extraLarge = 3
}
export interface StyledComponentSizeClassProps {
    widthSizeClass: WidthSize;
    heightSizeClass: HeightSize;
}
export declare function useWidthSizeClass(): [Size, DeviceType] | null;
export declare function useHeightSizeClass(): [Size, DeviceType] | null;
