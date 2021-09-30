import { createStore } from 'redux';
import brandsReducer from './brandsReducer';
import { brandData } from "../mock/data";

export const store = createStore(brandsReducer)

store.dispatch({ type: 'SET_BRANDS', payload: brandData });

