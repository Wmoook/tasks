import React, { useState } from "react";
import { Quiz } from "../interfaces/quiz";
import { QuizExpanded } from "./QuizExpanded";
import { QuizEdit } from "./QuizEdit";

import "./QuizView.css";

type QuizViewProps = {
    quiz: Quiz;
    editQuiz: (qId: number, newQuiz: Quiz) => void;
    deleteQuiz: (qId: number) => void;
    resetView: () => void;
};

export const QuizView: React.FC<QuizViewProps> = ({
    quiz,
    editQuiz,
    deleteQuiz,
    resetView
}) => {
    const [edit, setEdit] = useState(false);

    const switchEdit = () => {
        setEdit((prevState) => !prevState);
    };

    return (
        <div className="quiz_card">
            {edit ? (
                <QuizEdit
                    quiz={quiz}
                    editQuiz={editQuiz}
                    deleteQuiz={deleteQuiz}
                    switchEdit={switchEdit}
                    resetView={resetView}
                />
            ) : (
                <QuizExpanded
                    quiz={quiz}
                    editQuiz={editQuiz}
                    resetView={resetView}
                    switchEdit={switchEdit}
                />
            )}
        </div>
    );
};
