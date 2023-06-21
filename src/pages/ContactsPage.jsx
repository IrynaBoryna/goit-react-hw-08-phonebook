import { ContactForm } from '../components/ContactForm/contactForm';
import { ContactList } from '../components/ContactList/contactList';
import { Filter } from '../components//Filter/filter';
import { fetchContacts } from '../redux/contacts/operations';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';

export const ContactsPage = () => {
const isLoading = useSelector(selectIsLoading);
const error = useSelector(selectError);
 const dispatch = useDispatch();
 
 useEffect(() => {
   dispatch(fetchContacts());
 }, [dispatch]);
    
    return (
        <div
            style={{
                width: 1100,
            }}
        >
            <h1 style={{ fontSize: 60 }}>Phonebook</h1>
            <ContactForm />
            <h2 style={{ fontSize: 50 }}>Contacts</h2>
            <Filter />
            {isLoading && !error && <b>Request in progress...</b>}
            <ContactList />
        </div>
    )
};
ContactsPage.prototype = {
  filter: PropTypes.string,
  contacts: PropTypes.number,
};
