import { SizeType } from '../types';
export function getDesktopSize(dimension, SizeClass) {
    if (dimension >= SizeClass.extraLargeDesktop) {
        return SizeType.extraLarge;
    }
    else if (dimension >= SizeClass.largeDesktop) {
        return SizeType.large;
    }
    else if (dimension >= SizeClass.compactDesktop) {
        return SizeType.medium;
    }
    else {
        return SizeType.compact;
    }
}
//# sourceMappingURL=getDesktopSize.js.map