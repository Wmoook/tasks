import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { Question, QuestionType } from "../interfaces/question";
import { QuizList } from "./QuizList";
import { AddQuizModal } from "./AddQuizModal";
import "./Quizzer.css";
import sample from "../data/quizzes.json";

type PartialQuestion = Omit<Question, "submission">;
type PartialQuiz = Omit<Quiz, "questionList"> & {
    questionList: PartialQuestion[];
};

const isValidQuestionType = (type: string): type is QuestionType => {
    return ["multiple_choice_question", "short_answer_question"].includes(type);
};

const transformToQuiz = (quiz: PartialQuiz): Quiz => {
    const transformedQuestions = quiz.questionList.map((q) => {
        const type = isValidQuestionType(q.type)
            ? q.type
            : "short_answer_question";

        return {
            ...q,
            name: q.name || "",
            submission: "",
            type
        };
    });

    return {
        ...quiz,
        questionList: transformedQuestions
    };
};

const quizzesSample: PartialQuiz[] = sample as PartialQuiz[];
const QUIZZES: Quiz[] = quizzesSample.map(transformToQuiz);

export const Quizzer = () => {
    const [quizzes, setQuizzes] = useState<Quiz[]>(QUIZZES);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showOnlyPublished, setShowOnlyPublished] = useState(false);
    const [displayId, setDisplayId] = useState<null | number>(null);

    const editQuiz = (qId: number, newQuiz: Quiz) => {
        setQuizzes((prevQuizzes) =>
            prevQuizzes.map((q) => (q.id === qId ? newQuiz : q))
        );
    };

    const addQuiz = (title: string, body: string) => {
        const newQuiz: Quiz = {
            id: quizzes.length + 1,
            title,
            body,
            questionList: [],
            published: false
        };
        setQuizzes((prevQuizzes) => [...prevQuizzes, newQuiz]);
    };

    const deleteQuiz = (qId: number) => {
        setQuizzes((prevQuizzes) => prevQuizzes.filter((q) => qId !== q.id));
    };

    const toggleShowOnlyPublished = () => {
        setShowOnlyPublished((prev) => !prev);
    };

    return (
        <div className="quizzer">
            {displayId === null && (
                <button onClick={toggleShowOnlyPublished}>
                    {showOnlyPublished
                        ? "Show All Quizzes"
                        : "Show Only Published Quizzes"}
                </button>
            )}
            <QuizList
                quizzes={
                    showOnlyPublished
                        ? quizzes.filter((q) => q.published)
                        : quizzes
                }
                editQuiz={editQuiz}
                deleteQuiz={deleteQuiz}
                showModal={() => setShowAddModal(true)}
                displayId={displayId}
                setDisplayId={setDisplayId}
            />
            <AddQuizModal
                show={showAddModal}
                handleClose={() => setShowAddModal(false)}
                addQuiz={addQuiz}
            />
            <hr />
            <h2 style={{ color: "white" }}>Application Sketch</h2>
            {/* <img src={require("./sketchFINAL.jpg")} /> */}
            <hr />
            <div style={{ color: "white" }}>
                <h2>Completed Features</h2>
                <ul className="completedList">
                    <li>
                        {" "}
                        Users can see a list of quizzes, including the quizzes
                        title, description, and how many questions it has
                        (TESTED)
                    </li>
                    <li>
                        Users can select a specific quiz to see the questions,
                        including the questions name, body, and points (TESTED)
                    </li>
                    <li>
                        Quiz questions can be of AT LEAST two types: a short
                        answer question or multiple choice question (TESTED)
                    </li>
                    <li>
                        Users can enter or choose an answer for a quiz question,
                        and be told if they are correct (TESTED)
                    </li>
                    <li>
                        Users can see how many total points they have earned
                        (TESTED)
                    </li>
                    <li>
                        Users can clear out their existing answers for a quiz
                        (TESTED)
                    </li>
                    <li>Users can publish or unpublish a question (TESTED)</li>
                    <li>
                        Users can filter the questions in a list so that only
                        published questions are shown (TESTED)
                    </li>
                    <li>
                        Users can edit the questions and fields of a quiz
                        (TESTED)
                    </li>
                    <li>Users can add a new quiz question (TESTED)</li>
                    <li>Users can delete an existing quiz question (TESTED)</li>
                    <li>Users can reorder quiz questions (TESTED)</li>
                    <li>Users can add a new quiz (TESTED)</li>
                    <li>Users can delete an existing quiz (TESTED)</li>
                </ul>
            </div>
        </div>
    );
};
