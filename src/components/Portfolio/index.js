import React from 'react';
import './style.css';
import image0 from '../../assets/images/COV-FIT.png'
import image1 from '../../assets/images/Send-A-Joke.png'
import image2 from '../../assets/images/Tech-blog.png'
import image3 from '../../assets/images/Budget-Tracker.png'
import image4 from '../../assets/images/Note-Taker.png'
import image5 from '../../assets/images/Weather-Dashboard.png'
import image6 from '../../assets/images/Photo-Port.png'
import Card from "react-bootstrap/Card"

function Portfolio() {
  const project=[
  { title:"COV-FIT",
    description:"COV-FIT is an app that recommends at-home exercises that can be grouped into full-length workouts and scheduled for later. ",
    feature:"JavaScript, Node, Express, Handlebars, MySQL, Sequelize, Mobile responsive",
    url:"https://enigmatic-fjord-07638.herokuapp.com/",
    gitRepo:"https://github.com/mavisyupyup1/project-2-group-a",
    videoDemo:"https://drive.google.com/file/d/1Fuvddnjz3kl46LRvEhePG7o7NaxvTLEq/view",
   
  },
  { title:"Send-A-Joke",
  description:"Send-a-Joke is a joke card generator that can lift anyone’s spirits on any occasion through the combined power of humor and adorable animals.",
  feature:"JavaScript, CSS, HTML, JQuery, MaterializeCSS, html2canvas,Server side APIs, localStorage, Mobile responsive",
  url:"https://mavisyupyup1.github.io/project-01-send-a-joke/",
  gitRepo:"https://github.com/mavisyupyup1/project-01-send-a-joke",
  videoDemo:"hhttps://drive.google.com/file/d/1za-q_pwGCYKso2G7lmsKbcsnihh-C99A/view"
},
{ title:"Tech-Blog",
description:"Tech blog is a CMS-style blog site where developers can publish blog posts and comment on other developers’. This app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating engine language, Sequelize as the ORM, and the express-session npm package for authentication.",
feature:"NODE.js, Express.js, Sequelize,Dotenv,Express Session,Bcrypt,Handlebars",
url:"https://floating-spire-63987.herokuapp.com/",
gitRepo:"https://github.com/mavisyupyup1/tech-blog",
videoDemo:"https://watch.screencastify.com/v/aNF2BB9MOQXwHOkqwYSP"
},
{ title:"budget-tracker",
description:"Budget tracker is a Progressive Web Application (PWA) that allows users to track withdrawals and deposits with or without a data/internet connection. When users make transaction offline, the total will be updated when the app is back online. Users also have an option to install the app on the their computer or mobile phone home screen.",
feature:"NODE.js, Express.js,JavaScript, MongoDB, Mongoose, MongoDB Atlas, IndexDB for offline functionality, Service workers for PWA",
url:"https://blooming-plateau-56019.herokuapp.com/",
gitRepo:"https://github.com/mavisyupyup1/budget-bomb-PWA",
videoDemo:"https://drive.google.com/file/d/1WLuPfFK7TT2-Y0cAMIUYUO8OdV-BLS7n/view"
},
{ title:"Note-Taker",
description:"Note Taker can be used to write, save and delete notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
feature:"NODE.js, Express.js, JavaScript",
url:"https://young-retreat-21388.herokuapp.com/",
gitRepo:"https://github.com/mavisyupyup1/note-taker",
videoDemo:"https://drive.google.com/file/d/1WPd56RbALW0YJ8mKbPJrHuDuyOpBGb6q/view"
},
{ title:"Weather-Dashboard",
description:"This weather dashboard runs in the browser and features dynamically updated HTML and CSS powered by JavaScript. User can search for a city and view the current weather conditions such as temperature, humidity, wind speed and UV index and five day forecast. The UV index color indicates whether the conditions are favorable, moderate, or severe. The search history is saved under the search bar and when reload the page, the history persists and user is presented with the weather of last searched.",
feature:"HTML,CSS,JavaScript",
url:"https://mavisyupyup1.github.io/weather-dashboard/",
gitRepo:"https://github.com/mavisyupyup1/weather-dashboard",
videoDemo:"https://drive.google.com/file/d/1GyMC5Kyhldx4rqRKzuVpGsZFqlJzZLuc/view"
},
{ title:"Photo-Port",
description:"Photo Port is a SPA powered by REACT.js",
feature:"HTML,CSS,JavaScript, REACT.js",
url:"https://github.com/mavisyupyup1/photo-port",
gitRepo:"http://mavisyupyup1.github.io/photo-port",
}
]

  return (
<div className=" row justify-content-center gap={3}" id="portfolio" >
        
<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image0} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[0].title}</h3></Card.Title>
    <Card.Text>
    {project[0].description}
    <p className="card-text">
                        <small>
                        {project[0].feature}
                        </small>
                    </p>

                    <div className="gitLinks w-100 py-3 pt-3 pl-0">
                        <a href= {project[0].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[0].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[0].videoDemo}  className="btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
    </Card.Text>
    
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image1} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[1].title}</h3></Card.Title>
    <Card.Text>
    {project[1].description}
    <p className="card-text">
                        <small>
                        {project[1].feature}
                        </small>
                    </p>
    </Card.Text>
    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[1].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[1].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[1].videoDemo}  className="btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image2} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[2].title}</h3></Card.Title>
    <Card.Text>
    {project[0].description}
    <p className="card-text">
                        <small>
                        {project[2].feature}
                        </small>
                    </p>
    </Card.Text>
    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[2].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[2].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[2].videoDemo}  className="btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image3} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[3].title}</h3></Card.Title>
    <Card.Text>
    {project[3].description}
    <p className="card-text">
                        <small>
                        {project[3].feature}
                        </small>
                    </p>
    </Card.Text>
    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[3].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[3].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[3].videoDemo}  className="btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image4} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[4].title}</h3></Card.Title>
    <Card.Text>
    {project[4].description}
    <p className="card-text">
                        <small>
                        {project[4].feature}
                        </small>
                    </p>
    </Card.Text>
    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[4].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[4].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[4].videoDemo}  className="btn"target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image5} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[5].title}</h3></Card.Title>
    <Card.Text>
    {project[5].description}
    <p className="card-text">
                        <small>
                        {project[5].feature}
                        </small>
                    </p>
    </Card.Text>
    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[5].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[5].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            <a href={project[5].videoDemo}  className="btn" target="_blank" rel="noreferrer">
                            <i className="fa-solid fa-video"></i></a>
                    </div>
  </Card.Body>
</Card>

<Card className="col-xs-12 col-sm-12 col-lg-4 mb-4" >
  <Card.Img variant="top" src={image6} className="card-img"/>
  <Card.Body>
    <Card.Title><h3>{project[6].title}</h3></Card.Title>
    <Card.Text>
    {project[6].description}
    <p className="card-text">
                        <small>
                        {project[6].feature}
                        </small>
                    </p>

                    <div className="gitLinks w-100 py-3 pt-3 pl-0 ">
                        <a href= {project[6].url} target="_blank" className="btn mr-2" rel="noreferrer">
                            <i className="fas fa-laptop-code"></i></a>
                        <a href={project[6].gitRepo}  target="_blank" className="btn" rel="noreferrer">
                            <i className="fab fa-github"></i></a>
                            
                    </div>
    </Card.Text>
    
  </Card.Body>
</Card>
</div>




       )
}
export default Portfolio;