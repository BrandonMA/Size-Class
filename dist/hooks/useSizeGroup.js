import { HeightSizeClass, WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { getSizeType } from '../util/getSizeType';
export function useSizeGroup(dimensionType) {
    const deviceType = useDeviceType();
    const height = useSizeValue(dimensionType);
    const sizeType = getSizeType(deviceType, height, dimensionType === 'width' ? WidthSizeClass : HeightSizeClass);
    return [sizeType, deviceType];
}
//# sourceMappingURL=useSizeGroup.js.map