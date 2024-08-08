import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Work from './pages/Work';
import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
import Footer from './components/Footer';

const AboutDiv = styled.div`
  max-height: 100%;
`;

const SomeWarning = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFA;
  color: #121212;
  font-size: 1rem;
  text-align: center;
`;


const App = () => {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  const [showMobileWarning, setShowMobileWarning] = useState(false)

  useEffect(() => {
    if(window.innerWidth <= 800)
      setShowMobileWarning(true)
  }, [])

  if (showMobileWarning) {
    return <SomeWarning>
      <p>Sorry, this website is not optimized for mobile devices yet. Please view on a desktop or laptop.
        If you're already using a desktop or laptop, please refresh the page.
      </p>
      </SomeWarning>;
  }

  return (
    <Routes>
          <Route path='/' exact element={
            <>
              <Header/>
                <Work/>
              <Footer />
            </>
            } />
          <Route path='/About' element={
            <>
              <AboutDiv>
                  <Header fixed = {false}/>
                  <About/>
                  <Footer />
              </AboutDiv>
            </>
            } />
    </Routes>
  );
};

export default App;
