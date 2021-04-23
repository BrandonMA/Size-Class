import { useCallback, useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
// This is not performant at all when it comes to sizes that change constantly
// On a real app though, it is not that common to change dimensions many times per second
// So you can use this hook freely
// Just be aware of not using it if resizing is too frequent.
export function useSizeValue(dimensionType) {
    var _a;
    const [dimension, setDimension] = useState((_a = Dimensions.get('window')[dimensionType]) !== null && _a !== void 0 ? _a : 0);
    const onChange = useCallback((dimensions) => {
        setDimension(dimensions.window[dimensionType]);
    }, [dimensionType]);
    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    }, [onChange]);
    return dimension;
}
//# sourceMappingURL=index.native.js.map