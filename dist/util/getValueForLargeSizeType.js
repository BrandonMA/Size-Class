import { SizeType } from '../types';
export function getValueForLargeSizeType(size, largeValue, fallback) {
    if (size === SizeType.large || size === SizeType.extraLarge) {
        return largeValue;
    }
    else {
        return fallback;
    }
}
//# sourceMappingURL=getValueForLargeSizeType.js.map