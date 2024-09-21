import "./App.css";
import ContactForm from "../ContactForm/ContactForm";
import "./App.css";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../../redux/contactsOps";

export default function App() {
  const selectIsLoading = useSelector((state) => state.contacts.loading);
  const selectIsError = useSelector((state) => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {selectIsLoading && !selectIsError && <b>Request in progress...</b>}
      <SearchBox />
      <ContactList />
    </div>
  );
}
