import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --white: #FFF;
        --black: #000;
        --grey-500: #626C7F;
        --grey-50: #F4F6FA;
        --blue-950: #2D3949;
        --blue-900: #313E51;
        --blue-850: #3B4D66;
        --blue-500: #306AFF;
        --blue-300: #ABC1E1;
        --blue-100: #EDF1F9;
        --blue-50: #EBF0FF;
        --green-500: #2FD887;
        --green-100: #E0FDEF;
        --purple-600: #A729F5;
        --purple-100: #F6E7FF;
        --orange-400: #FF7E35;
        --orange-50: #FFF5ED;
        --red-500: #EE5454;
        
        --spacing-100: 0.8rem;
        --spacing-200: 1.6rem;
        --spacing-300: 2.4rem;
        --spacing-400: 3.2rem;
        --spacing-500: 4rem;
        --spacing-600: 4.8rem;
        --spacing-800: 6.4rem;
        --spacing-1600: 12.8rem;
        --spacing-1800: 14.4rem;
        --spacing-2300: 18.4rem;
    }
    
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    *:focus {
        outline-color: var(--purple-600);
        outline-offset: 4px;
    }
    
    html {
        font-size: 62.5%;
    }
    
    button {
        cursor: pointer;
    }
`;
export default GlobalStyles;
