import PropTypes from 'prop-types';

const Contact = ({ contact, deleteContact }) => {
  console.log(contact);
  return (
    <>
      <p>
        {contact.name}: {contact.number}
      </p>
      {/* <button onClick={() => deleteContact(contact.id)}>Delete</button>; */}
    </>
  );
};

export default Contact;
