import React from 'react';
// we are importing from our enzyme.js
import { shallow } from 'enzyme';
import Welcome from '../../components/Welcome';

describe('FootNav', () => {
  
  test('Component render test', () => {
    const wrapper = shallow(<Welcome/>);

    expect(wrapper).toBeDefined();
  });


  test('Component return test', () => {
    const wrapper = shallow(<Welcome/>);

    expect(wrapper.find('div').children()).toHaveLength(2);
    expect(wrapper.find('h1').text()).toEqual('Welcome to Fake Store')
  });


});