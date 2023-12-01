import { useState } from 'react';
// handleFormSubmit for Name, Email, Message
// Notify if any three not entered if cursor moves off them (and empty)
// Notify if email is invalid
function ContactForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            name: name,
            email: email,
            message: message
        })

        setName('');
        setEmail('');
        setMessage('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <div>
            <form className='contact-form' onSubmit={handleSubmit}>
                <input type="text"
                placeholder='Name'
                value={name}
                name='name'
                className='name-input'
                onChange={handleChange}
                ></input>
                <input type="text"
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
            </form>
            <button className="contact-button">Contact</button>
        </div>
    );
}

export default ContactForm;