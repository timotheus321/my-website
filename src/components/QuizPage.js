import React, { useState, useEffect } from 'react';
import { useQuizGraph } from './QuizGraphContext';
import quizQuestions from './quizQuestions';

const QuizPage = () => {
    const { graph } = useQuizGraph();
    const [currentNode, setCurrentNode] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [knowledge, setKnowledge] = useState('');

    useEffect(() => {
        // Assuming 'start' node directly points to the first question nodes
        const startNode = graph.findNode("start");
        if (startNode && startNode.edges) {
            // Assuming you want to move to the first question linked to the 'start' node
            const firstQuestionKey = Object.keys(startNode.edges)[0];
            const firstQuestionNode = graph.findNode(startNode.edges[firstQuestionKey]);
            console.log("First question node:", firstQuestionNode);
            setCurrentNode(firstQuestionNode);
        } else {
            console.log("Start node not properly initialized.");
        }
    }, [graph]);

    useEffect(() => {
        console.log("Current node updated:", currentNode);
    }, [currentNode]);

    const handleAnswer = (answer) => {
        if (!currentNode) {
            console.log("No current node set.");
            return;
        }

        const questionIndex = quizQuestions.findIndex(q => `${q.category}-${q.difficulty}-${q.id}` === currentNode.questionId);
        if (questionIndex === -1) {
            console.error("Question not found for currentNode:", currentNode);
            return; // Exit if no matching question is found
        }
        const question = quizQuestions[questionIndex];

        const correct = answer === question.answer;
        setIsAnswered(true);
        setIsCorrect(correct);

        if (!correct) {
            setKnowledge(question.knowledge);
        } else {
            setKnowledge('');
        }

        const nextNodeId = currentNode.edges[correct ? 'correct' : 'incorrect'];
        if (nextNodeId) {
            const nextNode = graph.findNode(nextNodeId);
            console.log("Moving to next node:", nextNode);
            setCurrentNode(nextNode);
        } else {
            console.log("End of the quiz or incorrect node configuration");
        }
    };

    if (!currentNode) {
        console.log("Still waiting for currentNode to be set");
        return <div>Loading...</div>;
    }

    // This will handle scenarios where the question corresponding to the current node ID is not found
    const question = quizQuestions.find(q => `${q.category}-${q.difficulty}-${q.id}` === currentNode.questionId);
    if (!question) {
        console.error("Error loading the question.");
        return <div>Error loading the question.</div>;
    }

    return (
        <div className='quiz-container'>
            <h2>Quiz on Data Structures and Algorithms</h2>
            <div className='question'>
                <p>{question.question}</p>
                <div className='options'>
                    {question.options.map((option, index) => (
                        <button key={index} onClick={() => handleAnswer(option)} className='option-btn'>
                            {option}
                        </button>
                    ))}
                </div>
            </div>
            {isAnswered && (
                <div className='feedback'>
                    <p>{isCorrect ? "Correct! :)" : "Incorrect! :("}</p>
                    {!isCorrect && (
                        <>
                            <div className='knowledge-text'>
                                <p>Knowledge:</p>
                            </div>
                            <div className='knowledge-code' dangerouslySetInnerHTML={{ __html: knowledge }}></div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
};

export default QuizPage;
