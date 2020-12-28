import fetchApi from './fetchApi';

const serviceApi = {
  createReservation: async (parameters) => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.post('/reservation', parameters, config);
    return data;
  },
  getTourism: async () => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.get('/tourism', config);
    return data;
  },
  getHousing: async () => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.get('/housing', config);
    return data;
  },
  getFoods: async () => {
    const token = 'fe7e6602162f788913e79b11a7db7b51';
    const config = {
      Authorization: `Bearer ${token}`,
    };
    const data = await fetchApi.get('/foods', config);
    return data;
  },
};

export default serviceApi;
