import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

export default function Contacts({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.list}>
      <div className={css.item}>
        <h2 className={css.name}>
          <IoPerson className={css.icon} />
          {contact.name}
        </h2>
        <p className={css.number}>
          <FaPhone className={css.icon} />
          {contact.number}
        </p>
      </div>
      <button className={css.delete} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
