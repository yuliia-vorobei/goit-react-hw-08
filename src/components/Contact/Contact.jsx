import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contacts({ contact }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  // const handleEdit = () => {
  //   dispatch(editContact(contact.id));
  // };

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
      <div className={css.collection}>
        {/* <button className={css.button} onClick={handleEdit}>
          Edit
        </button> */}
        <button className={css.button} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
