import { getValueForCompactSizeType } from '../util';
import { useSizeGroup } from './useSizeGroup';
export function useValueForCompactSizeType(dimensionType, compactSizeValue, fallback) {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForCompactSizeType(sizeType, compactSizeValue, fallback);
}
//# sourceMappingURL=useValueForCompactSizeType.js.map