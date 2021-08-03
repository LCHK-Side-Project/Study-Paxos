import React, { useState } from 'react';
import PostList from './PostList';
import './index.css';
import PostDetail from './PostDetail';
import ReplyList from './ReplyList';
import ReplyForm from './ReplyForm';

//Combination of all components
//Probably states and methods will be replaced by Redux sooner or later

let QuestionBoard = (props) => {
    const [questions, setQuestions] = useState([]);
    const [currentReply, setCurrentReply] = useState("")

    const [currentQuestion, setCurrentQuestion] = useState("")
    const [clickedQuestion, setClickedQuestion] = useState("")
    const [replies, setReplies] = useState(new Map())

    let handleChange = (event) => {
        setCurrentQuestion(event.target.value)
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        setQuestions([...questions, currentQuestion])

        setCurrentQuestion("")
    }

    let questionOnClick = (question) => {
        console.log(question)
        setClickedQuestion(question)
    }

    let addReply = (event) => {
        event.preventDefault();
        // alert('A name was submitted: ' + currentReply);
        console.log(replies)
        if(!(clickedQuestion in replies)) {
            replies[clickedQuestion] = [currentReply]
            setReplies(replies)
        } else {
            replies[clickedQuestion] = [...replies[clickedQuestion], currentReply]
            setReplies(replies)
        }
        setCurrentReply("")
    }

    return (
        <div>
            <h2 class="text-8xl">{props.country}</h2>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
                    Question:
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={currentQuestion} onChange={handleChange} />
                </label>
                <input class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Submit" />
            </form>
            <div class="grid grid-cols-3 gap-4">
                <PostList questions={questions} onClick={questionOnClick} />
                <div>
                    <PostDetail question={clickedQuestion} />
                    <ReplyForm setCurrentReply={setCurrentReply} currentReply={currentReply} addReply={addReply} clickedQuestion={clickedQuestion} replies={replies} />
                </div>
                <div>
                    <ReplyList replies={replies} clickedQuestion={clickedQuestion} />
                </div>
            </div>

        </div>
    );
}

export default QuestionBoard;