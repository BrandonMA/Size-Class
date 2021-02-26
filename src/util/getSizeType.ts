import { isDesktop } from './isDesktop';
import { SizeClass, DeviceType, SizeType } from '../types';
import { getDesktopSize } from './getDesktopSize';
import { getTabletSize } from './getTabletSize';
import { getPhoneSize } from './getPhoneSize';

export function getSizeType(type: DeviceType, dimension: number, SizeClass: SizeClass): SizeType {
    if (type != null) {
        if (isDesktop()) {
            return getDesktopSize(dimension, SizeClass);
        } else if (type === DeviceType.TABLET) {
            return getTabletSize(dimension, SizeClass);
        } else {
            return getPhoneSize(dimension, SizeClass);
        }
    }
    return SizeType.compact;
}
