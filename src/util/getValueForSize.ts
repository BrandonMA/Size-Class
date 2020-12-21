import { Size } from '../types';

export function getValueForSize<T>(size: Size, xl: T, lg: T, md: T, sm: T): T {
    switch (size) {
        case Size.extraLarge:
            return xl;
        case Size.large:
            return lg;
        case Size.medium:
            return md;
        case Size.compact:
            return sm;
    }
}
