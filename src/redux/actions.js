import { encryptRequest, decryptRequest } from '../api/apiService';

export const ENCRYPT_TEXT_REQUEST = 'ENCRYPT_TEXT_REQUEST';
export const ENCRYPT_TEXT_SUCCESS = 'ENCRYPT_TEXT_SUCCESS';
export const ENCRYPT_TEXT_FAILURE = 'ENCRYPT_TEXT_FAILURE';

export const DECRYPT_TEXT_REQUEST = 'DECRYPT_TEXT_REQUEST';
export const DECRYPT_TEXT_SUCCESS = 'DECRYPT_TEXT_SUCCESS';
export const DECRYPT_TEXT_FAILURE = 'DECRYPT_TEXT_FAILURE';

export const encryptText = (text, algorithm) => async (dispatch) => {
  dispatch({ type: ENCRYPT_TEXT_REQUEST });
  try {
    const response = await encryptRequest(text, algorithm);
    dispatch({ type: ENCRYPT_TEXT_SUCCESS, payload: response.data.result });
  } catch (error) {
    dispatch({ type: ENCRYPT_TEXT_FAILURE, error: error.message });
  }
};

export const decryptText = (text, algorithm) => async (dispatch) => {
  dispatch({ type: DECRYPT_TEXT_REQUEST });
  try {
    const response = await decryptRequest(text, algorithm);
    dispatch({ type: DECRYPT_TEXT_SUCCESS, payload: response.data.result });
  } catch (error) {
    dispatch({ type: DECRYPT_TEXT_FAILURE, error: error.message });
  }
};
