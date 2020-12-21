import { Size } from '../types';
import { SizeClass } from '../types';

export function getTabletSize(dimension: number, SizeClass: SizeClass): Size {
    if (dimension >= SizeClass.extraLargeTablet) {
        // Show a bigger iPad UI for the biggest one
        return Size.extraLarge;
    } else if (dimension >= SizeClass.largeTablet) {
        // Show the ideal iPad UI
        return Size.large;
    } else if (dimension >= SizeClass.compactTablet) {
        // Show a slightly reduced interface
        return Size.medium;
    } else {
        // Show a phone interface
        return Size.compact;
    }
}
