import { SizeType } from '../types';
export function getPhoneSize(dimension, SizeClass) {
    if (dimension >= SizeClass.largePhone) {
        // Landscape, you can show more content
        return SizeType.medium;
    }
    else {
        // Normal phone interface
        return SizeType.compact;
    }
}
//# sourceMappingURL=getPhoneSize.js.map