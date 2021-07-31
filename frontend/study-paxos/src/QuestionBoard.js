import React, { useState } from 'react';
import QuestionList from './QuestionList';

let QuestionBoard = (props) => {
    const [questions, setQuestions] = useState([]);

    const [currentQuestion, setCurrentQuestion] = useState("")


    let handleChange = (event) => {
        setCurrentQuestion(event.target.value)
    }

    let handleSubmit = (event) => {
        alert('An essay was submitted: ' + currentQuestion);
        event.preventDefault();
        setQuestions([...questions, currentQuestion])
        
        setCurrentQuestion("")
    }

    return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
          Question:
          <textarea value={currentQuestion} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <QuestionList questions={questions} />
    </div>
    );
}

export default QuestionBoard;