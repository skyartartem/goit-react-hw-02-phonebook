export const ContactForm = ({
  number,
  name,
  onChangeInput,
  addContact,
  resetForm,
}) => {
  return (
    <>
      <form
        onSubmit={evt => {
          evt.preventDefault();
          addContact();
          resetForm();
        }}
      >
        <label>
          Name
          <br />
          <input
            onChange={onChangeInput}
            value={name}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
              </label>
              <br />
        <label htmlFor="">
          Number
          <br />
          <input
            onChange={onChangeInput}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <br />
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
