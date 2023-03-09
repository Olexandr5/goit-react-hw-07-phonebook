import css from "./FormContact.module.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from "notiflix";
import { addUser } from '../../redux/contacts/contacts-actions';
import { itemsSelector } from '../../redux/contacts/contacts-selectors';


function FormContact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const contacts = useSelector(itemsSelector);
  const dispatch = useDispatch();


 const handlerChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        break;
    }
  };


    const handlerSubmit = event => {
      event.preventDefault();
      
    const id = nanoid();
    if (!name || !phone) {
      Notify.failure("Some field is empty");
      return;
      }
      
    const inContacts = contacts?.some(
      item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (inContacts) {
      Notify.failure("Contact is already exist");
      return;
    }

      dispatch(addUser({ name, phone, id }),
      Notify.success("Contact was added to phonebook"));
    setName('');
    setPhone('');
  };


    return (
      <form className={css.form} onSubmit={handlerSubmit}>
        <label className={css.label} htmlFor="">
          Name
            <input
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handlerChange}
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label className={css.label} htmlFor="">
          Number
          <input
            className={css.input}
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            value={phone}
            onChange={handlerChange}
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>

        <button className={css.button} type="submit">
          <span>Add contact</span>
        </button>
      </form>
  ); 
}

export default FormContact;
