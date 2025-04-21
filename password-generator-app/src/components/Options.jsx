import CharacterLength from "./CharacterLength.jsx";
import CheckboxOptions from "./CheckboxOptions.jsx";
import Strength from "./Strength.jsx";

export default function Options() {
    return (
        <div className="options">
            <CharacterLength />
            <CheckboxOptions />
            <Strength />
            <button className="generate-btn" type="button"><span className="generate-btn__text">Generate</span><span className="generate-btn__icon"></span></button>
        </div>
    )
}