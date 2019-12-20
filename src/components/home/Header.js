import React from 'react';
import Hero from '../globals/Hero';
import aboutImg from '../../images/aboutImg.jpeg';
import homeImg from '../../images/homeImg.jpeg';

const Header = () => {
    return ( 
    <Hero img={homeImg}>
        <h1>Hello World</h1>
    </Hero>
    );
};

export default Header;