import { HeightSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types';
import { getSizeForType } from '../util/getSizeForType';

export function useHeightSizeGroup(): SizeGroup {
    const type = useDeviceType();
    const height = useSizeValue('height');
    return [getSizeForType(type, height, HeightSizeClass), type];
}
