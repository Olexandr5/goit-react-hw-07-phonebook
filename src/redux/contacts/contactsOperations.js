import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    deleteContact, postContact, getDataContacts
} from "../../API/contactsApi.js";
  

export const getContacts = createAsyncThunk(
  "contacts/getContacts",
  async () => {
    const contacts = await getDataContacts();
    return contacts;
  },
);

export const createContacts = createAsyncThunk(
  "contacts/createContacts",
  async contact => {
    const contactCreate = await postContact(contact);
    return contactCreate;
  },
);

export const deleteContacts = createAsyncThunk(
  "contacts/deleteContacts",
  async contactId => {
    const contactDelete = await deleteContact(contactId);
    return contactDelete;
  },
);