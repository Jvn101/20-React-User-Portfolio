import { validateEmail } from '../utils/helperfunction';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    const [state, handleSubmit] = useForm("my form");
    const [formState, setFormState] = useState({ username: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { username, email, message } = formState;

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`A ${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log('Handle Form', formState);
        }
      };

      return (
        <div className="form-box">
          <h1 class="pageHeading">Contact Me</h1>
          <form class="contact-form" onSubmit={handleSubmit}>
            <div class="field">
              <label>Name</label>
              <input class="input" type="text" name="name" defaultValue={username} onBlur={handleChange} />
            </div>
            <div class="field">
              <label>Email Address</label>
              <input class="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div class="field">
              <label>Message</label>
              <textarea class="input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p>{errorMessage}</p>
              </div>
            )}
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Contact
