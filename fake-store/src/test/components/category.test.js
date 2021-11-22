import React from 'react';
// we are importing from our enzyme.js
import { mount, shallow } from 'enzyme';
import Categories from '../../components/Categories';
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as redux from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

const spy = jest.spyOn(redux, 'useSelector')

const dispatch = jest.spyOn(redux, 'useDispatch')


const mockStore = configureMockStore([thunk]);

describe('Categories', () => {

  
  test('Component render test', () => {
    spy.mockReturnValue(['a','b','c'])
    dispatch.mockImplementation(()=>jest.fn())
    // use mount to trigger useEffect, if you use shallow it will not be triggered
    const wrapper = mount(<BrowserRouter><Categories/></BrowserRouter>);
    expect(wrapper).toBeDefined();
  });


  test('Component CardContent length', () => {
    spy.mockReturnValue(['a','b','c'])
    dispatch.mockImplementation(()=>jest.fn())
    const wrapper = mount(<BrowserRouter><Categories/></BrowserRouter>);
    expect(wrapper.find('Categories').find('h2').children()).toHaveLength(4)
    console.log("h2", wrapper.find('Categories').find('h2').children().first().text())
    expect(wrapper.find('Categories').find('h2').children().first().text()).toEqual('Categories')

  })

})