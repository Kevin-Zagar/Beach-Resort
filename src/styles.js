// Importing default imgs
import defaultImg from './images/defaultImg.jpeg';

// Colors
export const setColor = {
    primaryColor: "#af9a7d",
    mainWhite: "#fff",
    mainBlack: "#222",
    mainGray: "#ececec",
    lightGray: "#f7f7f7"
};

// Fonts 
export const setFont = {
    main: "font-family: 'Lato', sans-serif;",
    slanted: "font-family: 'Courgette', sans-serif;"
};

// FlexBox
export const setFlex = ({
    x = "center",
    y = "center"
} = {}) => {
    return `
            display: flex; 
            align-items:${y}; 
            justify-content:${x}
            `
};

// Background
export const setBackground = ({
    img = {defaultImg},
    color = "rgba(0,0,0,0)"
} = {}) => {
    return `
             background: linear-gradient(${color}, ${color}), 
               url(${img}) center/cover fixed no-repeat;
    `
};