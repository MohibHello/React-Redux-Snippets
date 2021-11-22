import React from 'react';
// we are importing from our enzyme.js
import { shallow } from 'enzyme';
import MensClothing from '../../components/MensClothing';

describe('FootNav', () => {
  
  test('Component render test', () => {
    const wrapper = shallow(<MensClothing/>);

    expect(wrapper).toBeDefined();
  });


  test('Component return test', () => {
    const wrapper = shallow(<MensClothing/>);

    expect(wrapper.find('div').children()).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('MensClothing')
  });


});