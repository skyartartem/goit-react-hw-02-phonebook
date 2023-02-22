export const ContactForm = ({ addContact }) => {
  return (
    <>
      <h2>Phonebook</h2>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          addContact(evt.target.name.value);
        }}
      >
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
