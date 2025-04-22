import {useContext} from "react";
import {PasswordContext} from "../context/PasswordContext.jsx";

export default function Password() {
    const state = useContext(PasswordContext);

    return (
        <div className="password-container">
            <input className="password-input" placeholder='P4$5W0rD!' value={state.generatedPassword} disabled />
            <button className="copy-btn" type="button"></button>
        </div>
    )
}