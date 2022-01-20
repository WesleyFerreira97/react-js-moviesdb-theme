import React from 'react'
import { Container, Row } from '../utilities/grid'
import { FooterContainer } from './style'
// 292C6D

export function Footer() {
    return (
        <Container bg={'#1F1D36'}>
            <Row width="80%">
                <FooterContainer> 
                    <div className='footer-content__logo'>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='footer-content__navigation'>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                        <ul className='footer-menu'>
                            <li>About</li>
                            <li>Cinnemas</li>
                            <li>Events</li>
                            <li>Careers</li>
                        </ul>
                    </div>
                    <div className='footer-content__newsletter'>
                        <h3 className='subscribe'>Subscribe Now</h3>
                        <div className='input-text'>
                            <input type="text" placeholder='Your email'/>
                        </div>
                    </div>
                </FooterContainer>
            </Row>
        </Container>
    )
}
