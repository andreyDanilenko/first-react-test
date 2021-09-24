import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import companyReducer from './companyReducer';
// Для решение задачи асинхронных запросов
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  company: companyReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

