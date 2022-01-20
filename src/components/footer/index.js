import React from 'react'
import { Container, Row } from '../utilities/grid'
import { FooterContainer, FooterSocial, FooterCredits } from './style'
import Logo from '../../assets/images/amc-logo.png'
import { BsInstagram, BsGithub, BsLinkedin, BsTwitch } from "react-icons/bs";
// 292C6D

export function Footer() {
    return (
        <>
        <Container bg={'#1F1D36'}>
            <Row width="80%">
                <FooterContainer> 
                    <div className='footer-content__logo'>
                        <div className='footer-content__logo-image'>
                            <img src={Logo} alt='logo' />
                        </div>
                        <FooterSocial>
                            <BsLinkedin />
                            <BsGithub />    
                            <BsInstagram />
                            <BsTwitch />
                        </FooterSocial>
                    </div>
                    <div className='footer-content__navigation'>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                            <li>Careers</li>
                        </ul>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                            <li>Careers</li>
                        </ul>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='footer-content__newsletter'>
                        <h3 className='subscribe'>Subscribe Now</h3>
                        <div className='input-text'>
                            <input type="text" placeholder='Your email'/>
                        </div>
                        <button className='btn-subscribe'>Subscribe</button>
                       
                    </div>
                </FooterContainer>
            </Row>
        </Container>
        <FooterCredits>
            <Row width="80%">
                <div className='footer-credits__wrap'>
                    <div className='footer-credits__info'>
                        <p>Developer Wesley Ferreira</p>
                        <p>Terms and Conditions | Privacy Policy</p>
                    </div>
                
                </div>
            </Row>
        </FooterCredits>
        </>
    )
}


// #605d85





