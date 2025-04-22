export default function CheckboxOption({checkboxId, labelText, onOptionClick}) {
    return (
        <li>
            <label htmlFor={checkboxId}>{labelText}</label>
            <input onClick={onOptionClick} type="checkbox" id={checkboxId} name={checkboxId} value={checkboxId} />
        </li>
    )
}