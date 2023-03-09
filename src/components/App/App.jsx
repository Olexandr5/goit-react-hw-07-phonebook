import "./App.module.css";
import FormContact from "../FormContact/FormContact";
import ContactsList from "../ContactsList/ContactsList";
import Filter from "../Filter/Filter";
import { errorSelector, loadingSelector } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';

 

function App() {

const customError = useSelector(errorSelector);
  const loading = useSelector(loadingSelector);

  return (
      <>
        <h1>Phonebook</h1>

         <FormContact />
        
        <h2>Contants</h2>
        
        <Filter />

      {customError && <p>{customError}</p>}
       {loading && (
          <p   style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
            <b>Working...</b>
          </p>
        )}
        {!customError && <ContactsList />}
       

       
      </>
    );
    
}

export default App;