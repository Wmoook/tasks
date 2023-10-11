import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { QuizQuestion } from "./QuizQuestion";

import "./QuizExpanded.css";

type QuizExpandedProps = {
    quiz: Quiz;
    editQuiz: (qId: number, newQuiz: Quiz) => void;
    resetView: () => void;
    switchEdit: () => void;
};

export const QuizExpanded: React.FC<QuizExpandedProps> = ({
    quiz,
    editQuiz,
    resetView,
    switchEdit
}) => {
    const [showOnlyPublishedQuestions, setShowOnlyPublishedQuestions] =
        useState(false);
    const [score, setScore] = useState<number>(0);
    const [submitArr, setSubmitArr] = useState<boolean[]>([]);

    const displayedQuestions = showOnlyPublishedQuestions
        ? quiz.questionList.filter((q) => q.published)
        : quiz.questionList;

    const handleQuestionSubmit = (index: number) => {
        const updatedAnswers = [...submitArr];
        updatedAnswers[index] = true;
        setSubmitArr(updatedAnswers);
    };

    const totalPoints = displayedQuestions.reduce(
        (prev, q) => prev + q.points,
        0
    );

    const addPoints = (points: number) => {
        setScore((prevScore) => prevScore + points);
    };

    const reset = () => {
        setSubmitArr(new Array(displayedQuestions.length).fill(false));
        editQuiz(quiz.id, {
            ...quiz,
            questionList: quiz.questionList.map((q) => ({
                ...q,
                submission: ""
            }))
        });
        setScore(0);
    };

    const editQuestionSub = (questionId: number, sub: string) => {
        const updatedQuestions = quiz.questionList.map((q) =>
            q.id === questionId ? { ...q, submission: sub } : q
        );
        editQuiz(quiz.id, {
            ...quiz,
            questionList: updatedQuestions
        });
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-baseline">
                    <h1 className="title">{quiz.title}</h1>
                    <p>
                        {displayedQuestions.length} question
                        {displayedQuestions.length !== 1 ? "s" : ""}
                    </p>
                    <Button
                        style={{ marginLeft: "20px" }}
                        variant="outline-primary"
                        onClick={() =>
                            setShowOnlyPublishedQuestions((prev) => !prev)
                        }
                    >
                        {showOnlyPublishedQuestions
                            ? "Show All Questions"
                            : "Show Only Published Questions"}
                    </Button>
                </div>
                <div>
                    <Button
                        className="esc_button text-align-center"
                        variant="warning"
                        onClick={() => {
                            reset();
                            switchEdit();
                        }}
                    >
                        Edit
                    </Button>
                    <Button
                        style={{ marginLeft: "20px" }}
                        variant="danger"
                        onClick={resetView}
                    >
                        Exit
                    </Button>
                </div>
            </div>
            <p className="desc">{quiz.body}</p>
            {displayedQuestions.map((q, index) => (
                <QuizQuestion
                    key={quiz.id + "|" + q.id}
                    index={index}
                    question={q}
                    submitted={submitArr[index]}
                    handleSubmit={handleQuestionSubmit}
                    addPoints={addPoints}
                    editQuestionSub={editQuestionSub}
                />
            ))}
            <hr />
            <div className="footer">
                <Button variant="danger" onClick={reset}>
                    Reset
                </Button>
                <span className="score_report">
                    {score}/{totalPoints}
                </span>
            </div>
        </>
    );
};
