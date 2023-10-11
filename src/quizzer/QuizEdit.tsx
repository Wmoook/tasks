import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Question } from "../interfaces/question";
import { Quiz } from "../interfaces/quiz";
import { QuestionEdit } from "./QuestionEdit";

import "./QuizEdit.css";

type QuizEditProps = {
    quiz: Quiz;
    editQuiz: (qId: number, newQuiz: Quiz) => void;
    deleteQuiz: (qId: number) => void;
    switchEdit: () => void;
    resetView: () => void;
};

export const QuizEdit: React.FC<QuizEditProps> = ({
    quiz,
    editQuiz,
    deleteQuiz,
    switchEdit,
    resetView
}) => {
    const [editedQuiz, setEditedQuiz] = useState<Quiz>({ ...quiz });

    const handleEditQuestion = (
        questionId: number,
        updatedQuestion: Question
    ) => {
        const updatedQuestions = editedQuiz.questionList.map((q) =>
            q.id === questionId ? updatedQuestion : q
        );
        setEditedQuiz({ ...editedQuiz, questionList: updatedQuestions });
    };

    const handleRemoveQuestion = (questionId: number) => {
        const updatedQuestions = editedQuiz.questionList.filter(
            (q) => q.id !== questionId
        );
        setEditedQuiz({ ...editedQuiz, questionList: updatedQuestions });
    };

    const handleSwapQuestion = (idx1: number, idx2: number) => {
        const updatedQuestions = [...editedQuiz.questionList];
        const temp = updatedQuestions[idx1];
        updatedQuestions[idx1] = updatedQuestions[idx2];
        updatedQuestions[idx2] = temp;
        setEditedQuiz({ ...editedQuiz, questionList: updatedQuestions });
    };

    const handleSaveChanges = () => {
        editQuiz(quiz.id, editedQuiz);
        switchEdit();
    };

    return (
        <div>
            <div className="edit_header">
                <Form.Group controlId="formEditQuizId">
                    <div className="title_published_flex">
                        <div className="edit_title_area">
                            <Form.Label>Title: </Form.Label>
                            <Form.Control
                                value={editedQuiz.title}
                                onChange={(e) =>
                                    setEditedQuiz({
                                        ...editedQuiz,
                                        title: e.target.value
                                    })
                                }
                            />
                        </div>
                        <Form.Check
                            className="published_check"
                            type="checkbox"
                            id="is-published_check"
                            label="Quiz Published"
                            checked={editedQuiz.published}
                            onChange={(e) =>
                                setEditedQuiz({
                                    ...editedQuiz,
                                    published: e.target.checked
                                })
                            }
                        />
                    </div>
                    <Form.Label>Description: </Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={editedQuiz.body}
                        onChange={(e) =>
                            setEditedQuiz({
                                ...editedQuiz,
                                body: e.target.value
                            })
                        }
                    />
                </Form.Group>
            </div>

            <div>
                {editedQuiz.questionList.map((q, index) => (
                    <QuestionEdit
                        key={editedQuiz.id + "|" + q.id}
                        index={index}
                        lastIndex={editedQuiz.questionList.length - 1}
                        question={q}
                        editQuestion={handleEditQuestion}
                        removeQuestion={handleRemoveQuestion}
                        swapQuestion={handleSwapQuestion}
                    />
                ))}
            </div>
            <hr />
            <div>
                <Button
                    className="add_question_button"
                    onClick={() => {
                        setEditedQuiz({
                            ...editedQuiz,
                            questionList: [
                                ...editedQuiz.questionList,
                                {
                                    id: editedQuiz.questionList.length + 1,
                                    name: "",
                                    body: "Example Question",
                                    type: "short_answer_question",
                                    options: [],
                                    submission: "",
                                    expected: "Example Answer",
                                    points: 1,
                                    published: false
                                }
                            ]
                        });
                    }}
                >
                    Add Question
                </Button>
                <div className="edit_footer">
                    <div>
                        <Button variant="success" onClick={handleSaveChanges}>
                            Save
                        </Button>
                        <Button variant="warning" onClick={switchEdit}>
                            Cancel
                        </Button>
                    </div>
                    <Button
                        variant="danger"
                        onClick={() => {
                            deleteQuiz(quiz.id);
                            resetView();
                        }}
                    >
                        Delete Quiz
                    </Button>
                </div>
            </div>
        </div>
    );
};
