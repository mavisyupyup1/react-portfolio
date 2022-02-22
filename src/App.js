import React,{useState, useEffect} from 'react';
import Nav from './components/Nav'
import Portfolio  from './components/Portfolio';
import Contact from './components/Contact'
import Footer from './components/Footer';
import Resume from './components/Resume';
import './App.css'
import About from './components/About';
function App() {
    const [currentPage, setCurrentPage] = useState('');
   
    const renderPage = () => {
      if (currentPage === 'Contact') {
        return <Contact/>;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
        return <Resume/>;
      }
      return <About/>;
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
