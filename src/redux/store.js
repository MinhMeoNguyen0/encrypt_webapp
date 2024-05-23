import { createStore, combineReducers } from 'redux';
import { encryptionReducer, decryptionReducer } from './reducers';

const rootReducer = combineReducers({
  encryption: encryptionReducer,
  decryption: decryptionReducer,
});

const store = createStore(rootReducer);

export default store;