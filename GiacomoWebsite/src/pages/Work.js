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
  font-family: 'source-code-pro', source code pro;
`;

const TypingText = styled(motion.h1)`
  font-size: 4rem;
  margin-top: 8rem;
  border-right: 0.1em solid #121212;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 900;
  max-width: 100%;
`;

const Subtitle = styled(motion.p)`
  font-size: 2.0rem;
  color: #121212;
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
  font-weight: regular;
  margin-bottom: 3rem;

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
  font-size: 1.5rem;
  color: #121212;
  font-weight: 500;
  text-align: center;
  margin-bottom: 3rem;
  margin-left: 2rem;
  margin-right: 2rem;
`;

const NextProjectButton = styled(motion.button)`
  font-size: 1.5rem;
  color: #FFF;
  background: #B00020;
  cursor: pointer;
  border-radius: 10px;
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

const desc = styled.p`
  max-width: 3rem;
  text-align: center;
  margin-left: 10rem;
  margin-right: 10rem;
`;

const Page = styled.div`
  height: 90%;
`;

const projects = [
  {
    title: 'Master\'s Thesis: Fault Detection in Autonomous Vehicle Perception Systems through Deep Learning',
    description: 'This project focused on fault and anomaly detection in autonomous driving by processing raw data from LiDAR and camera sensors to generate and visualize depth maps. A curated dataset, combining open-source and proprietary data with injected faults, was used to benchmark traditional image processing methods and develop supervised deep learning models. These models were rigorously trained and tested, achieving high-performance metrics, including precision of 98.29%, recall of 97.47%, and an F1 score of 97.56%. Additionally, faulty images were generated using Image-To-Image Generative Deep Learning architectures like Pix2Pix.',
    link: '',
  },
  {
    title: 'Multi‑Class Semantic Segmentation on Urban Driving Scenes',
    description: 'This project showcases a deep learning approach to semantic segmentation using the U-Net architecture. The model was trained on the Cityscapes dataset, which contains high-resolution images of urban street scenes, annotated for various classes like roads, buildings, and vehicles. The project includes a custom mapping of dataset classes to optimize segmentation accuracy and visualization.',
    link: 'https://github.com/giacolees/MulticlassSemanticSegmentation',
  },
  {
    title: 'Sensor Data Analysis and Trajectory Prediction Using Machine Learning',
    description: 'This project provides a comprehensive analysis of trajectory data using time series methods. This analysis covers the entire process from data preprocessing and exploratory data analysis to feature extraction and predictive modeling.',
    link: 'https://github.com/giacolees/TimeSeries_Trajectories_Analysis',
  },
  {
    title: 'Image Processing Pipeline using Embedded Software',
    description: 'This project leverages FPGA-based hardware design to perform real-time image processing, focusing on color space conversion, pixel classification, noise reduction, and data compression. By converting images from RGB to HSV, the system enhances the accuracy of color-based processing. Pixel classification and filtering are used to refine detected regions, while run-length encoding optimizes data for efficient handling.',
    link: 'https://github.com/giacolees/ImageFiltering',
  },
  {
    title: 'Redesign of iOS default Clock App in Swift',
    description: 'Contemporary clock app using SwiftUI, featuring a unique circular design where hours, minutes, and seconds are visually represented as rotating concentric rings. The app dynamically updates every 0.1 seconds to provide real-time accuracy, all while maintaining a minimalist and sleek user interface. Users can easily toggle the display of the seconds ring, offering a customizable experience that balances both functionality and aesthetics.',
    link: 'https://github.com/giacolees/RedesignedClock',
  },
  {
    title: 'Portfolio Website Source Code',
    description: 'To view the source code of this website, click here',
    link: 'https://github.com/giacolees/giacomowebsite',
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
              <desc>{project.description}</desc>
              {index > 0 && (<LearnMoreButton
                href={project.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check the project
              </LearnMoreButton>
              )}
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
