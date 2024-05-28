import axios from 'axios';

export async function sendRequest(payload, dataset, mode) {
  try {
    let response;

    if (mode === 'GET') {
      response = await axios.get(`http://compute.ryuss.com:8000${payload}`);
    } else {
      response = await axios({
        method: mode,
        url: `http://compute.ryuss.com:8000${payload}`,
        data: dataset
      });
    }

    return response.data;
  } catch (error) {
    console.error('요청을 보내지 못했습니다.', error);
    throw error;
  }
}
