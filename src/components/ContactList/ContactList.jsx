

export const ContactList = ({ contacts }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(contact => {
          return (
            <li key={contact.id}>
              <span>{contact.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};