import {createGlobalStyle} from 'styled-components';

const Globals = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    font-size: 100%;
    color: #222;
    background: #fff;
    font-family: 'Lato', sans-serif;
    font-family: 'Courgette', sans-serif;
}

h1 {
    font-size: 48px; line-height: 1.2; margin-bottom: 8px;
}

h2 {
    font-size: 32px; margin-bottom: 12px;
}

h3 {
    font-size: 24px; line-height: 1; margin-bottom: 16px;
}

h4 {
    font-size: 19px; line-height: 1.2; margin-bottom: 20px;
    font-weight: bold;
}

h5 {
    font-size: 16px; margin-bottom: 24px;
    font-weight: bold;
}

h6 {
    font-size: 16px; 
    font-weight: bold;
}

p {
    line-height: 1.5; margin: 0 0 1.5 0;
}
`;

export default Globals;