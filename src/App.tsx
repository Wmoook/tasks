import React, { useState } from "react";
import "./App.css";
import { Quizzer } from "./quizzer/Quizzer";
import { ShowHideTasks } from "./ShowHideTasks";
import { Button } from "react-bootstrap";

function App(): JSX.Element {
    const [showQuizzer, setShowQuizzer] = useState<boolean>(true);

    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
                <Button
                    onClick={() => {
                        setShowQuizzer(!showQuizzer);
                    }}
                >
                    {showQuizzer ? "Tasks" : "Quizzer"}
                </Button>
            </header>
            {showQuizzer ? <Quizzer /> : <ShowHideTasks />}
        </div>
    );
}

export default App;
