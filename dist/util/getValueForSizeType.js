import { SizeType } from '../types';
export function getValueForSizeType(size, xl, lg, md, sm) {
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
//# sourceMappingURL=getValueForSizeType.js.map