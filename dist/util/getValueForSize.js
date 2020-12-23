import { Size } from '../types';
export function getValueForSize(size, xl, lg, md, sm) {
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
//# sourceMappingURL=getValueForSize.js.map