import axios from 'axios';

//TODO : 예외처리 해주기
export const getProducts = async () => {
  const response = await axios.get('http://localhost:4000/products');
  return response.data;
};
