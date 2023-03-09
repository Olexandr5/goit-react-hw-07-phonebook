import css from "./ContactListItem.module.css";
import React from "react";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';
import { loadingSelector } from '../../redux/contacts/contacts-selectors';


function ContactListItem({ name, phone, onDelete, id }) {

  const loading = useSelector(loadingSelector);
  
  return (
    <li className={css.listItem}>
      <div>
            <span className={css.listItemText}>{name}:</span>
      <span className={css.listItemText}>{phone}</span>
      </div>
      <button className={css.button} type="button" disabled={loading} onClick={() =>
        onDelete(id)
      
      
      }>Delete</button>
        </li>
  );
}

ContactListItem.propTypes = {
 name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactListItem;