import axios, {
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';

// ===== 환경 변수 타입 정의 =====

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ===== API 헬퍼 타입 정의 =====
interface ApiHelpers {
  get: <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  post: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  put: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  patch: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  delete: <T = any>(
    url: string,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
  upload: <T = any>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ) => Promise<AxiosResponse<T>>;
}

// ===== API 헬퍼 구현 =====
export const api: ApiHelpers = {
  get: <T = any>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.get<T>(url, config),

  post: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) => axiosInstance.post<T>(url, data, config),

  put: <T = any, D = any>(url: string, data?: D, config?: AxiosRequestConfig) =>
    axiosInstance.put<T>(url, data, config),

  patch: <T = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ) => axiosInstance.patch<T>(url, data, config),

  delete: <T = any>(url: string, config?: AxiosRequestConfig) =>
    axiosInstance.delete<T>(url, config),

  upload: <T = any>(
    url: string,
    formData: FormData,
    config?: AxiosRequestConfig
  ) => {
    return axiosInstance.post<T>(url, formData, {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default axiosInstance;
