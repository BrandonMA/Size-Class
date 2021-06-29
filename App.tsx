import React from 'react';
import { registerRootComponent } from 'expo';
import { Text, View } from 'react-native';
import { useHeightSizeGroup, useWidthSizeGroup } from './src';

export function App(): JSX.Element {
    const [widthSize] = useWidthSizeGroup();
    const [heightSize] = useHeightSizeGroup();

    function getWidthText() {
        switch (widthSize) {
            case 'compact':
                return 'Compact UI for width';
            case 'medium':
                return 'Medium UI for width';
            case 'large':
                return 'Large UI for width';
            case 'extraLarge':
                return 'Extra Large UI for width';
            default:
                return 'Nothing detected';
        }
    }

    function getHeightText() {
        switch (heightSize) {
            case 'compact':
                return 'Compact UI for height';
            case 'medium':
                return 'Medium UI for height';
            case 'large':
                return 'Large UI for height';
            case 'extraLarge':
                return 'Extra Large UI for height';
            default:
                return 'Nothing detected';
        }
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>{getWidthText()}</Text>
            <Text>{getHeightText()}</Text>
        </View>
    );
}

export default registerRootComponent(App);
