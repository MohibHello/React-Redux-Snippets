import React from 'react';
// we are importing from our enzyme.js
import { shallow } from 'enzyme';
import Jewelery from '../../components/jewelery';
import mockAxios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";


const mockStore = configureMockStore([thunk]);

describe('FootNav', () => {

  let store;

  beforeEach(() => {
    store = mockStore({
      users: {}
    });
  })

  
  test('Component render test', () => {
    const wrapper = shallow(<Jewelery/>);

    expect(wrapper).toBeDefined();
  });


  test('Component return test', () => {
    const wrapper = shallow(<Jewelery/>);

    expect(wrapper.find('div').children()).toHaveLength(1);
    expect(wrapper.find('h1').text()).toEqual('jewelery')
  });


});