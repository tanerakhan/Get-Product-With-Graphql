import React from 'react';
import renderer from 'react-test-renderer';
import ProductItem from './Components/ProductCard';

describe('Component Test', () => {
    test('render', () => {
        const component = renderer.create(<ProductItem
            title={"iPhone 11"}
        />);
        let value = component.toJSON();
        expect(value).toMatchSnapshot();
    });
});