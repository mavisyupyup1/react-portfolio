import React from 'react';

export const Contact = () => {
    return (
        <div className="about">
            <div className='intro'>
            <h1 className="my-10">Let's Connect!</h1>
                 </div>
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