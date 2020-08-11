export declare enum WidthSize {
    compactPhone = 812,
    largePhone = 896,
    compactTablet = 768,
    largeTablet = 1024,
    compactDesktop = 1680,
    largeDesktop = 2048
}
export declare enum HeightSize {
    compactPhone = 667,
    largePhone = 812,
    compactDesktop = 945,
    largeDesktop = 1152
}
export declare enum SizeClass {
    compact = 375,
    medium = 414,
    large = 768,
    extraLarge = 1024
}
export interface StyledComponentSizeClassProps {
    widthSizeClass: WidthSize;
    heightSizeClass: HeightSize;
}
export declare function useWidthSizeClass(): WidthSize;
export declare function useHeightSizeClass(): HeightSize;
export declare function useSizeClass(): [WidthSize, HeightSize];
