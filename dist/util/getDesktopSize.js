import { Size } from '../types';
export function getDesktopSize(dimension, SizeClass) {
    if (dimension >= SizeClass.extraLargeDesktop) {
        return Size.extraLarge;
    }
    else if (dimension >= SizeClass.largeDesktop) {
        return Size.large;
    }
    else if (dimension >= SizeClass.compactDesktop) {
        return Size.medium;
    }
    else {
        return Size.compact;
    }
}
//# sourceMappingURL=getDesktopSize.js.map