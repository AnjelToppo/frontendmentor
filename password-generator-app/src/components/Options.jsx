import CharacterLength from "./CharacterLength.jsx";
import CheckboxOptions from "./CheckboxOptions.jsx";
import Strength from "./Strength.jsx";
import {useContext} from "react";
import {PasswordContext, PasswordDispatchContext} from "../context/PasswordContext.jsx";

export default function Options() {
    const state = useContext(PasswordContext);
    const dispatch = useContext(PasswordDispatchContext);

    function handleGenerateClick() {
        dispatch({
            type: 'SET_GENERATE_PASSWORD'
        })
    }

    return (
        <div className="options">
            <CharacterLength />
            <CheckboxOptions />
            <Strength />
            <button className="generate-btn" onClick={handleGenerateClick} type="button" disabled={state.strengthLevel === ''}><span className="generate-btn__text">Generate</span><span className="generate-btn__icon"></span></button>
        </div>
    )
}