import { getValueForLargeSize } from '../util';
import { useSizeGroup } from './useSizeGroup';
export function useValueForLargeSize(dimensionType, largeSizeValue, fallback) {
    var sizeType = useSizeGroup(dimensionType)[0];
    return getValueForLargeSize(sizeType, largeSizeValue, fallback);
}
//# sourceMappingURL=useValueForLargeSize.js.map