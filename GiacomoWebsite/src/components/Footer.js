import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LinkedinSVG } from '../assets/graphics/linkedin.svg';
import { ReactComponent as GithubSVG } from '../assets/graphics/github.svg';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
    background: #FFFFFA;
    color: #121212;
    bottom: 0;
    max-width: 100%;
    height: 8%;
    margin-left: 2rem;
    margin-right: 2rem;
    overflow-x: hidden;
    align-items: center;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const BottomRow = styled.div`
  display: flex;
  font-size: 1.5rem;
  gap: 9rem;
  justify-content: space-between;
`;

const FooterItem = styled.div`
  display: inline;
  font-size: 1.5rem;
  font-weight: 400;

    @media (max-width: 768px) { 
        font-size: 0.9rem;
    }
`;

const LinkedinLogo =  styled(motion.a)`
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media (max-width: 768px) { 
        svg {
        width: 2rem;
        height: 2rem;
    }
    }
`;

const GithubLogo = styled(motion.a)`
    svg {
        width: 2.5rem;
        height: 2.5rem;
    }     
        
    @media (max-width: 768px) { 
        svg {
        width: 2rem;
        height: 2rem;
    }
    }
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    align-items: center;
    margin: 0 auto;
    gap: 5rem;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`;

const DownloadButton = styled(motion.a)`
  font-size: 1.5rem;
  color: #121212;
  background: #FFFFFA;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: regular;
`;

const EmailButton = styled(motion.a)`
  font-size: 1.5rem;
  color: #121212;
  background: #FFFFFA;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  text-decoration: none;
  font-family: 'Source+Code+Pro', Source Code Pro;
  font-weight: regular;
`;

const Footer = () => {
  return (
    <FooterContainer>
        <TopRow>
            <ButtonContainer id="button-section">
                <DownloadButton
                    href="/assets/Documents/GiacomoLisitaCV.pdf"
                    download="GiacomoLisitaCV.pdf"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    Download Resume;
                </DownloadButton>
                <EmailButton
                    href="mailto:giacomolisita01@gmail.com"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    >
                    Email me;
                </EmailButton>
            </ButtonContainer>
        </TopRow>
        <BottomRow>
            <FooterItem>
                <p>&copy; 2024 Giacomo Lisita</p>
            </FooterItem>
            <LogoContainer>
                <LinkedinLogo
                    href="https://it.linkedin.com/in/giacomolisita"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <LinkedinSVG />
                </LinkedinLogo>
                <GithubLogo 
                    href = "https://github.com/giacolees"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <GithubSVG />
                </GithubLogo>
            </LogoContainer>
        </BottomRow>
    </FooterContainer>
  );
};

export default Footer;



