import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  let wrapper;

  beforeEach(() => wrapper = shallow(<App />));

  it ('renders a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  it('is initialized with an empty array', () => {
    expect(wrapper.state().items).toEqual([]);
  });
});