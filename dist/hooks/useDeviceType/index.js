import { useLayoutEffect, useState } from 'react';
import { getDefaultDeviceType } from '../../util/getDefaultDeviceType';
export function useDeviceType() {
    const [type, setType] = useState(getDefaultDeviceType());
    useLayoutEffect(() => {
        setType(getDefaultDeviceType());
    }, []);
    return type;
}
//# sourceMappingURL=index.js.map