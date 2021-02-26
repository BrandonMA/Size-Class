import { DimensionType } from '../types';
import { getValueForLargeSize } from '../util';
import { useSizeGroup } from './useSizeGroup';

export function useValueForLargeSize<T>(dimensionType: DimensionType, largeSizeValue: T, fallback: T): T {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForLargeSize(sizeType, largeSizeValue, fallback);
}
