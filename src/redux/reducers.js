import {
    ENCRYPT_TEXT_REQUEST,
    ENCRYPT_TEXT_SUCCESS,
    ENCRYPT_TEXT_FAILURE,
    DECRYPT_TEXT_REQUEST,
    DECRYPT_TEXT_SUCCESS,
    DECRYPT_TEXT_FAILURE,
  } from './actions';
  
  const initialState = {
    result: '',
    loading: false,
    error: null,
  };
  
  export const encryptionReducer = (state = initialState, action) => {
    switch (action.type) {
      case ENCRYPT_TEXT_REQUEST:
        return { ...state, loading: true, error: null };
      case ENCRYPT_TEXT_SUCCESS:
        return { ...state, loading: false, result: action.payload };
      case ENCRYPT_TEXT_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export const decryptionReducer = (state = initialState, action) => {
    switch (action.type) {
      case DECRYPT_TEXT_REQUEST:
        return { ...state, loading: true, error: null };
      case DECRYPT_TEXT_SUCCESS:
        return { ...state, loading: false, result: action.payload };
      case DECRYPT_TEXT_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  