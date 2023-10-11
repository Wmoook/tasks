import React from "react";
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
    const handleQuizView = (id: number) => {
        setDisplayId(id);
    };

    const resetQuizView = () => {
        setDisplayId(null);
    };

    const selectedQuiz = quizzes.find((quiz) => quiz.id === displayId) || null;

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
                selectedQuiz && (
                    <QuizView
                        quiz={selectedQuiz}
                        editQuiz={editQuiz}
                        deleteQuiz={deleteQuiz}
                        resetView={resetQuizView}
                    />
                )
            )}
        </div>
    );
};
