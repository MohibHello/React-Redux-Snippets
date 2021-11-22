import React from 'react';
// we are importing from our enzyme.js
import { shallow } from 'enzyme';
import WomensClothing from '../../components/WomensClothing';

describe('FootNav', () => {
  
  test('Component render test', () => {
    const wrapper = shallow(<WomensClothing/>);

    expect(wrapper).toBeDefined();
  });


  test('Component return test', () => {
    const wrapper = shallow(<WomensClothing/>);

    expect(wrapper.find('div').children()).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('WomensClothing')
  });


});