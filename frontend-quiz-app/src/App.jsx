import GlobalStyles from "./styles/GlobalStyles.js";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

const Main = styled.main`
    display: flex;
    justify-content: center;
    min-height: 100vh;
    background-color: ${(props) => props.theme === 'dark-theme' ? '#313E51' : '#F4F6FA'};
    background-image: url(${(props) => props.theme === 'dark-theme' ? "/images/pattern-background-desktop-dark.svg" : "/images/pattern-background-desktop-light.svg"});
    background-repeat: no-repeat;
    //background-position: bottom;
    padding-inline: var(--spacing-200);


    @media only screen and (max-width: 31.25em) {
        padding-inline: var(--spacing-300);
    }
`

const Container = styled.div`
    max-width: 115.7rem;
    width: 100%;
`

const Header = styled.header`
    display: flex;
    padding-top: 9.3rem;
    padding-bottom: 10.3rem;
    align-items: center;
    
    @media only screen and (max-width: 63.5em) {
        padding-top: var(--spacing-400);
        padding-bottom: var(--spacing-400);
    }


    @media only screen and (max-width: 31.25em) {
        padding-top: var(--spacing-200);
        padding-bottom: var(--spacing-200);
    }
`

const ToggleTheme = styled.div`
    display: flex;
    gap: var(--spacing-200);
    margin-left: auto;

    @media only screen and (max-width: 31.25em) {
        gap: var(--spacing-100);
    }
`

const SunIcon = styled.span`
    background-image: url(${(props) => props.theme === 'dark-theme' ? "/images/icon-sun-light.svg" : "/images/icon-sun-dark.svg"});
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
    background-image: url(${(props) => props.theme === 'dark-theme' ? "/images/icon-moon-light.svg" : "/images/icon-moon-dark.svg"});
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
    
    @media only screen and (max-width: 63.5em) {
        grid-template-columns: 1fr;
        row-gap: var(--spacing-800);
    }

    @media only screen and (max-width: 31.25em) {
        padding-top: var(--spacing-400);
        row-gap: var(--spacing-500);
    }
`

const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-600);
    
    @media only screen and (max-width: 63.5em) {
        gap: var(--spacing-200);
    }
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
        
        @media only screen and (max-width: 31.25em) {
            font-size: 4rem;
        }
    }
    h1 {
        font-family: "Rubik", sans-serif;
        font-size: 6.4rem;
        line-height: 100%;
        letter-spacing: 0;
        font-weight: 500;
        color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});

        @media only screen and (max-width: 31.25em) {
            font-size: 4rem;
        }
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

    @media only screen and (max-width: 31.25em) {
        font-size: 1.4rem;
    }
`

const SubjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
    
    @media only screen and (max-width: 63.5em) {
        gap: var(--spacing-300);
    }

    @media only screen and (max-width: 31.25em) {
        gap: var(--spacing-200);
    }
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

    @media only screen and (max-width: 31.25em) {
        font-size: 1.8rem;
        gap: var(--spacing-200);
    }
`

const SubjectIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.6rem;
    height: 5.6rem;
    background-color: ${props => props.color};
    border-radius: 0.8rem;

    @media only screen and (max-width: 31.25em) {
        height: 4rem;
        width: 4rem;
    }
    
    img {
        @media only screen and (max-width: 31.25em) {
        width: 2.8rem;
        height: 2.8rem;
        }
    }
`

const SubjectTitleContainer = styled.div`
    display: flex;
    gap: var(--spacing-300);
    align-items: center;

    @media only screen and (max-width: 31.25em) {
        gap: var(--spacing-200);
    }
`

const SubjectTitle = styled.span`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;


    @media only screen and (max-width: 31.25em) {
       font-size: 1.8rem;
    }
`

const QuestionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2300);
    
    @media only screen and (max-width: 63.5em) {
        gap: var(--spacing-500);
    }
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
    
    @media only screen and (max-width: 31.25em) {
        font-size: 1.4rem;
    }
`

