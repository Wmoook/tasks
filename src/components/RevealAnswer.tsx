import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): JSX.Element {
    const [isRevealed, setIsRevealed] = useState<boolean>(false);

    const toggleReveal = () => {
        setIsRevealed(!isRevealed);
    };

    return (
        <div>
            <Button onClick={toggleReveal}>Reveal Answer</Button>
            {isRevealed && <span>42</span>}
        </div>
    );
}
