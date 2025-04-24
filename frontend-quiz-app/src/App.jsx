import GlobalStyles from "./styles/GlobalStyles.js";
import styled from "styled-components";
import {useEffect, useState} from "react";

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
    padding-bottom: var(--spacing-800);
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
`

const SubjectIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.6rem;
    height: 5.6rem;
    background-color: ${props => props.color};
    border-radius: 0.8rem;
`

const SubjectTitleContainer = styled.div`
    display: flex;
    gap: var(--spacing-300);
    align-items: center;
`

const SubjectTitle = styled.span`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;
`

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2300);
`

const QuestionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-300);
`

const QuestionNumber = styled.p`
    color: var(${props => props.theme === 'light-theme' ? '--grey-500' : '--blue-300'});
    font-family: "Rubik", sans-serif;
    font-style: italic;
    font-size: 2rem;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 400;
`

const Question = styled.p`
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 3.6rem;
    line-height: 120%;
    letter-spacing: 0;
    font-weight: 500;
`

const ProgressBar = styled.progress`
    width: 100%;
    height: 1.6rem;
    border-radius: 999px;
    overflow: hidden;
    
    &::-webkit-progress-bar {
        box-sizing: border-box;
        background-color: var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'});
        border-radius: 999px;
        overflow: hidden;
        display: flex;
        align-items: center;
    }
    
    &::-webkit-progress-value {
        background-color: var(--purple-600);
        border-radius: 10.4rem;
        height: 0.8rem !important;
        padding-left: 4px;
        transform: translateX(4px);
        max-width: 45.7rem !important;
    }
`

const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);
`

const Options = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
`

const Option = styled.button`
    display: flex;
    gap: var(--spacing-400);
    align-items: center;
    text-align: left;
    padding: var(--spacing-300);
    border-radius: 2.4rem;
    background-color: var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'});
    border: none;
    box-shadow: ${props => props.theme === 'light-theme' ? '0 16px 40px rgba(143, 160, 193, 0.14)' : '0 16px 40px rgba(49, 62, 81, 0.14)'};
    
    font-family: "Rubik", sans-serif;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;
    
    span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 5.6rem;
        width: 5.6rem;
        background-color: var(--grey-50);
        border-radius: 0.8rem;
        
        font-family: "Rubik", sans-serif;
        color: var(--grey-500);
        font-weight: 2.8rem;
        line-height: 100%;
        letter-spacing: 0;
        font-weight: 500;
    }

`

const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--spacing-400);
    border-radius: 2.4rem;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), #A729F5;
    box-shadow: 0 16px 40px rgba(143, 160, 193, 0.14);
    border: none;

    font-family: "Rubik", sans-serif;
    color: var(--white);
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;
`

function App() {
    const [theme, setTheme] = useState('light-theme');
    const [subject, setSubject] = useState('');
    const [subjectIconColor, setSubjectIconColor] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);

    function handleToggleTheme() {
        setTheme(pt => pt === 'light-theme' ? 'dark-theme' : 'light-theme');
    }

    async function handleSubjectClick(value) {
        if (value === "HTML") {
            setSubject(value);
            setSubjectIconColor('var(--orange-50)');
        } else if (value === "CSS") {
            setSubject(value);
            setSubjectIconColor('var(--green-100)');
        } else if (value === "Javascript") {
            setSubject(value);
            setSubjectIconColor('var(--blue-50)')
        } else if (value === "Accessibility") {
            setSubject(value);
            setSubjectIconColor('var(--purple-100)');
        }


    }

    useEffect(() => {
        async function fetchQuestions() {
            const res = await fetch('./data.json');
            const data = await res.json();
            const question = data.quizzes.filter(t => t.title.toLowerCase() === subject.toLowerCase());
            setQuestionText(question[0]?.questions[currentQuestion].question);
            setOptions(question[0]?.questions[currentQuestion].options);
        }

        fetchQuestions();

    }, [subject, currentQuestion]);

    return (<>
            <GlobalStyles />
            <Main theme={theme}>
                <Container>
                    <Header>
                        {subject !== '' && <SubjectTitleContainer><SubjectIcon color={subjectIconColor}><img src={subject === 'Javascript' ? `../src/assets/images/icon-js.svg` : `../src/assets/images/icon-${subject}.svg`} alt={`${subject} icon`}/></SubjectIcon><SubjectTitle theme={theme}>{subject}</SubjectTitle></SubjectTitleContainer>}
                        <ToggleTheme>
                            <SunIcon theme={theme}></SunIcon>
                            <ToggleThemeButton theme={theme} onClick={handleToggleTheme}></ToggleThemeButton>
                            <MoonIcon theme={theme}></MoonIcon>
                        </ToggleTheme>
                    </Header>
                    <StartMenu>
                        {subject === '' && <Welcome>
                            <WelcomeText theme={theme}>
                                <span>Welcome to the</span>
                                <h1>Frontend Quiz!</h1>
                            </WelcomeText>
                            <InstructionText theme={theme}>Pick a subject to get started.</InstructionText>
                        </Welcome>}
                        {subject === '' && <SubjectList>
                            <Subject theme={theme}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--orange-50)'}><img src="../src/assets/images/icon-html.svg" alt="html icon"/></SubjectIcon>
                                HTML
                            </Subject>
                            <Subject theme={theme}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--green-100)'}><img src="../src/assets/images/icon-css.svg" alt="css icon"/></SubjectIcon>
                                CSS
                            </Subject>
                            <Subject theme={theme} color={'var(--blue-50)'}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--blue-50)'}><img src="../src/assets/images/icon-js.svg" alt="js icon"/></SubjectIcon>
                                Javascript
                            </Subject>
                            <Subject theme={theme}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--purple-100)'}><img src="../src/assets/images/icon-accessibility.svg" alt="accessibility icon"/></SubjectIcon>
                                Accessibility
                            </Subject>
                        </SubjectList>}
                        {subject !== '' && <QuestionContainer>
                            <QuestionText>
                                <QuestionNumber theme={theme}>Question <span>{currentQuestion + 1}</span> of 10</QuestionNumber>
                                <Question theme={theme}>
                                    {questionText}
                                </Question>
                            </QuestionText>
                            <ProgressBar theme={theme} max={10} value={currentQuestion + 1}></ProgressBar>
                        </QuestionContainer>}
                        {subject !== '' && <OptionsContainer>
                            <Options>
                                <Option theme={theme}><span>A</span>{options && options[0]}</Option>
                                <Option theme={theme}><span>B</span>{options && options[1]}</Option>
                                <Option theme={theme}><span>C</span>{options && options[2]}</Option>
                                <Option theme={theme}><span>D</span>{options && options[3]}</Option>
                            </Options>
                            <SubmitButton>Submit answer</SubmitButton>
                        </OptionsContainer>}
                    </StartMenu>
                </Container>

                {/*/!*Quiz completed start*!/*/}

                {/*Quiz completed*/}
                {/*You scored...*/}

                {/*/!*score*!/ out of 10*/}

                {/*/!*Quiz completed end*!/*/}
            </Main>
        </>)
}

export default App
