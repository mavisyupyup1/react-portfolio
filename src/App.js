import React,{useState} from 'react';
import Nav from './components/Nav'
import Gallery  from './components/Gallery';
import './App.css'
import ContactForm from './components/Contact'
import Footer from './components/Footer';

function App() {
  const [categories] =useState([
   
    {
        name:"Portfolio",
        description: "A collection of full-stack development work"
    },
    {name:"Resume",description:"Download my resume and see a summary of my skills"
    }, {
      name:"About Me",
      description: "Hi, I am Grace! I am the Director of Research Data Operations in the Department of Psychiatry at Columbia University and (soon to become) a full-stack developer. I provide comprehensive data services to researchers and I am hoping my knowledge as a developer brings more flexibilities and customizations to my data solutions. In my spare time, I enjoying baking bread and playing cello with my children. Our favorite pieces are Bach's Cello Suites. My favorite recipe is the Pullman Sandwich Bread."
  },
]);
const [currentCategory, setCurrentCategory] =useState(categories[0])
const [contactSelected, setContactSelected]=useState(false)
  return (
    <div>
      <header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected} setContactSelected ={setContactSelected}
      ></Nav>
      </header>
    
      <main>
        {!contactSelected?(
          <>
             <Gallery currentCategory={currentCategory}></Gallery>
          </>
        ):(
          <ContactForm></ContactForm>
        )}
      </main>
      <div><Footer></Footer></div>
      </div>
  );
} 

export default App;
