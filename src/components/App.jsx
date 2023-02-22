import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';

// export const App = () => {
//   return (
//     <div
//       style={{
//         // height: '100vh',
//         // display: 'flex',
//         // justifyContent: 'center',
//         // alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       <ContactForm />
//       <ContactList />
//     </div>
//   );
// };

export class App extends Component {
  state = {
    contacts: [
      { id: 1, name: 'Rosie Simpson', number: '459-12-56' },
      { id: 2, name: 'Hermione Kline', number: '443-89-12' },
      { id: 3, name: 'Eden Clements', number: '645-17-79' },
      { id: 4, name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  addContact = (contactName) => {
    this.setState((oldState) => {
      const list = [...oldState.contacts];
      list.push({ id: list[list.length-1].id + 1, name: contactName });
      // 
      return { contacts: list };

    });
  }

  // addContact = contactName => {
  //   this.setState({ contacts: [{ name: contactName }] });
  // };

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
        <ContactForm addContact={this.addContact} />
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}