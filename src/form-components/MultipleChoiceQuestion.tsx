import React, { useState } from "react";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [selectedOption, setSelectedOption] = useState<string>(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOption(e.target.value);
    };

    const renderFeedback = () => {
        if (selectedOption === expectedAnswer) {
            return "✔️ Correct!";
        } else {
            return "❌ Incorrect!";
        }
    };

    return (
        <div>
            <h3>Multiple Choice Question</h3>

            <select value={selectedOption} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <div>{renderFeedback()}</div>
        </div>
    );
}
