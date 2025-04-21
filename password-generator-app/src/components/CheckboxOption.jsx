export default function CheckboxOption({checkboxId, labelText}) {
    return (
        <li>
            <label htmlFor={checkboxId}>{labelText}</label>
            <input type="checkbox" id={checkboxId} name={checkboxId} />
        </li>
    )
}