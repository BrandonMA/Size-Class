import React from 'react';
import { registerRootComponent } from 'expo';
import { Text, View } from 'react-native';

function App(): JSX.Element {
    return (
        <View>
            <Text>Example project</Text>
        </View>
    );
}

export default registerRootComponent(App);
