import { SizeType } from '../types';
export function getTabletSize(dimension, SizeClass) {
    if (dimension >= SizeClass.extraLargeTablet) {
        // Show a bigger iPad UI for the biggest one
        return SizeType.extraLarge;
    }
    else if (dimension >= SizeClass.largeTablet) {
        // Show the ideal iPad UI
        return SizeType.large;
    }
    else if (dimension >= SizeClass.compactTablet) {
        // Show a slightly reduced interface
        return SizeType.medium;
    }
    else {
        // Show a phone interface
        return SizeType.compact;
    }
}
//# sourceMappingURL=getTabletSize.js.map