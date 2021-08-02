import React from "react";

let QuestionList = (props) => {
	const questionsList = props.questions;
	return (
		<div>
			{questionsList &&
				questionsList.map((txt, index) => <p key={index}>{txt}</p>)}
		</div>
	);
};

export default QuestionList;
