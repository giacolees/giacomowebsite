import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  background: #FFFFFA;
  color: #121212;
  max-width: 100%;
  overflow-x: hidden;
`;

const TypingText = styled(motion.h1)`
  font-size: 4rem;
  margin-top: 8rem;
  border-right: 0.1em solid #121212;
  white-space: nowrap;
  overflow: hidden;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: 900;
  max-width: 100%;
`;

const Subtitle = styled(motion.p)`
  font-size: 2.0rem;
  color: #121212;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: 500;
  text-align: center;
  padding-bottom: 9rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
    margin-top: 2rem;
    max-width: 70%;
  }
  
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  gap: 10rem;
  justify-content: center;
  width: 100%;
  padding: 10rem;
`;

const ProjectsSection = styled.div`
  flex: 1 1 calc(33.333%);
  gap: 5rem;
  justify-content: top;
  margin-top: 1rem;
  margin-bottom: 1rem;
  align-items: center;
  background: #FFFFFA;
  color: #121212;

   @media (max-width: 768px) {
    flex: 1 1 calc(50% - 40px); /* Two columns on tablets and small screens */
  }

  @media (max-width: 480px) {
    flex: 1 1 100%; /* One column on mobile devices */
  }
`;

const LearnMoreButton = styled(motion.a)`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: #121212;
  background: #FFFFFA;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: regular;
`;

const ExploreProjButt = styled(motion.a)`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  color: #B00020;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: regular;

  &:hover {
    scale: 1.1;
  }

  &:active {
    scale: 0.9;
  }
`;

const Works = styled(motion.p)`
  display: flex;
  flex-direction: column;
  font-size: 2.0rem;
  color: #121212;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: 500;
  text-align: center;
`;

const NextProjectButton = styled(motion.button)`
  font-size: 1.5rem;
  color: #FFF;
  background: #B00020;
  cursor: pointer;
  border-radius: 10px;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: bold;
  margin-top: 15rem;
  width: 10%;
  align-self: center;

  &:hover {
    background: #a0001c;
  }

  &:active {
    background: #8a0018;
  }
`;

const projects = [
  {
    title: 'Fault Detection in Autonomous Vehicle Perception Systems through Deep Learning',
    description: 'Master\'s Thesis',
  },
  {
    title: 'Multi‑Class Semantic Segmentation on Urban Driving Scenes',
    description: 'Description of project 1',
  },
  {
    title: 'Sensor Data Analysis and Trajectory Prediction Using Machine Learning',
    description: 'Description of project 2',
  },
  {
    title: 'Image Processing Pipeline using Embedded Software',
    description: 'Description of project 3',
  },
  {
    title: 'Neural Network Accelerator on FPGA',
    description: 'Description of project 1',
  },
  {
    title: 'Redesign of iOS default Clock App',
    description: 'Description of project 2',
  },
  {
    title: 'Portfolio Website Source Code',
    description: 'To view the source code of this website, click here',
  },
];

const Work = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "\"HHello\"";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length - 1) {
        setDisplayedText(prev => prev + fullText[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Adjust the speed of typing here

    return () => clearInterval(interval);
  }, []);

  const projectsContainerRef = useRef([]);
  projectsContainerRef.current = projects.map(
    (_, i) => projectsContainerRef.current[i] ?? React.createRef()
  );

  const scrollIntoView = (index) => {
    if (projectsContainerRef.current[index] && projectsContainerRef.current[index].current) {
      const element = projectsContainerRef.current[index].current;
      const yOffset = -100; // Adjust this value to set how far above the element you want to scroll
  
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };

  return (
    <HomeSection>
      <TypingText
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {displayedText}
      </TypingText>
      <Subtitle
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I’m Giacomo and this is my portfolio ;) 
      </Subtitle>
        <ExploreProjButt
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          onClick={() => scrollIntoView(0)}
          >
          Explore My Projects
        </ExploreProjButt>
        <ProjectsContainer>
        {projects.map((project, index) => (
          <ProjectsSection
            key={index}
            ref={projectsContainerRef.current[index]}
          >
            <Works
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <LearnMoreButton
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </LearnMoreButton>
              {index < projects.length - 1 && (
                <NextProjectButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollIntoView(index + 1)}
                >
                  <FontAwesomeIcon icon={faArrowDown} />
                </NextProjectButton>
              )}
            </Works>
          </ProjectsSection>
        ))}
      </ProjectsContainer>
    </HomeSection>
  );
};

export default Work;
