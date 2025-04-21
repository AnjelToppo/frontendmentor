import {useEffect, useRef, useState} from "react";

export default function Strength() {
    const strengthLevelRef = useRef();
    const [strengthLevel, setStrengthLevel] = useState('');

    useEffect(() => {
        setStrengthLevel(strengthLevelRef.current.dataset.strength);
    }, [strengthLevel]);

    return (
        <div className='strength'>
            <span className='strength__title'>Strength</span>
            <div ref={strengthLevelRef} className='strength__level' data-strength=''>
                <span>{strengthLevel}</span>
                <ul className='bars'>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}