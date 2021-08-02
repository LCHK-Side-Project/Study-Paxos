import { INPUT_QUESTION_CHANGE, ADD_QUESTION } from "../action/questions";

const initialState = {
	questionsList: [],
	inputQuestion: "",
};

const QuestionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case INPUT_QUESTION_CHANGE:
			return { ...state, inputQuestion: action.text };
		case ADD_QUESTION:
			return {
				...state,
				questionsList: [...state.questionsList, state.inputQuestion],
				inputQuestion: "",
			};
		default:
			return state;
	}
};

export default QuestionsReducer;
