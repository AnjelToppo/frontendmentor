import {useContext, useRef, useState} from "react";
import {PasswordContext, PasswordDispatchContext} from "../context/PasswordContext.jsx";

export default function CharacterLength() {
    // const [characterLength, setCharacterLength] = useState(0);
    const inputRef = useRef();
    const state = useContext(PasswordContext);
    const dispatch = useContext(PasswordDispatchContext);

    let charValue = (state.characterLength - inputRef.current?.min) / (inputRef.current?.max - inputRef.current?.min) * 100;

    function handleCharacterLengthChange(e) {
        dispatch({
            type: 'SET_CHARACTER-LENGTH',
            payload: e.target.value,
        })
        dispatch({
            type: 'SET_LEVEL'
        })
        dispatch({
            type: 'RESET_PASSWORD',
        })
    }

    return (
        <div className="character-length">
            <div className="character-length__title">
                <label htmlFor="char-length">Character Length</label>
                <span>{state.characterLength}</span>
            </div>
            <input style={{background: 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + charValue + '%, #18171F ' + charValue + '%, #18171F 100%)'}} ref={inputRef} onChange={handleCharacterLengthChange} type="range" value={state.characterLength} id="char-length" min={0} max={20}/>
        </div>
    )
}