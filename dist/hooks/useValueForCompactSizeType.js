import { getValueForCompactSize } from '../util';
import { useSizeGroup } from './useSizeGroup';
export function useValueForCompactSizeType(dimensionType, compactSizeValue, fallback) {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForCompactSize(sizeType, compactSizeValue, fallback);
}
//# sourceMappingURL=useValueForCompactSizeType.js.map