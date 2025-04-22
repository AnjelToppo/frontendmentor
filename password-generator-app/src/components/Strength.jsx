import {useContext, useEffect, useRef} from "react";
import {PasswordContext} from "../context/PasswordContext.jsx";

export default function Strength() {
    const strengthLevelRef = useRef();
    const state = useContext(PasswordContext);


    useEffect(() => {
        strengthLevelRef.current.dataset.strength = state.strengthLevel;
    }, [state.strengthLevel]);
    // console.log(state.options, state.characterLength, state.options, state.strengthLevel);

    return (<div className='strength'>
            <span className='strength__title'>Strength</span>
            <div ref={strengthLevelRef} className='strength__level' data-strength=''>
                <span>{state.strengthLevel}</span>
                <ul className='bars'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>)
}