import { HeightSizeClass, WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { getSizeType } from '../util/getSizeType';
export function useSizeGroup(dimensionType) {
    var deviceType = useDeviceType();
    var height = useSizeValue(dimensionType);
    var sizeType = getSizeType(deviceType, height, dimensionType === 'width' ? WidthSizeClass : HeightSizeClass);
    return [sizeType, deviceType];
}
//# sourceMappingURL=useSizeGroup.js.map