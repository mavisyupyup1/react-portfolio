import React from 'react';
import'./style.css'
import file from '../../assets/files/GraceLiu_Resume.pdf'
export const Resume = () => {
    return (
        <div className="about">
              <div className='intro'>
            <h2 className="my-10">Nice to meet you!</h2>
            Check out my resume
            <a href={file} download>
            <i class="fa-solid fa-file-pdf"></i></a>
             </div>
             <i class="fa-solid fa-code"></i>
            <h1 className="mt-5 text-center">Technical Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li><i class="fa-brands fa-js"></i>JavaScript</li>
                    <li><i class="fa-brands fa-html5"></i>HTML</li>
                    <li><i class="fa-brands fa-css3"></i>CSS</li>
                    {/* <li></li>
                <li></li>
                <li></li> */}
                </div>
                
                <div>
                    <strong>Databases</strong>
                    <li><i class="fa-solid fa-database"></i>MySQL</li>
                    <li><i class="fa-solid fa-cubes"></i>NoSQL</li>
                    <li><i class="fa-solid fa-pepper-hot"></i>MongoDB</li>
                    {/* <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Tools</strong>
                    <li><i class="fa-brands fa-github"></i>Git and GitHub</li>
                    <li><i class="fa-solid fa-w"></i>Webpack</li>
                    <li><i class="fa-brands fa-dev"></i>DevTools</li>
                </div>
                <div>
                    <strong>Environment/Frameworks/Library</strong>
                    <li><i class="fa-brands fa-node"></i>Node.js</li>
                    <li><i class="fa-solid fa-server"></i>Express.js</li>
                    <li><i class="fa-brands fa-react"></i>React.js</li>
                </div>
            </div>
        </div>
    )
}

export default Resume;