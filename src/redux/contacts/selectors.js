import { createSelector } from '@reduxjs/toolkit';

export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

// export const selectVisibleContacts = state => {
//   const contacts = selectContacts(state);
//   const filter = selectFilter(state);

//   return contacts.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };


export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
  return  filter === ''
      ? contacts
      : contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter))
  //   console.log('Calculating visible tasks. Now memoized!');
  //   switch (filter) {
  //     case filter.active:
  //      return contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter)
  // );
  //     case filter.completed:
  //       return tasks.filter(task => task.completed);
  //     default:
        
    }
  
);
