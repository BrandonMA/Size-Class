import { SizeType } from '../types';

export function getValueForCompactSize<T>(size: SizeType, compactValue: T, fallback: T): T {
    if (size === SizeType.compact) {
        return compactValue;
    } else {
        return fallback;
    }
}
