import css from "./Contact.module.css";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

export default function Contacts({ contact }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.error("Contact is deleted");
    handleClose();
  };

  // const handleEdit = () => {
  //   dispatch(editContact(contact.id));
  // };

  return (
    <div className={css.list}>
      <Toaster />
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
      {/* <button className={css.button} onClick={handleEdit}>
          Edit
        </button> */}
      <button className={css.button} onClick={handleClickOpen}>
        Delete
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you really want to delete this contact?"}
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button onClick={handleDelete} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
