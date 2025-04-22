import CheckboxOption from "./CheckboxOption.jsx";
import {useContext} from "react";
import {PasswordDispatchContext} from "../context/PasswordContext.jsx";

export default function CheckboxOptions() {
    const dispatch = useContext(PasswordDispatchContext);

    function handleOptionClick(e) {
        dispatch({
            type: 'SET_OPTIONS', payload: e.target.value
        })
        dispatch({
            type: 'SET_LEVEL'
        })
        console.log(e.target.disabled, e.target.checked, e.target.value);
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