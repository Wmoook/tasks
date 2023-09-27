import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [leftDie, setLeftDie] = useState<number>(1);
    const [rightDie, setRightDie] = useState<number>(6);

    const rollLeft = () => {
        const newLeftDie = d6();
        setLeftDie(newLeftDie);
    };

    const rollRight = () => {
        const newRightDie = d6();
        setRightDie(newRightDie);
    };

    const rollBoth = () => {
        rollLeft();
        rollRight();
    };

    let message = "";
    if (leftDie === rightDie) {
        if (leftDie === 1) {
            message = "Lose";
        } else {
            message = "Win";
        }
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginBottom: "20px"
                }}
            >
                <span data-testid="left-die" style={{ fontSize: "24px" }}>
                    {leftDie}
                </span>
                <span data-testid="right-die" style={{ fontSize: "24px" }}>
                    {rightDie}
                </span>
            </div>
            <div>
                <Button onClick={rollLeft} style={{ marginRight: "10px" }}>
                    Roll Left
                </Button>
                <Button onClick={rollRight} style={{ marginRight: "10px" }}>
                    Roll Right
                </Button>
                <Button onClick={rollBoth}>Roll Both</Button>
            </div>
            {message && <div style={{ marginTop: "20px" }}>{message}</div>}
        </div>
    );
}
// Used ChatGPT to add the "Roll Both" button and make the it more visually appealing
