import { AxiosError } from "axios";

export const onResponse = (response: any) => {
  return response;
};

export const onRequestError = (error: any) => {
  Promise.reject(error);
};

export const onResponseError = (error: any) => {
  return Promise.reject(error);
};
