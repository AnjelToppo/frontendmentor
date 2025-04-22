import PasswordDisplay from "./components/PasswordDisplay.jsx";
import {useReducer} from "react";
import {PasswordContext, PasswordDispatchContext} from "./context/PasswordContext.jsx";

function App() {
    const [state, dispatch] = useReducer(passwordReducer, initialState);

    return (<PasswordContext.Provider value={state}>
        <PasswordDispatchContext.Provider value={dispatch}>
            <PasswordDisplay/>
        </PasswordDispatchContext.Provider>
    </PasswordContext.Provider>)
}

function passwordReducer(state, action) {
    switch (action.type) {
        case "SET_CHARACTER-LENGTH":
            return {
                ...state, characterLength: action.payload
            }
        case "SET_OPTIONS":
            if (!state.options.includes(action.payload)) return {
                ...state, options: [...state.options, action.payload],
            }
            if (state.options.includes(action.payload)) return {
                ...state, options: state.options.filter(option => option !== action.payload)
            }
            return {...state, options: []}
        case "SET_LEVEL":
            if (state.characterLength > 15) {
                if (!state.options.length) {
                    return {
                        ...state, strengthLevel: ''
                    }
                } else if (state.options.length < 2) {
                    return {
                        ...state, strengthLevel: 'too-weak'
                    }
                } else if (state.options.length < 3) {
                    return {
                        ...state, strengthLevel: 'weak'
                    }
                } else if (state.options.length < 4) {
                    return {
                        ...state, strengthLevel: 'medium'
                    }
                } else if (state.options.length < 5) {
                    return {
                        ...state, strengthLevel: 'strong'
                    }
                }
            } else if (state.characterLength > 10) {
                if (!state.options.length) {
                    return {
                        ...state, strengthLevel: ''
                    }
                } else if (state.options.length < 3) {
                    return {
                        ...state, strengthLevel: 'too-weak'
                    }
                } else if (state.options.length < 4) {
                    return {
                        ...state, strengthLevel: 'weak'
                    }
                } else if (state.options.length < 5) {
                    return {
                        ...state, strengthLevel: 'medium'
                    }
                }
            } else if (state.characterLength > 5) {
                if (!state.options.length) {
                    return {
                        ...state, strengthLevel: ''
                    }
                } else if (state.options.length < 3) {
                    return {
                        ...state, strengthLevel: 'too-weak'
                    }
                } else if (state.options.length < 5) {
                    return {
                        ...state, strengthLevel: 'weak'
                    }
                }
            } else if (state.characterLength > 0) {
                if (!state.options.length) {
                    return {
                        ...state, strengthLevel: ''
                    }
                } else if (state.options.length < 4) {
                    return {
                        ...state, strengthLevel: 'too-weak'
                    }
                } else if (state.options.length < 5) {
                    return {
                        ...state, strengthLevel: 'weak'
                    }
                }
            }
            return {...state, strengthLevel: ''}
        case "SET_GENERATE_PASSWORD": {
            const passwordLength = state.characterLength;
            const options = state.options;
            let password = '';
            for (let i = 0; i < passwordLength; i++) {
                const randInt = Math.floor(Math.random() * options.length) + 1;
                const arr = options[randInt -1]
                const randomIndex = Math.floor(Math.random() * arr.length);
                password += passwordString[arr][randomIndex]
            }
            return {...state, generatedPassword: password}
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialState = {
    characterLength: 0, options: [], strengthLevel: '', generatedPassword: '',
}

const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const passwordString = {
    'lowercase-letters': lowercaseLetters,
    'uppercase-letters': lowercaseLetters.map(letter => letter.toUpperCase()),
    'numbers': ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    'symbols': ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '~', '|', ':', ';', '"', '<', '>', '/', '?']
}
export default App
