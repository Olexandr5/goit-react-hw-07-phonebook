import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { getContacts, createContacts, deleteContacts  } from "../contacts/contactsOperations";


export const contactsItemsSlice = createSlice({
  name: "items",
  initialState: {
    contacts: [],
    status: "idle",
    error: null,
  },

  extraReducers(builder) {
    builder
      .addCase(getContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(getContacts.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        contacts: [...action.payload],
      }))
      .addCase(getContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(createContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(createContacts.fulfilled,
        (state, action) => ({
          ...state,
          status: "succeeded",
          contacts: [...state.contacts, action.payload],
        }),
      )
      .addCase(createContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }))
      .addCase(deleteContacts.pending, state => ({
        ...state,
        status: "pending",
      }))
      .addCase(deleteContacts.fulfilled,
        (state, action) => ({
          ...state,
          status: "succeeded",
          contacts: [
            ...state.contacts.filter(contact => contact.id !== action.payload),
          ],
        }),
      )
      .addCase(deleteContacts.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});



const contactsFilterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContact: (_, action) => action.payload,
  },
});


export const { filterContact } = contactsFilterSlice.actions;

const contactsReducer = combineReducers({
  [contactsItemsSlice.name]: contactsItemsSlice.reducer,
  [contactsFilterSlice.name]: contactsFilterSlice.reducer,
});

export default contactsReducer;

