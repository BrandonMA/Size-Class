import { HeightSizeClass } from '../types';
import { useSizeValue } from './useSizeValue';
import { useDeviceType } from './useDeviceType';
import { getSizeForType } from '../util/getSizeForType';
export function useHeightSizeGroup() {
    var type = useDeviceType();
    var height = useSizeValue('height');
    return [getSizeForType(type, height, HeightSizeClass), type];
}
//# sourceMappingURL=useHeightSizeGroup.js.map