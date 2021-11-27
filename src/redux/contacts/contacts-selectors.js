import { createSelector } from "reselect";

export const getLoading = (state) => state.contacts.loading;
export const getItems = (state) => state.contacts.items;
export const getFilter = (state) => state.contacts.filter;

export const getFilterContacts = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
