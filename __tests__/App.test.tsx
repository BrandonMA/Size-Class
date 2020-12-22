import React from 'react';
import { App } from '../App';
import { render } from '@testing-library/react-native';

describe('<App />', () => {
    it('has 1 child', () => {
        const prueba = render(<App />);
        console.log(prueba);
    });
});
