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
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const initialState = {
    characterLength: 0, options: [], strengthLevel: '', generatedPassword: '',
}

export default App
