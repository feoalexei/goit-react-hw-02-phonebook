import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';

const ContactList = ({ contacts, deleteContact }) => {
  console.log(contacts);
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li>
            <Contact contact={contact} deleteContact={deleteContact} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
