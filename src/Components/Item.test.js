import React from 'react';
import { shallow } from 'enzyme';
import Item from './Item';


describe ('Item', () => {

    let wrapper; 

    beforeEach(() => wrapper = shallow(<Item />));

    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('renders 2 <div />', () => {
        expect(wrapper.find('div').length).toEqual(2);
    });

    it('initializes a bucket list item in the List state', () => {
        expect(wrapper.state()).toEqual({ item: '' })    
    });

    it('renders a form', () => {
        expect(wrapper.find('Form').length).toEqual(1);
    });

    describe('adding a bucket list item', () => {

        beforeEach(() => {
          wrapper.find('.item').simulate('change', { target: { value: 'Kenya' }});
        });
    
        it('updates the bucket list item in the state', () => {
          expect(wrapper.state().item).toEqual('Kenya');
        });
      });
});