import React, { useState } from "react";

export function ChangeColor(): JSX.Element {
    const colors = [
        "Red",
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Orange",
        "Pink",
        "Brown"
    ];
    const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((color) => (
                <label
                    key={color}
                    style={{ display: "inline-block", marginRight: "10px" }}
                >
                    <input
                        type="radio"
                        name="color-options"
                        value={color}
                        checked={selectedColor === color}
                        onChange={(e) => setSelectedColor(e.target.value)}
                    />
                    {color}
                </label>
            ))}
            <div
                style={{
                    backgroundColor: selectedColor,
                    padding: "10px",
                    marginTop: "10px",
                    width: "150px",
                    textAlign: "center"
                }}
                data-testid="colored-box"
            >
                {selectedColor}
            </div>
        </div>
    );
}
