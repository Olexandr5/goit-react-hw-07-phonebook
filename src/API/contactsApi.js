import axios from 'axios';

const BASE_URL = 'https://632c9c735568d3cad8896f5b.mockapi.io/api/v1';
const mockapi = axios.create({ baseURL: BASE_URL });

export const getContacts = async () => {
  try {
    const { data } = await mockapi.get('/contacts');
    console.log(data);
    return data;
  } catch (error) {
    return error.message;
  }
};

export const postContact = async contact => {
  try {
    const { data } = await mockapi.post('/contacts', { ...contact });
   
    return data;
  } catch (error) {
    return error.message;
  }
};


export const deleteContact = async id => {
  try {
    const { data } = await mockapi.delete(`/contacts/${id}`);
   
    return data;
  } catch (error) {
    return error.message;
  }
};



