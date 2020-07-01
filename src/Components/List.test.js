import React from 'react';
import { shallow } from 'enzyme';
import List from './List';


describe ('List', () => {

    let wrapper; 

    beforeEach(() => wrapper = shallow(<List />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders 2 <div />', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('initializes a bucket list item in the List state', () => {
        expect(wrapper.state()).toEqual({ bucketListItem: '' })    
    });

    it('renders a form', () => {
        expect(wrapper.find('Form').length).toEqual(1);
    });
});