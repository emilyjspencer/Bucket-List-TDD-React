import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it ('renders 2 <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('is initialized with an empty array', () => {
    expect(wrapper.state().items).toEqual([]);
  });

  describe('clicking the add-item button', () => {
 
      beforeEach(() => {
        wrapper.find('.add-item').simulate('click')
      });

    it('adds a bucket list item to the items array, not rendered list ', () => {
    expect(wrapper.state().items).toEqual([{ id: 1}]);
    });

    it('adds a bucket list item to the items array - rendered list', () => {
      expect(wrapper.find('.rendered-list').children().length).toEqual(1);
    });

    it('creates an instance of the Item component ', () => {
      expect(wrapper.find('Item').exists()).toBe(true);
    });
  });

  describe('clicking the remove-item button', () => {

    beforeEach(() => {
      wrapper.instance().removeItem(1);
    });

    it('removes the bucket list item from the component state', () => {
      expect(wrapper.state().items).toEqual([]);
    });


  });

 
});