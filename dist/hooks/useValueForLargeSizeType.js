import { getValueForLargeSizeType } from '../util';
import { useSizeGroup } from './useSizeGroup';
export function useValueForLargeSizeType(dimensionType, largeSizeValue, fallback) {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForLargeSizeType(sizeType, largeSizeValue, fallback);
}
//# sourceMappingURL=useValueForLargeSizeType.js.map