import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it ('renders 2 <div />', () => {
    expect(wrapper.find('div').length).toEqual(2);
  });

  it('is initialized with an empty array', () => {
    expect(wrapper.state().items).toEqual([]);
  });

  it('adds a bucket list item to the items array, not rendered list ', () => {
    wrapper.find('.add-item').simulate('click');
    expect(wrapper.state().items).toEqual([{ id: 1}]);
  });

  it('adds a bucket list item to the items array - rendered list', () => {
    wrapper.find('.add-item').simulate('click');
    expect(wrapper.find('.rendered-list').children().length).toEqual(1);
  });
});