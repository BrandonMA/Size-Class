import { getDeviceTypeAsync } from 'expo-device';
import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';
export function useDeviceType() {
    const [type, setType] = useState(getDefaultDeviceType());
    useLayoutEffect(() => {
        getDeviceTypeAsync()
            .then((type) => {
            return setType(type);
        })
            .catch((error) => {
            alert(error.message);
        });
    }, []);
    return type;
}
//# sourceMappingURL=index.native.js.map