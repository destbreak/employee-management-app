export default function Selectbox({ className = '', options = [], currentValue = "", ...props }) {
    return (
        <select
            {...props}
            defaultValue={currentValue}
            className={"border-gray-500 focus:border-gray-700 focus:ring-gray-700 rounded-md shadow-sm mt-1 block w-full"}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}
