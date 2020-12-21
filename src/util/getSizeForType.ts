import { DeviceType } from 'expo-device';
import { isDesktop } from './isDesktop';
import { Size } from '../types';
import { SizeClass } from '../types';
import { getDesktopSize } from './getDesktopSize';
import { getTabletSize } from './getTabletSize';
import { getPhoneSize } from './getPhoneSize';

export function getSizeForType(type: DeviceType, dimension: number, SizeClass: SizeClass): Size {
    if (type != null) {
        if (isDesktop()) {
            return getDesktopSize(dimension, SizeClass);
        } else if (type === DeviceType.TABLET) {
            return getTabletSize(dimension, SizeClass);
        } else {
            return getPhoneSize(dimension, SizeClass);
        }
    }
    return Size.compact;
}
