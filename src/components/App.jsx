import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
      { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
      { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
      { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  filter = () => {
    const { contacts, filter } = this.state;
        const filteredContacts = contacts.filter(contact => 
          contact.name.toLowerCase().includes(filter.toLowerCase()));
    return filteredContacts;
  };

  resetForm = () => {
    this.setState({ name: '', number: '' });
  };

  onChangeInput = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  addContact = () => {
    this.setState(oldState => {
      const list = [...oldState.contacts];
      list.push({
        id: nanoid(),
        name: oldState.name,
        number: oldState.number,
      });
      //
      return { contacts: list };
    });
  };

  render() {
    return (
      <div
        style={{
          // height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          // fontSize: 40,
          color: '#010101',
        }}
      >
        <h2>Phonebook</h2>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onChangeInput={this.onChangeInput}
          addContact={this.addContact}
          resetForm={this.resetForm}
        />
        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          // filterFunc={this.filterFunc}
          onChangeInput={this.onChangeInput}
        />
        <ContactList contacts={this.filter()} />
      </div>
    );
  }
}

// ChatGPT -filter-
// export class App extends Component {
//   state = {
//     contacts: [
//       { name: 'John', phone: '123-456-7890' },
//       { name: 'Mary', phone: '234-567-8901' },
//       { name: 'Bob', phone: '345-678-9012' },
//     ],
//     searchQuery: '',
//   };

//   handleSearch = event => {
//     const searchQuery = event.target.value.toLowerCase();
//     this.setState({ searchQuery });
//   };

//   render() {
//     const { contacts, searchQuery } = this.state;
//     const filteredContacts = contacts.filter(contact => {
//       const contactName = contact.name.toLowerCase();
//       return contactName.includes(searchQuery);
//     });

//     return (
//       <div>
//         <input type="text" onChange={this.handleSearch} />
//         <ul>
//           {filteredContacts.map((contact, index) => (
//             <li key={index}>
//               {contact.name} - {contact.phone}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }