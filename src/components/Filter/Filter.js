import React from "react";
import css from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import { filterUser } from '../../redux/contacts/contacts-actions';
import { filterSelector } from '../../redux/contacts/contacts-selectors';

function Filter() {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={filter}
        onChange={event => dispatch(filterUser(event.target.value))}
        placeholder="Enter name for Search"
      />
    </label>
  );
 
}

export default Filter;