import { Size } from '../types';
export function getPhoneSize(dimension, SizeClass) {
    if (dimension >= SizeClass.largePhone) {
        // Landscape, you can show more content
        return Size.medium;
    }
    else {
        // Normal phone interface
        return Size.compact;
    }
}
//# sourceMappingURL=getPhoneSize.js.map