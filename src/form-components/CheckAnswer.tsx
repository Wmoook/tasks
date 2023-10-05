import React, { useState } from "react";

interface Props {
    expectedAnswer: string;
}

export const CheckAnswer: React.FC<Props> = ({ expectedAnswer }) => {
    const [userAnswer, setUserAnswer] = useState<string>("");

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={userAnswer}
                onChange={handleInputChange}
                role="textbox"
            />
            {userAnswer === expectedAnswer ? "✔️" : "❌"}
        </div>
    );
};
