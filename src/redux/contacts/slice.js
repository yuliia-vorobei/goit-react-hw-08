// import { createAction } from "@reduxjs/toolkit";

// export const addContact = createAction("contacts/addContact");
// export const deleteContact = createAction("contacts/deleteContact");

// const initialState = {
//   contacts: {
//     items: [],
//   },
// };

// export default function contactsReducer(state = initialState.contacts, action) {
//   switch (action.type) {
//     case "contacts/addContact": {
//       return {
//         ...state,
//         contacts: {
//           items: [...state.contacts.items, action.payload],
//         },
//       };
//     }
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         contacts: {
//           items: state.contacts.items.filter(
//             (contact) => contact.id !== action.payload
//           ),
//         },
//       };
//     default:
//       return state;
//   }
// }

import { createSlice } from "@reduxjs/toolkit";
import {
  fetchContacts,
  addContact,
  deleteContact,
  // editContact,
} from "./operations";
import { logout } from "../auth/operations";

const slice = createSlice({
  name: "contacts",
  initialState: { items: [], loading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      // для того щоб видалити дані при логауті від інших користувачів
      .addCase(logout.fulfilled, () => {
        return {
          items: [],
          loading: false,
          error: null,
        };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        // state.items = state.items.filter(
        //   (contact) => contact.id !== action.payload.id
        // );
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (contact) => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // .addCase(editContact.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(editContact.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.error = null;
    //   const index = state.contacts.findIndex(
    //     (contact) => contact.id === action.payload.id
    //   );
    //   if (index !== -1) {
    //     state.contacts[index] = action.payload;
    //   }
    // })
    // .addCase(editContact.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export default slice.reducer;
