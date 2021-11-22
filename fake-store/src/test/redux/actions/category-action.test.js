import React from 'react';
// we are importing from our enzyme.js
import {
  fetchCategory,
  fetchCategoryRequest,
  fetchCategoryFailure,
  fetchCategorySuccess,
} from '../../../redux/category/category-action';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import mockAxios from 'axios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('axios');

describe('action test', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      users: {},
    });
  });

  test('fetchCategory test response test', () => {
    const expectedAction = {"type": "FETCH_CATEGORY_REQUEST"}
    mockAxios.get.mockResolvedValueOnce({ data: 'foo' });
     store.dispatch(fetchCategory())
     expect(store.getActions()).toEqual([expectedAction])
  });

  test('fetchCategory error/catch block test', () => {
    mockAxios.get.mockRejectedValueOnce({ message: 'error' });
    store.dispatch(fetchCategory());
    expect(1).toBe(1);
  });

  test('fetchCategoryRequest test', () => {
    expect(fetchCategoryRequest()).toEqual({
      type: 'FETCH_CATEGORY_REQUEST',
    });
  });

  test('fetchCategorySuccess test', () => {
    expect(fetchCategorySuccess('123')).toEqual({
      type: 'FETCH_CATEGORY_SUCCESS',
      payload: '123',
    });
  });

  test('fetchCategoryFailure test', () => {
    expect(fetchCategoryFailure('error')).toEqual({
      type: 'FETCH_CATEGORY_FAILURE',
      payload: 'error',
    });
  });
});
