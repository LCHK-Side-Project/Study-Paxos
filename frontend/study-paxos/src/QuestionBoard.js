import React, { useState } from 'react';
import QuestionList from './QuestionList';
import './index.css';
let QuestionBoard = (props) => {
    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState("")


    let handleChange = (event) => {
        setCurrentQuestion(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setQuestions([...questions, currentQuestion])

        setCurrentQuestion("")
    }

    return (
        <div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
                    Question:
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={currentQuestion} onChange={handleChange} />
                </label>
                <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"type="submit" value="Submit" />
            </form>
            <QuestionList questions={questions} />
        </div>
    );
}

export default QuestionBoard;