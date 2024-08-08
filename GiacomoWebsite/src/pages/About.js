import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Avatar from '../assets/graphics/GiacomoAvatar.png';
import { useEffect } from 'react';


const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFFFFA;
  color: #121212;
  max-width: 100%;
  
`;

const Title = styled(motion.h1)`
  font-size: 1.5rem;
`;

const Content = styled(motion.p)`
  font-size: 1.5rem;
  color: #121212;
  max-width: 60rem;
  text-align: center;
  margin-bottom: 4rem;
`;

const AvatarImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const About = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
        document.body.style.overflow = "scroll"
    };
}, []);

  return (
    <AboutSection>
      <motion.img 
       src={Avatar} 
       alt="Profile"
       initial={{ opacity:0 }}
        animate={{ opacity: 1}}
        transition={{ duration: 1}}
        style={{ width: '100px', height: '100px', borderRadius: '50%' }}
         />
      <Title
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </Title>
      <Content
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
    I am a Master’s student in Computer Engineering at the University of Naples “Federico II” and an Erasmus student at the Karlsruhe Institute of Technology (KIT). In my free time, I work on projects involving machine learning techniques, blending my academic pursuits with my passion for innovation.

    As someone who is meticulous like an engineer and imaginative like a designer, I thrive on merging these two facets of my personality in my work and daily life. This unique combination allows me to approach problems with both precision and creativity, leading to innovative and effective solutions.

    Welcome to my website, where you can learn more about my projects, experiences, and the unique perspective I bring to the field of computer engineering and machine learning.      </Content>
    </AboutSection>
  );
};

export default About;