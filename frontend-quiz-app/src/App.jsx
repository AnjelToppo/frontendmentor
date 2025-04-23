import GlobalStyles from "./styles/GlobalStyles.js";
import styled from "styled-components";
import {useState} from "react";

const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme === 'dark-theme' ? '#313E51' : '#F4F6FA'};
    background-image: url(${(props) => props.theme === 'dark-theme' ? "../src/assets/images/pattern-background-desktop-dark.svg" : "../src/assets/images/pattern-background-desktop-light.svg"});
    background-repeat: no-repeat;
    //background-position: bottom;
`

const Container = styled.div`
    max-width: 115.7rem;
    width: 100%;
`

const Header = styled.header`
    display: flex;
    padding-top: 9.3rem;
    padding-bottom: 10.3rem;
`

const ToggleTheme = styled.div`
    display: flex;
    gap: var(--spacing-200);
    margin-left: auto;
`

const SunIcon = styled.span`
    background-image: url(${(props) => props.theme === 'dark-theme' ? "../src/assets/images/icon-sun-light.svg" : "../src/assets/images/icon-sun-dark.svg"});
    background-repeat: no-repeat;
    background-position: center;
    width: 2.4rem;
    height: 2.4rem;
`

const ToggleThemeButton = styled.button`
    width: 4.8rem;
    height: 2.8rem;
    padding: 0.4rem;
    background-color: var(--purple-600);
    border: none;
    border-radius: 999px;
    
    &:before {
        content: '';
        display: block;
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        background-color: var(--white);
        transform: translateX(${props => props.theme === 'light-theme' ? '0' : '2rem'});
    }
`

const MoonIcon = styled.span`
    background-image: url(${(props) => props.theme === 'dark-theme' ? "../src/assets/images/icon-moon-light.svg" : "../src/assets/images/icon-moon-dark.svg"});
    background-repeat: no-repeat;
    background-position: center;
    width: 2.4rem;
    height: 2.4rem;
`

const StartMenu = styled.div`
    display: grid;
    grid-template-columns: minmax(20rem, 46.5rem) 1fr;
    column-gap: var(--spacing-1600);
`

const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-600);
`

const WelcomeText = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-100);
    span {
        font-family: "Rubik", sans-serif;
        color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
        line-height: 100%;
        letter-spacing: 0;
        font-size: 6.4rem;
        font-weight: 300;
    }
    h1 {
        font-family: "Rubik", sans-serif;
        font-size: 6.4rem;
        line-height: 100%;
        letter-spacing: 0;
        font-weight: 500;
        color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    }
    
`

const InstructionText = styled.p`
    font-family: "Rubik", sans-serif;
    color: var(${props => props.theme === 'light-theme' ? '--grey-500' : '--blue-300'});
    font-style: italic;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 400;
`

const SubjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
`

const Subject = styled.button`
    display: flex;
    align-items: center;
    padding: var(--spacing-300);
    gap: var(--spacing-400);
    border: none;
    background-color: var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'});
    border-radius: 2.4rem;
    box-shadow: ${props => props.theme === 'light-theme' ? '0 16px 40px rgba(143, 160, 193, 0.14)' : '0px 16px 40px rgba(49, 62, 81, 0.14)'};
            
    
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 5.6rem;
        height: 5.6rem;
        background-color: ${props => props.color};
        border-radius: 0.8rem;
    }
`

function App() {
    const [theme, setTheme] = useState('light-theme');

    function handleToggleTheme() {
        setTheme(pt => pt === 'light-theme' ? 'dark-theme' : 'light-theme');
    }
    return (<>
            <GlobalStyles />
            <Main theme={theme}>
                <Container>
                    <Header>
                        <ToggleTheme>
                            <SunIcon theme={theme}></SunIcon>
                            <ToggleThemeButton theme={theme} onClick={handleToggleTheme}></ToggleThemeButton>
                            <MoonIcon theme={theme}></MoonIcon>
                        </ToggleTheme>
                    </Header>
                    <StartMenu>
                        <Welcome>
                            <WelcomeText theme={theme}>
                                <span>Welcome to the</span>
                                <h1>Frontend Quiz!</h1>
                            </WelcomeText>
                            <InstructionText theme={theme}>Pick a subject to get started.</InstructionText>
                        </Welcome>
                        <SubjectList>
                            <Subject theme={theme} color={'var(--orange-50)'}>
                                <span><img src="../src/assets/images/icon-html.svg" alt="html icon"/></span>
                                HTML
                            </Subject>
                            <Subject theme={theme} color={'var(--green-100)'}>
                                <span><img src="../src/assets/images/icon-css.svg" alt="css icon"/></span>
                                CSS
                            </Subject>
                            <Subject theme={theme} color={'var(--blue-50)'}>
                                <span><img src="../src/assets/images/icon-js.svg" alt="js icon"/></span>
                                Javascript
                            </Subject>
                            <Subject theme={theme} color={'var(--purple-100)'}>
                                <span><img src="../src/assets/images/icon-accessibility.svg" alt="accessibility icon"/></span>
                                Accessibility
                            </Subject>
                        </SubjectList>
                    </StartMenu>
                </Container>
                {/*/!*Quiz menu start*!/*/}

                {/*/!*Quiz menu end*!/*/}

                {/*/!*Quiz question start*!/*/}

                {/*Question /!*number*!/ of 10*/}

                {/*A*/}
                {/*B*/}
                {/*C*/}
                {/*D*/}

                {/*Submit answer*/}

                {/*/!*Quiz question end*!/*/}

                {/*/!*Quiz completed start*!/*/}

                {/*Quiz completed*/}
                {/*You scored...*/}

                {/*/!*score*!/ out of 10*/}

                {/*/!*Quiz completed end*!/*/}
            </Main>
        </>)
}

export default App
