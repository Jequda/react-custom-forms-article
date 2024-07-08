import { createStore } from 'redux';
import converterReducer from './reducer';

const store = createStore(converterReducer);

export default store;