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
  height: 80%;
  font-family: 'source-code-pro', source code pro;

`;

const Title = styled(motion.h1)`
  font-size: 1.5rem;
`;

const Content = styled(motion.p)`
  font-size: 1rem;
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
    I’m Giacomo Lisita, a passionate and driven software engineer currently honing my skills in the realms of data engineering, artificial intelligence, and machine learning. My educational journey has taken me from Naples, Italy, where I am pursuing a Master’s in Computer Engineering at Università degli Studi di Napoli ‘Federico II’, to Karlsruhe, Germany, as part of an Erasmus+ program at the Karlsruher Institute für Technologie (KIT). This international experience has been pivotal in shaping my approach to problem-solving and innovation.

    I specialize in developing cutting-edge solutions for complex problems, with a focus on fault detection in autonomous vehicle perception systems, high-performance neural networks, and embedded systems. My recent work at Forschungszentrum Informatik (FZI) has allowed me to delve deep into the field of autonomous driving, where I contributed to enhancing safety features through advanced deep learning techniques.

    In addition to my academic and research pursuits, I have a strong passion for practical, hands-on projects. Whether it’s implementing multi-class semantic segmentation models for urban driving scenes or building image processing pipelines on FPGA platforms, I thrive on the challenge of turning theoretical concepts into functional, real-world applications.

    With proficiency in a wide range of programming languages and technologies, including Python, C++, VHDL, and PyTorch, I am committed to staying at the forefront of the rapidly evolving tech landscape. I’m constantly exploring new ways to leverage data and AI to create impactful solutions.

    Feel free to explore my projects, connect with me, or reach out for collaboration. Let’s innovate together!

    </Content>
    </AboutSection>
  );
};

export default About;