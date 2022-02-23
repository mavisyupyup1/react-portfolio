import React ,{useState}from 'react';
import { validateEmail } from '../../utils/helpers';
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"

export const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };
  
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
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    };
    return (
        <div >
            <div className='intro'>
            <h1 className="my-10">Let's Connect!</h1>
                 </div>   
                 <section>
      <form id="contact-form" fluid="lg" className ="form" onSubmit={handleSubmit}>
        <div>
          <label className ="label"htmlFor="name">Name:</label>
          <input className ="input"type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input className ="input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea className ="input"name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Send</button>
      </form>
      </section> 

                 <h4><i class="fab fa-brands fa-linkedin"></i>LinkedIn</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/grace-ge-liu/">
                        https://www.linkedin.com/in/grace-ge-liu
                </a>
                </p>

                <h4><i class="fab fa-github"></i>GitHub</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/mavisyupyup1">
                        https://github.com/mavisyupyup1
                </a>
                </p>

                <h4><i class="fa-solid fa-envelope"></i>Email</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:gliu42@gmail.com">
                        gliu42@gmail.com
                </a>
                </p>

                <h4><i class="fa-solid fa-phone"></i>Phone</h4>
                <p>
                    <a target="_blank" rel="noopener noreferrer" href="tel:646-774-8947">
                        646-774-8947
                </a>
                </p>
            </div>
       
    )
}

export default Contact;