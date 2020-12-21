import { useCallback, useEffect, useState } from 'react';
import { DimensionsListenerParameter } from '../types';
import { Dimensions } from 'react-native';

// This is not performant at all when it comes to sizes that change constantly
// On a real app tho, it is not that common to change dimensions many times per second
// So you can use this hook freely
// Just be aware of not using it if resizing is too frequent.

export function useSizeValue(dimensionType: 'width' | 'height'): number {
    const [dimension, setDimension] = useState(Dimensions.get('window')[dimensionType]);

    const onChange = useCallback(
        (dimensions: DimensionsListenerParameter) => {
            setDimension(dimensions.window[dimensionType]);
        },
        [dimensionType]
    );

    useEffect(() => {
        Dimensions.addEventListener('change', onChange);
        return () => {
            Dimensions.removeEventListener('change', onChange);
        };
    }, [onChange]);

    return dimension;
}
