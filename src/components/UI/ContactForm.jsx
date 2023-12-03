import { useState } from 'react';
import { validateEmail } from './helpers';
// handleFormSubmit for Name, Email, Message
// Notify if any three not entered if cursor moves off them (and empty)
// Notify if email is invalid
function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        // setInput(e.target.value);
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
        setName(inputValue);
      } else if (inputType === 'email') {
        setEmail(inputValue);
      } else {
        setMessage(inputValue);
      }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // props.onSubmit({
        //     name: name,
        //     email: email,
        //     message: message
        // })
        if(!validateEmail(email)){
            setErrorMessage('Email is invalid.');
            return;
        }
        // Code here for if cursor moves out of empty box.

        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="container text-center">
            <form className='contact-form' onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Name'
                value={name}
                name='name'
                className='name-input'
                onChange={handleChange}
                ></input>
                <input type="email"
                placeholder='random@gmail.com'
                value={email}
                name='email'
                className='email-input'
                onChange={handleChange}
                ></input>
                <input type="text"
                placeholder='Type your message here...'
                value={message}
                name='message'
                className='message-input'
                onChange={handleChange}
                ></input>
                <button className='contact-button' type="submit">Contact</button>
            </form>
            {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )} 
        </div>
    );
}

export default ContactForm;