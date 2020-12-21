import { WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { SizeGroup } from '../types';
import { getSizeForType } from '../util/getSizeForType';
import { useMemo } from 'react';

export function useWidthSizeGroup(): SizeGroup {
    const type = useDeviceType();
    const width = useSizeValue('width');
    return useMemo(() => {
        return [getSizeForType(type, width, WidthSizeClass), type];
    }, [type, width]);
}
