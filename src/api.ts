const BASE_URL = 'http://localhost:3000';

const request = async (url: string) => {
  const options = {
    method: 'GET',
  };

  try {
    const response = await fetch(`${BASE_URL}/${url}`, options);

    if (response.ok) {
      const json = await response.json();
      return json;
    }

    throw new Error('요청 실패');
  } catch (error: any) {
    throw new Error(`이슈: ${error.message}`);
  }
};

export default request;
