

let QuestionList = (props) => {
    return <div>
        {props.questions.map(txt => <p>{txt}</p>)}
    </div>
}

export default QuestionList;
