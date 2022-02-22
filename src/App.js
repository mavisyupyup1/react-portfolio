import React,{useState, useEffect} from 'react';
import Nav from './components/Nav'
import Portfolio  from './components/Portfolio';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Skills from './components/Skills';
import Home from './components/Home';
import './App.css'
function App() {
    const [currentPage, setCurrentPage] = useState('');
   
    const renderPage = () => {
      if (currentPage === 'Contact') {
        return <Contact/>;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Skills') {
        return <Skills/>;
      }
      return <Home />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
    useEffect(() => {
      document.title = `Grace Liu | ${currentPage}`
    });
    return ( <div className="app">
      <main>
        <Nav currentPage={currentPage} handlePageChange={handlePageChange}
        />
        {renderPage()}
      </main>
      <Footer></Footer>
      </div>
    );
   
  }
  
export default App;
