import {cities} from '../data-source/br-cities'

export const findByNomeImpl = async (query) => {
  return cities.filter((item) => item.nome.includes(query));
};

export const findAllById = () => {
  const teste = ['teste 1', 'teste 2'];
  return teste;
};
