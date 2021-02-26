import { SizeType } from '../types';
export function getValueForSize(size, xl, lg, md, sm) {
    switch (size) {
        case SizeType.extraLarge:
            return xl;
        case SizeType.large:
            return lg;
        case SizeType.medium:
            return md;
        case SizeType.compact:
            return sm;
    }
}
//# sourceMappingURL=getValueForSize.js.map