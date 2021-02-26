import { SizeType } from '../types';
export function getValueForLargeSize(size, largeValue, fallback) {
    if (size === SizeType.large || size === SizeType.extraLarge) {
        return largeValue;
    }
    else {
        return fallback;
    }
}
//# sourceMappingURL=getValueForLargeSize.js.map