import {useRef, useState} from "react";

export default function CharacterLength() {
    const [characterLength, setCharacterLength] = useState(0);
    const inputRef = useRef();


    let charValue = (characterLength - inputRef.current?.min) / (inputRef.current?.max - inputRef.current?.min) * 100;

    return (
        <div className="character-length">
            <div className="character-length__title">
                <label htmlFor="char-length">Character Length</label>
                <span>{characterLength}</span>
            </div>
            <input style={{background: 'linear-gradient(to right, #A4FFAF 0%, #A4FFAF ' + charValue + '%, #18171F ' + charValue + '%, #18171F 100%)'}} ref={inputRef} type="range" value={characterLength} onChange={(e) => setCharacterLength(e.target.value)} id="char-length" min={0} max={20}/>
        </div>
    )
}