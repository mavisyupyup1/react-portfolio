import React from 'react';
import'./style.css'
export const Skills = () => {
    return (
        <div className="about">
            <div className='intro'>
            <h1 className="my-10">Nice to meet you!</h1>
           I am Grace,a full-stack web developer. 
           I provide comprehensive data services to researchers and my knowledge as a developer brings out of the box customizations to my data solutions. 
             </div>
            <h1 className="mt-5">Skills</h1>
            <div className="content">
                <div>
                    <strong>Languages</strong>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    {/* <li></li>
                <li></li>
                <li></li> */}
                </div>
                
                <div>
                    <strong>Databases</strong>
                    <li>MySQL</li>
                    <li>NoSQL</li>
                    <li>MongoDB</li>
                    {/* <li></li>
                <li></li> */}
                </div>
                <div>
                    <strong>Tools</strong>
                    <li>Git and GitHub</li>
                    <li>Webpack</li>
                    <li>DevTools</li>
                </div>
                <div>
                    <strong>Environment/Frameworks/Library</strong>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>React.js</li>
                </div>
            </div>
        </div>
    )
}

export default Skills;