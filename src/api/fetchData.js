import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6734e1835995834c8a913832.mockapi.io/',
});

export const getContacts = async () => {
  const data = await instance.get('/contacts');
  return data;
};

export const deleteContact = async id => {
  const data = await instance.delete(`/contacts/${id}`);
  return data;
};

export const createContact = async contact => {
  const data = await instance.post(`/contacts`, contact);
  return data;
};
