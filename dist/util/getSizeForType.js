import { DeviceType } from 'expo-device';
import { isDesktop } from './isDesktop';
import { Size } from '../types';
import { getDesktopSize } from './getDesktopSize';
import { getTabletSize } from './getTabletSize';
import { getPhoneSize } from './getPhoneSize';
export function getSizeForType(type, dimension, SizeClass) {
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
    return Size.compact;
}
//# sourceMappingURL=getSizeForType.js.map