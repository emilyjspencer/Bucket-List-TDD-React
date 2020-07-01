import React from 'react';
import { shallow } from 'enzyme';
import List from './List';


describe ('List', () => {

    let wrapper; 

    beforeEach(() => wrapper = shallow(<List />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    it('renders a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('initializes a bucket list item in the List state', () => {
        expect(wrapper.state()).toEqual({ bucketListItem: '' })    
    });
});