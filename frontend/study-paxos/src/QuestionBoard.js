import React from "react";
import QuestionList from "./QuestionList";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

import { inputQuestionChange, addQuestion } from "./store/action/questions";

let QuestionBoard = (props) => {
	const dispatch = useDispatch();
	const questionsList = useSelector((state) => state.Questions.questionsList);
    const inputText = useSelector((state) => state.Questions.inputQuestion);

	return (
		<div>
			<form
				class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
				onSubmit={(event) => {
					event.preventDefault();
					dispatch(addQuestion());
				}}
			>
				<label
					class="block text-gray-700 text-sm font-bold mb-2"
					for="question"
				>
					Question:
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						value={inputText}
						onChange={(event) =>
							dispatch(inputQuestionChange(event.target.value))
						}
					/>
				</label>
				<input
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
					value="Submit"
				/>
			</form>
			<QuestionList questions={questionsList} />
		</div>
	);
};

export default QuestionBoard;