const Question = styled.p`
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-family: "Rubik", sans-serif;
    font-style: normal;
    font-size: 3.6rem;
    line-height: 120%;
    letter-spacing: 0;
    font-weight: 500;


    @media only screen and (max-width: 31.25em) {
        font-size: 2rem;
    }
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

    &[data-option='1'] button:nth-child(1) {
        border: 3px solid var(--purple-600) !important;
    }
        
    &[data-option='1'] button:nth-child(1) span:nth-child(1) {
        background-color: var(--purple-600) !important;
        color: var(--white) !important;
    }

    &[data-option='2'] button:nth-child(2) {
        border: 3px solid var(--purple-600) !important;
    }

    &[data-option='2'] button:nth-child(2) span:nth-child(1) {
        background-color: var(--purple-600) !important;
        color: var(--white) !important;
    }

    &[data-option='3'] button:nth-child(3) {
        border: 3px solid var(--purple-600) !important;
    }

    &[data-option='3'] button:nth-child(3) span:nth-child(1) {
        background-color: var(--purple-600) !important;
        color: var(--white) !important;
    }

    &[data-option='4'] button:nth-child(4) {
        border: 3px solid var(--purple-600) !important;
    }

    &[data-option='4'] button:nth-child(4) span:nth-child(1) {
        background-color: var(--purple-600) !important;
        color: var(--white) !important;
    }
`

const Option = styled.button`
    display: flex;
    gap: var(--spacing-400);
    align-items: center;
    text-align: left;
    padding: var(--spacing-300);
    border-radius: 2.4rem;
    background-color: var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'});
    box-shadow: ${props => props.theme === 'light-theme' ? '0 16px 40px rgba(143, 160, 193, 0.14)' : '0 16px 40px rgba(49, 62, 81, 0.14)'};
    
    font-family: "Rubik", sans-serif;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 2.8rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;
    border: 3px solid var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'}) !important;


    @media only screen and (max-width: 31.25em) {
        gap: var(--spacing-200);
        font-size: 1.8rem;
    }
    
    span:nth-child(1) {
        display: flex;
        flex-shrink: 0;
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


        @media only screen and (max-width: 31.25em) {
            width: 4rem;
            height: 4rem;
        }
    }
    
    span:nth-child(2) {
        visibility: hidden;
        margin-left: auto;
    }
    
    span:nth-child(3) {
        display: none;
        margin-left: auto;
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
    
    &:active {
       background: var(--purple-600);
    }
    
    @media only screen and (max-width: 31.25em) {
        padding: var(--spacing-200);
        font-size: 1.8rem;
        border-radius: 1.2rem;
    }
`

const NextButton = styled(SubmitButton)`
    background-color: var(--purple-600);
`

const Error = styled.p`
    display: flex;
    gap: var(--spacing-100);
    align-items: center;
    justify-content: center;
    
    font-family: "Rubik", sans-serif;
    color: var(${props => props.theme === 'light-theme' ? '--red-500' : '--grey-50'});
    font-style: normal;
    font-size: 2.4rem;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 400;
`

const Result = styled.div`
    display: grid;
    grid-template-columns: minmax(20rem, 45rem) 1fr;
    column-gap: var(--spacing-1800);
    padding-bottom: var(--spacing-800);
    
    @media only screen and (max-width: 63.5em) {
        grid-template-columns: 1fr;
        row-gap: var(--spacing-800);
    }

    @media only screen and (max-width: 31.25em) {
        padding-top: var(--spacing-400);
        row-gap: var(--spacing-500);
    }
`

const ScoreText = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-100);
    
    span:nth-child(1) {
        font-family: "Rubik", sans-serif;
        font-style: normal;
        color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
        font-size: 6.4rem;
        line-height: 100%;
        letter-spacing: 0;
        font-weight: 300;

        @media only screen and (max-width: 31.25em) {
            font-size: 4rem;
        }
        
    }

    span:nth-child(2) {
        font-family: "Rubik", sans-serif;
        font-style: normal;
        color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
        font-size: 6.4rem;
        line-height: 100%;
        letter-spacing: 0;
        font-weight: 500;
        
        @media only screen and (max-width: 31.25em) {
            font-size: 4rem;
        }
    }
`

const ScoreContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-400);

    @media only screen and (max-width: 31.25em) {
        gap: var(--spacing-200);
    }
`

const ResultCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--spacing-500);
    padding: var(--spacing-600);
    border-radius: 2.4rem;
    box-shadow: ${props => props.theme === 'light-theme' ? '0 16px 40px rgba(143, 160, 193, 0.14)' : '0 16px 40px rgba(49, 62, 81, 0.14)'};
    background-color: var(${props => props.theme === 'light-theme' ? '--white' : '--blue-850'});

    @media only screen and (max-width: 31.25em) {
        padding: var(--spacing-400);
        gap: var(--spacing-200);
    }
`

const ScoreDetails = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing-200);
    align-items: center;
`

const ScoreNumber = styled.span`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(${props => props.theme === 'light-theme' ? '--blue-900' : '--white'});
    font-size: 14.4rem;
    line-height: 100%;
    letter-spacing: 0;
    font-weight: 500;

    @media only screen and (max-width: 31.25em) {
        font-size: 8.8rem;
    }
`

