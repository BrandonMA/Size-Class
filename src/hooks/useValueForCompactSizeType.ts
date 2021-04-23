import { DimensionType } from '../types';
import { getValueForCompactSize } from '../util';
import { useSizeGroup } from './useSizeGroup';

export function useValueForCompactSizeType<T>(dimensionType: DimensionType, compactSizeValue: T, fallback: T): T {
    const [sizeType] = useSizeGroup(dimensionType);
    return getValueForCompactSize(sizeType, compactSizeValue, fallback);
}
