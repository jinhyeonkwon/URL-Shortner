import axiosInstance from './axiosInstance';
import { clientId, clientSecret } from './APIInfo';

export const getShortenedURL = async (url) => {
  try {
    const response = await axiosInstance.post(
      '/util/v1/shorturl',
      { url: encodeURI(url) },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-NCP-APIGW-API-KEY-ID': clientId,
          'X-NCP-APIGW-API-KEY': clientSecret,
        },
      }
    );
    return response.data.result.url;
  } catch (err) {
    console.error(
      'Error occurred during API call:',
      err.response ? err.response.data : err.message
    );
    throw new Error(err);
  }
};
