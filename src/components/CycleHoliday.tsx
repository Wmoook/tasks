import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const holidays = [
        { emoji: "🎏", name: "Dragon Boat Festival", order: 2 },
        { emoji: "🎃", name: "Halloween", order: 3 },
        { emoji: "🪔", name: "Diwali", order: 1 },
        { emoji: "🎄", name: "Christmas", order: 4 },
        { emoji: "🎉", name: "New Year", order: 5 }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const advanceByAlphabet = () => {
        const sortedByAlphabet = [...holidays].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        const currentHoliday = sortedByAlphabet.findIndex(
            (h) => h.emoji === holidays[currentIndex].emoji
        );
        setCurrentIndex(
            holidays.indexOf(
                sortedByAlphabet[(currentHoliday + 1) % holidays.length]
            )
        );
    };

    const advanceByYear = () => {
        const sortedByYear = [...holidays].sort((a, b) => a.order - b.order);
        const currentHoliday = sortedByYear.findIndex(
            (h) => h.emoji === holidays[currentIndex].emoji
        );
        setCurrentIndex(
            holidays.indexOf(
                sortedByYear[(currentHoliday + 1) % holidays.length]
            )
        );
    };

    return (
        <div>
            <Button onClick={advanceByAlphabet}>Advance by Alphabet</Button>
            <Button onClick={advanceByYear}>Advance by Year</Button>
            <p>Holiday: {holidays[currentIndex].emoji}</p>
        </div>
    );
}
