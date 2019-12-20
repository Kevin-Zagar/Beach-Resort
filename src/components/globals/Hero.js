import styled from 'styled-components';
import {setFlex, setBackground} from '../../styles';

const Hero = styled.header `
    /* 100% hight of the screen */ 
    min-height: 100vh; 
    ${props => setBackground({img: props.img, color:("rgba(0,0,0,0.2)")})}
    ${setBackground()}
    ${setFlex({x: "center", y: "center"})}
`;

export default Hero;
