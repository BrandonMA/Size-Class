import { isDesktop } from './isDesktop';
import { DeviceType, SizeType } from '../types';
import { getDesktopSize } from './getDesktopSize';
import { getTabletSize } from './getTabletSize';
import { getPhoneSize } from './getPhoneSize';
export function getSizeType(type, dimension, SizeClass) {
    if (type != null) {
        if (isDesktop()) {
            return getDesktopSize(dimension, SizeClass);
        }
        else if (type === DeviceType.TABLET) {
            return getTabletSize(dimension, SizeClass);
        }
        else {
            return getPhoneSize(dimension, SizeClass);
        }
    }
    return SizeType.compact;
}
//# sourceMappingURL=getSizeType.js.map