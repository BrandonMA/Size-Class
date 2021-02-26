import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';
export function useDeviceType() {
    var _a = useState(getDefaultDeviceType()), type = _a[0], setType = _a[1];
    useLayoutEffect(function () {
        setType(getDefaultDeviceType());
    }, []);
    return type;
}
//# sourceMappingURL=index.js.map