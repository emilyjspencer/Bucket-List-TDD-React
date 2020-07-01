import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';


describe ('Item', () => {

    let wrapper; 

    beforeEach(() => wrapper = shallow(<Item />));

    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
});