export const INPUT_QUESTION_CHANGE = "INPUT_QUESTION_CHANGE";
export const ADD_QUESTION = "ADD_QUESTION";

export const inputQuestionChange = (text) => {
	return { type: INPUT_QUESTION_CHANGE, text: text };
};
export const addQuestion = () => {
	return { type: ADD_QUESTION };
};
