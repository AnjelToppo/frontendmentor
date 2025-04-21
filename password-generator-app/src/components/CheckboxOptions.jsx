import CheckboxOption from "./CheckboxOption.jsx";

export default function CheckboxOptions() {
    return (
        <ul className="checkbox-options">
            <CheckboxOption checkboxId={"uppercase-letters"} labelText="Include Uppercase Letters" />
            <CheckboxOption checkboxId={"lowercase-letters"} labelText="Include Lowercase Letters" />
            <CheckboxOption checkboxId={"numbers"} labelText="Include Numbers" />
            <CheckboxOption checkboxId={"symbols"} labelText="Include Symbols" />
        </ul>
    )
}