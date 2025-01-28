import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const tokenType = 'Bearer';

const token = ''; // TODO: Get JWT token from storage

const baseURL = 'http://10.0.2.2:8080/';

const axiosParams = {
  baseURL: baseURL,
  headers: {
    Accept: 'application/json',
    Authorization: `${tokenType} ${token}`,
    clientId: '1234567890',
    clientSecret: '1234567890',
  },
};

const axiosInstance = axios.create(axiosParams);

const api = (axiosObject: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axiosObject.get<T>(url, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axiosObject.delete<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosObject.post<T>(url, body, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosObject.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axiosObject.put<T>(url, body, config),
  };
};

export default api(axiosInstance);
