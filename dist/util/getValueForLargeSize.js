import { Size } from '../types';
export function getValueForLargeSize(size, largeValue, fallback) {
    if (size === Size.large || size === Size.extraLarge) {
        return largeValue;
    }
    else {
        return fallback;
    }
}
//# sourceMappingURL=getValueForLargeSize.js.map