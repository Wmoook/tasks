import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Quiz } from "../interfaces/quiz";
import { QuizCard } from "./QuizCard";
import "./QuizList.css";
import { QuizView } from "./QuizView";

type QuizListProps = {
    quizzes: Quiz[];
    editQuiz: (qId: number, newQuiz: Quiz) => void;
    deleteQuiz: (qId: number) => void;
    showModal: () => void;
    displayId: number | null;
    setDisplayId: (value: number | null) => void;
};

export const QuizList: React.FC<QuizListProps> = ({
    quizzes,
    editQuiz,
    deleteQuiz,
    showModal,
    displayId,
    setDisplayId
}) => {
    const [localDisplayId, setLocalDisplayId] = useState<null | number>(null);

    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    return (
        <div className="quiz_list">
            {!displayId ? (
                <>
                    {quizzes.map((quiz) => (
                        <QuizCard
                            key={quiz.id}
                            quiz={quiz}
                            handleClick={handleQuizView}
                        />
                    ))}
                    <Button className="add_btn" onClick={showModal}>
                        Add New Quiz
                    </Button>
                </>
            ) : (
                <QuizView
                    quiz={quizzes.find((quiz) => quiz.id === displayId)!}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    resetView={resetQuizView}
                />
            )}
        </div>
    );
};
