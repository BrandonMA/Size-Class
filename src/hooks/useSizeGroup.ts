import { DimensionType, HeightSizeClass, WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types';
import { getSizeType } from '../util/getSizeType';

export function useSizeGroup(dimensionType: DimensionType): SizeGroup {
    const deviceType = useDeviceType();
    const height = useSizeValue(dimensionType);
    const sizeType = getSizeType(deviceType, height, dimensionType === 'width' ? WidthSizeClass : HeightSizeClass);
    return [sizeType, deviceType];
}
