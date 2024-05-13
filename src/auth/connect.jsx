// ApiFetcher.js

import axios from 'axios';
const BASE_URL = 'https://mbam.onrender.com';


const DEFAULT_TIMEOUT = 10000;

const ApiFetcher = async (endpoint, method = 'get', data = null, params = null, headers = null, cancelToken = null, token=null) => {
  const timeout = DEFAULT_TIMEOUT;

  const url = `${BASE_URL}/${endpoint}`;

  try {
    const finalHeaders = { 'deviceType': 'web', ...headers }; // Default headers

    if (token !== null) {
      finalHeaders['Authorization'] = `Bearer ${token}`; // Add Authorization header if token is not null
    }
    const response = await axios({
      url,
      method,
      data,
      params: { ...params },
      headers: finalHeaders,
      timeout,
      cancelToken,
    });

    return response.data;
  } catch (error) {
    
    if (axios.isCancel(error)) {
      
      throw new Error('Request canceled by user');
    }

    if (error.response) {
      if (error.response.status === 401) {
        throw new Error('Unauthorized access');
      } 
      else if (error.response && error.response.data && error.response.data.code === 422) {
        const errorMessages = error.response.data.errors ? Object.values(error.response.data.errors).flat() : [];
        return errorMessages.join(', ');
      }
      else if (error.response.data.code === 403) {
        const errorMessages = error.response.data.errors ? Object.values(error.response.data.errors).flat() : [];
        return errorMessages.join(', ');
      }
      else if (error.response.data.code === 409) {
        const errorMessages = error.response.data.errors ? Object.values(error.response.data.errors).flat() : [];
        return errorMessages.join(', ');
      }
      else if (error.response.data.status === 400) {
        const errorMessages = error.response.data.message;
        return errorMessages;
      }
      else if (error.response && error.response.data && error.response.status === 422) {
        const errorMessages = error.response.data.errors ? Object.values(error.response.data.errors).flat() : [];
        return errorMessages.join(', ');
      }
      else if (error.response.status === 500) {
        return "We are sorry, please try again"
      }
      else {
        return error
      }
    } else if (error.code === 'ECONNABORTED') {
      console.error('Request timed out:', error.message);
      throw new Error('Request timed out');
    } else {
      console.error('Unexpected error:', error.message);
      throw new Error('Unexpected error occurred');
    }
  }
};

const SaveDataStorage =(key,data)=>{
    sessionStorage.setItem(key, data);
}

const LoadDataStorage =(key)=>{
  return sessionStorage.getItem(key);
}

export {ApiFetcher, SaveDataStorage,LoadDataStorage}