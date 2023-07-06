import { validateEmail } from '../utils/helperfunction';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    // return <div> I am the contact page 
    // <button className="button is-medium is-primary is-half m-6" onClick={()=> window.open("/#contact")}>Back to About</button>
    // </div>

    const [state, handleSubmit] = useForm("my form");

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;




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
        <div>
          <p className="content is-medium">Contact Me</p>
          <hr />
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">Name</label>
              <input className="input" type="text" name="name" defaultValue={name} onBlur={handleChange} />
            </div>
            <div className="field">
              <label className="label" htmlFor="email">Email Address</label>
              <input className="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
            </div>
            <div className="field">
              <label className="label" htmlFor="message">Message</label>
              <textarea className="textarea" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
            </div>
            {errorMessage && (
              <div>
                <p className="is-danger">{errorMessage}</p>
              </div>
            )}
            <button className="button is-medium is-primary is-fullwidth" data-testid="button" type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Contact

// HEN I am presented with the Contact section
// THEN I see a contact form with fields for a name, an email address, and a message
// WHEN I move my cursor out of one of the form fields without entering text
// THEN I receive a notification that this field is required
// WHEN I enter text into the email address field
// THEN I receive a notification if I have entered an invalid email address
// WHEN I am presented with the Resume section
// THEN I see a link to a downloadable resume and a list of the developer’s proficiencies
// WHEN I view the footer
// THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)