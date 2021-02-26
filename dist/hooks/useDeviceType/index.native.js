import { getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';
export function useDeviceType() {
    var _a = useState(getDefaultDeviceType()), type = _a[0], setType = _a[1];
    useLayoutEffect(function () {
        getDeviceTypeAsync()
            .then(function (type) {
            return setType(type);
        })["catch"](function (error) {
            alert(error.message);
        });
    }, []);
    return type;
}
//# sourceMappingURL=index.native.js.map