import css from "../ContactsList/ContactList.module.css";
import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteUser, getUsers } from '../../redux/contacts/contacts-actions';
import { filterSelector, itemsSelector } from '../../redux/contacts/contacts-selectors';

function ContactsList() {
 
  const items = useSelector(itemsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  const contacts = items?.filter(({ name }) =>
    name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteContact = id => {
    dispatch(deleteUser(id));
  };

  return (
          <ul className={css.list}>
          {contacts?.map(({ id, name, phone }) => (
              <ContactListItem
              key={id}
              id={id}
              name={name}
              phone={phone}
              onDelete={deleteContact}
              />
          ))}
          </ul>
      );
}


export default ContactsList;