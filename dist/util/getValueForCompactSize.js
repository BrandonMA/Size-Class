import { SizeType } from '../types';
export function getValueForCompactSize(size, compactValue, fallback) {
    if (size === SizeType.compact) {
        return compactValue;
    }
    else {
        return fallback;
    }
}
//# sourceMappingURL=getValueForCompactSize.js.map