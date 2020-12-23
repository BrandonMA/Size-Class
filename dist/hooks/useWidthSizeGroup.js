import { WidthSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { getSizeForType } from '../util/getSizeForType';
import { useMemo } from 'react';
export function useWidthSizeGroup() {
    var type = useDeviceType();
    var width = useSizeValue('width');
    return useMemo(function () {
        return [getSizeForType(type, width, WidthSizeClass), type];
    }, [type, width]);
}
//# sourceMappingURL=useWidthSizeGroup.js.map