const ScoreDescription = styled.p`
    font-family: "Rubik", sans-serif;
    font-style: normal;
    color: var(${props => props.theme === 'light-theme' ? '--grey-500' : '--blue-300'});
    font-size: 2.4rem;
    line-height: 150%;
    letter-spacing: 0;
    font-weight: 500;

    @media only screen and (max-width: 31.25em) {
        font-size: 1.8rem;
    }
`

const PlayButton = styled(NextButton)`
    background: var(--purple-600);
`

function App() {
    const [theme, setTheme] = useState('dark-theme');
    const [subject, setSubject] = useState('');
    const [subjectIconColor, setSubjectIconColor] = useState('');
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionText, setQuestionText] = useState('');
    const [options, setOptions] = useState([]);
    const optionRef = useRef('');
    const [userAnswer, setUserAnswer] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [isError, setIsError] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [totalQuestions, setTotalQuestions] = useState(null);

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

    function handleOptionClick(value, option) {
        optionRef.current.dataset.option = value;
        setUserAnswer(option)
    }

    async function handleSubmit() {
        if (userAnswer === '') {
            setIsError(true);
            return;
        }
        if (userAnswer !== '') {
            setIsSubmitted(true);

            // optionRef.current.dataset.option = '';
            setIsError(false)
            const correctAnswer = await fetchCorrectAnswer();
            setCorrectAnswer(correctAnswer);
            if (userAnswer === correctAnswer) {
                setScore(s => s + 1);
                const copyOptions = Array.from(optionRef.current.children);
                copyOptions.forEach((option) => {
                    option.disabled = true;
                    const optionText = option.textContent.slice(1, );
                    const copySpan = Array.from(option.children);
                    if (optionText === userAnswer) {
                        option.style.borderColor = 'var(--green-500) !important';
                        copySpan[0].style.backgroundColor = 'var(--green-500) !important';
                        copySpan[1].style.visibility = 'visible';
                    }
                })
            }
            if (userAnswer !== correctAnswer) {
                const copyOptions = Array.from(optionRef.current.children);
                copyOptions.forEach((option) => {
                    option.disabled = true;
                    const optionText = option.textContent.slice(1, );
                    const copySpan = Array.from(option.children);
                    if (optionText === userAnswer) {
                        option.style.borderColor = 'var(--red-500) !important';
                        copySpan[0].style.backgroundColor = 'var(--red-500) !important';
                        copySpan[2].style.display = 'block';
                    }
                    if (optionText === correctAnswer) {
                        copySpan[1].style.visibility = 'visible';
                    }
                })
            }
        }
    }

    function handleNext() {
        optionRef.current.dataset.option = '';
        setUserAnswer('')
        const copyOptions = Array.from(optionRef.current.children);
        copyOptions.forEach((option) => {
            option.disabled = false;
            option.style.borderColor = theme === 'light-theme' ? 'var(--white)' : 'var(--blue-850)';
            const copySpan = Array.from(option.children);
            copySpan[0].style.backgroundColor = 'var(--grey-50)';
            copySpan[0].style.color = 'var(--grey-500)';
            copySpan[1].style.visibility = 'hidden';
            copySpan[2].style.display = 'none';
        })
        setIsSubmitted(false);
        setCurrentQuestion(cq => cq + 1);
    }

    useEffect(() => {
        async function fetchQuestions() {
            const res = await fetch('./data.json');
            const data = await res.json();
            const question = data.quizzes.filter(t => t.title.toLowerCase() === subject.toLowerCase());
            setQuestionText(question[0]?.questions[currentQuestion].question);
            setOptions(question[0]?.questions[currentQuestion].options);
            setTotalQuestions(question[0]?.questions.length);
        }
        fetchQuestions();
    }, [subject, currentQuestion]);

    async function fetchCorrectAnswer() {
        const res = await fetch('./data.json');
        const data = await res.json();
        const question = data.quizzes.filter(t => t.title.toLowerCase() === subject.toLowerCase());
        return question[0]?.questions[currentQuestion].answer
    }

    function handlePlayAgainClick() {
        window.location.reload();
    }

    return (<>
            <GlobalStyles />
            <Main theme={theme}>
                <Container>
                    <Header>
                        {subject !== '' && <SubjectTitleContainer><SubjectIcon color={subjectIconColor}><img src={subject === 'Javascript' ? `/images/icon-js.svg` : `/images/icon-${subject.toLowerCase()}.svg`} alt={`${subject} icon`}/></SubjectIcon><SubjectTitle theme={theme}>{subject}</SubjectTitle></SubjectTitleContainer>}
                        <ToggleTheme>
                            <SunIcon theme={theme}></SunIcon>
                            <ToggleThemeButton theme={theme} onClick={handleToggleTheme}></ToggleThemeButton>
                            <MoonIcon theme={theme}></MoonIcon>
                        </ToggleTheme>
                    </Header>
                    {currentQuestion !== totalQuestions && <StartMenu>
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
                                <SubjectIcon color={'var(--orange-50)'}><img src="/images/icon-html.svg"
                                                                             alt="html icon"/></SubjectIcon>
                                HTML
                            </Subject>
                            <Subject theme={theme}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--green-100)'}><img src="/images/icon-css.svg"
                                                                             alt="css icon"/></SubjectIcon>
                                CSS
                            </Subject>
                            <Subject theme={theme} color={'var(--blue-50)'}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--blue-50)'}><img src="/images/icon-js.svg"
                                                                           alt="js icon"/></SubjectIcon>
                                Javascript
                            </Subject>
                            <Subject theme={theme}
                                     onClick={(e) => handleSubjectClick(e.target.textContent)}>
                                <SubjectIcon color={'var(--purple-100)'}><img
                                    src="/images/icon-accessibility.svg"
                                    alt="accessibility icon"/></SubjectIcon>
                                Accessibility
                            </Subject>
                        </SubjectList>}
                        {subject !== '' && <QuestionContainer>
                            <QuestionText>
                                <QuestionNumber
                                    theme={theme}>Question <span>{currentQuestion + 1}</span> of {totalQuestions}
                                </QuestionNumber>
                                <Question theme={theme}>
                                    {questionText}
                                </Question>
                            </QuestionText>
                            <ProgressBar theme={theme} max={10} value={currentQuestion + 1}></ProgressBar>
                        </QuestionContainer>}
                        {subject !== '' && <OptionsContainer>
                            <Options ref={optionRef} data-option={''}>
                                <Option theme={theme}
                                        onClick={() => handleOptionClick('1', options[0])}><span>A</span>{options && options[0]}<span><img
                                    src="/images/icon-correct.svg" alt=""/></span><span><img
                                    src="/images/icon-error.svg" alt=""/></span></Option>
                                <Option theme={theme}
                                        onClick={() => handleOptionClick('2', options[1])}><span>B</span>{options && options[1]}<span><img
                                    src="/images/icon-correct.svg" alt=""/></span><span><img
                                    src="/images/icon-error.svg" alt=""/></span></Option>
                                <Option theme={theme}
                                        onClick={() => handleOptionClick('3', options[2])}><span>C</span>{options && options[2]}<span><img
                                    src="/images/icon-correct.svg" alt=""/></span><span><img
                                    src="/images/icon-error.svg" alt=""/></span></Option>
                                <Option theme={theme}
                                        onClick={() => handleOptionClick('4', options[3])}><span>D</span>{options && options[3]}<span><img
                                    src="/images/icon-correct.svg" alt=""/></span><span><img
                                    src="/images/icon-error.svg" alt=""/></span></Option>
                            </Options>
                            {!isSubmitted && <SubmitButton onClick={handleSubmit}>Submit answer</SubmitButton>}
                            {isSubmitted && <NextButton onClick={handleNext}>{currentQuestion === totalQuestions - 1 ? 'See Result' : 'Next Question'}</NextButton>}
                            {isError && <Error theme={theme}><img src="/images/icon-error.svg"
                                                                  alt="error icon"/> Please select an
                                answer</Error>}
                        </OptionsContainer>}
                    </StartMenu>}
                    {currentQuestion === totalQuestions && <Result>
                        <ScoreText theme={theme}>
                            <span>Quiz completed</span>
                            <span>You scored...</span>
                        </ScoreText>
                        <ScoreContent>
                            <ResultCard theme={theme}>
                                <SubjectTitleContainer><SubjectIcon color={subjectIconColor}><img src={subject === 'Javascript' ? `/images/icon-js.svg` : `/images/icon-${subject.toLowerCase()}.svg`} alt={`${subject} icon`}/></SubjectIcon><SubjectTitle theme={theme}>{subject}</SubjectTitle></SubjectTitleContainer>
                                <ScoreDetails>
                                    <ScoreNumber theme={theme}>{score}</ScoreNumber>
                                    <ScoreDescription theme={theme}>out of {totalQuestions}</ScoreDescription>
                                </ScoreDetails>
                            </ResultCard>
                            <PlayButton onClick={handlePlayAgainClick}>Play again</PlayButton>
                        </ScoreContent>
                    </Result>}
                </Container>
            </Main>
        </>)
}

export default App
