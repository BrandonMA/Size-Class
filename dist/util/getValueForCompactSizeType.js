import { SizeType } from '../types';
export function getValueForCompactSizeType(size, compactValue, fallback) {
    if (size === SizeType.compact || size === SizeType.medium) {
        return compactValue;
    }
    else {
        return fallback;
    }
}
//# sourceMappingURL=getValueForCompactSizeType.js.map