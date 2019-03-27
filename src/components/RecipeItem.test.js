import React from 'react';
import { mount } from 'enzyme';
import RecipeItem from './RecipeItem';
import recipes from '../sample_data/recipes.json'

describe('RecipeItem', () => {
    test('Should be RecipeItem', () => {
        const wrapper = mount(<RecipeItem  recipes={recipes.results[1]} />);
        expect(wrapper.is('RecipeItem')).toBeTruthy();
    })

    // Add more tests here
})
