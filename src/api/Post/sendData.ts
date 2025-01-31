import axios from 'axios';
import api from '../api';

export const sendData = async <T>(
  url: string,
  body: unknown,
): Promise<T | null> => {
  try {
    console.log('Sending data to:', url);
    console.log('Body:', body);

    const response = await api.post<T>(url, body);
    console.log('Response:', response);

    if (response.status === 200 || response.status === 201) {
      console.log('Response status:', response.status);
      console.log('Response data:', response.data);

      if (url.includes('sign-in')) {
        handleLoginResponse(response);
      }
      return response.data;
    }
    console.warn('Unexpected response status:', response.status);
    return null;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.message);
      console.error('Error details:', error.config);
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Failed to send data. Please try again later.');
  }
};

const handleLoginResponse = (response: any) => {
  const accessToken = response.headers?.authorization;
  if (accessToken) {
    console.log('Access token retrieved:', accessToken);
    // Store JWT token securely
  } else {
    console.warn('No access token found in response headers.');
  }
};
