import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<string>("");

    const handleGainAttempts = () => {
        const requestedNumber = parseInt(requestedAttempts, 10);
        if (!isNaN(requestedNumber)) {
            setAttempts((prev) => prev + requestedNumber);
            setRequestedAttempts("");
        }
    };

    const handleUseAttempt = () => {
        if (attempts > 0) {
            setAttempts((prev) => prev - 1);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>

            <input
                type="number"
                value={requestedAttempts}
                onChange={(e) => setRequestedAttempts(e.target.value)}
                placeholder="Request more attempts"
            />

            <button onClick={handleGainAttempts}>Gain</button>
            <button onClick={handleUseAttempt} disabled={attempts === 0}>
                Use
            </button>
        </div>
    );
}
