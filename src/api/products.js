import axios from 'axios';

//TODO : 예외처리 해주기
export const getProducts = async () => {
  const response = await axios.get('https://shopping-cart-tyhe.herokuapp.com/api');
  return response.data;
};
