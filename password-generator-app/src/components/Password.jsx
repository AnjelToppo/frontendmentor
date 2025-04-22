import {useContext, useEffect, useState} from "react";
import {PasswordContext, PasswordDispatchContext} from "../context/PasswordContext.jsx";

export default function Password() {
    const state = useContext(PasswordContext);
    const dispatch = useContext(PasswordDispatchContext);

    async function handleCopyClick() {
        if (state.generatedPassword !== '') dispatch({
            type: "SHOW_COPY",
        })
        await navigator.clipboard.writeText(state.generatedPassword);
    }

    useEffect(() => {
        state.generatedPassword === '' && dispatch({
            type: "HIDE_COPY",
        })
    }, [state.generatedPassword]);

    return (<div className="password-container">
            <input className="password-input" placeholder='P4$5W0rD!' value={state.generatedPassword} disabled/>
            <div className="copy">
                {state.showCopy && <span>Copied</span>}
                <button className="copy-btn" type="button" onClick={handleCopyClick}></button>
            </div>
        </div>)
}