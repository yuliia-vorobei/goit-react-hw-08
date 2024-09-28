import { useSelector } from "react-redux";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import { selectIsLoading } from "../../redux/contacts/selectors";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <h2>Your Contacts</h2>
      <ContactForm />
      <div>{isLoading && "Request in progress..."}</div>
      <ContactList />
    </>
  );
}
