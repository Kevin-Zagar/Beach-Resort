import styled from 'styled-components'
import homeImg from '../../images/home-img.jpeg' 

const Hero = styled.header`
    /* 100% hight of the screen */ 
    min-height: 100vh; 
    background: url(${homeImg});
`;

export default Hero;
