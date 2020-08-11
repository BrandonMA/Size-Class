import { useResponsiveHeight, useResponsiveWidth } from 'react-native-responsive-dimensions';

export enum WidthSize {
    compactPhone = 812,
    largePhone = 896,
    compactTablet = 768,
    largeTablet = 1024,
    compactDesktop = 1680,
    largeDesktop = 2048
}

// Tablet and desktop here are unified, as when it comes to actual resolutions they do not differ a lot.
export enum HeightSize {
    compactPhone = 667,
    largePhone = 812,
    compactDesktop = 945,
    largeDesktop = 1152
}

export enum SizeClass {
    compact = 375,
    medium = 414,
    large = 768,
    extraLarge = 1024
}

// Interace to use styled components easier
export interface StyledComponentSizeClassProps {
    widthSizeClass: WidthSize;
    heightSizeClass: HeightSize;
}

export function useWidthSizeClass(): WidthSize {
    const width = useResponsiveWidth(100);
    if (width >= WidthSize.largeDesktop) {
        return WidthSize.largeDesktop;
    } else if (width >= WidthSize.compactDesktop) {
        return WidthSize.compactDesktop;
    } else if (width >= WidthSize.largeTablet) {
        return WidthSize.largeTablet;
    } else if (width >= WidthSize.compactTablet) {
        return WidthSize.compactTablet;
    } else if (width >= WidthSize.largePhone) {
        return WidthSize.largePhone;
    } else {
        return WidthSize.compactPhone;
    }
}

export function useHeightSizeClass(): HeightSize {
    const height = useResponsiveHeight(100);
    if (height >= HeightSize.largeDesktop) {
        return HeightSize.largeDesktop;
    } else if (height >= WidthSize.compactDesktop) {
        return HeightSize.compactDesktop;
    } else if (height >= HeightSize.largePhone) {
        return HeightSize.largePhone;
    } else {
        return HeightSize.compactPhone;
    }
}

export function useSizeClass(): [WidthSize, HeightSize] {
    const width = useWidthSizeClass();
    const height = useHeightSizeClass();
    return [width, height];
}
