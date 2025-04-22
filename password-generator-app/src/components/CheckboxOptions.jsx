import CheckboxOption from "./CheckboxOption.jsx";
import {useContext} from "react";
import {PasswordContext, PasswordDispatchContext} from "../context/PasswordContext.jsx";

export default function CheckboxOptions() {
    const dispatch = useContext(PasswordDispatchContext);
    const state = useContext(PasswordContext);

    function handleOptionClick(e) {
        dispatch({
            type: 'SET_OPTIONS', payload: e.target.value
        })
        dispatch({
            type: 'SET_LEVEL'
        })
        dispatch({
            type: 'RESET_PASSWORD',
        })
    }

    return (<ul className="checkbox-options">
            <CheckboxOption checkboxId={"uppercase-letters"} labelText="Include Uppercase Letters"
                            onOptionClick={handleOptionClick}/>
            <CheckboxOption checkboxId={"lowercase-letters"} labelText="Include Lowercase Letters"
                            onOptionClick={handleOptionClick}/>
            <CheckboxOption checkboxId={"numbers"} labelText="Include Numbers" onOptionClick={handleOptionClick}/>
            <CheckboxOption checkboxId={"symbols"} labelText="Include Symbols" onOptionClick={handleOptionClick}/>
        </ul>)
}