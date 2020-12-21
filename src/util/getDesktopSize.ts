import { Size } from '../types';
import { SizeClass } from '../types/SizeClass';

export function getDesktopSize(dimension: number, SizeClass: SizeClass): Size {
    if (dimension >= SizeClass.extraLargeDesktop) {
        return Size.extraLarge;
    } else if (dimension >= SizeClass.largeDesktop) {
        return Size.large;
    } else if (dimension >= SizeClass.compactDesktop) {
        return Size.medium;
    } else {
        return Size.compact;
    }
}
