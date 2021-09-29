import { createStore } from 'redux';
import brandsReducer from './brandsReducer';
import { cardData } from "../mock/data";

export const store = createStore(brandsReducer)

store.dispatch({ type: 'SET_BRANDS', payload: cardData });

