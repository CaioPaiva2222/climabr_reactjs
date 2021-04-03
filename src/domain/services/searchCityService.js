import {findByNome} from '../../data/cityRepository'

export const getCity = async (query) => {
  console.log('query', query.length)
  if (!query || query.trim().length < 3) {
    return [];
  }
  return findByNome(query)
};

export const searchCity2 = (query) => {
  if (!query || query.trim().length < 3) {
    return [];
  }
};
