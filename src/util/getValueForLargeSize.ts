import { Size } from '../types';

export function getValueForLargeSize<T>(size: Size, largeValue: T, fallback: T): T {
    if (size === Size.large || size === Size.extraLarge) {
        return largeValue;
    } else {
        return fallback;
    }
}
