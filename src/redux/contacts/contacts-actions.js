import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from '../../API/contactsApi';


export const getUsers = createAsyncThunk('contacts/get', async () => {
  return await getContacts();
});

export const addUser = createAsyncThunk('contacts/add', async contact => {
  await postContact(contact);
  return await getContacts();
});

export const deleteUser = createAsyncThunk('contacts/delete', async id => {
  await deleteContact(id);
  return await getContacts();
});

export const filterUser = createAction('contacts/filter');