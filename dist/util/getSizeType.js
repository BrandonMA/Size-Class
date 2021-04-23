import { DeviceType, SizeType } from '../types';
import { getDesktopSizeType } from './getDesktopSizeType';
import { getTabletSizeType } from './getTabletSizeType';
import { getPhoneSizeType } from './getPhoneSizeType';
export function getSizeType(type, dimension, SizeClass) {
    if (type != null) {
        if (type === DeviceType.DESKTOP) {
            return getDesktopSizeType(dimension, SizeClass);
        }
        else if (type === DeviceType.TABLET) {
            return getTabletSizeType(dimension, SizeClass);
        }
        else {
            return getPhoneSizeType(dimension, SizeClass);
        }
    }
    return SizeType.compact;
}
//# sourceMappingURL=getSizeType.js.map