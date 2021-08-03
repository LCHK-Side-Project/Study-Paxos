//A list that displays all replies from the clicked question

let ReplyList = (props) => {

    if (props.clickedQuestion in props.replies) {
        return <div>
            {props.replies[props.clickedQuestion].map(txt => <p>{txt}</p>)}
        </div>
    } else {
        return <div>
            No Replies Yet
        </div>
    }
}

export default ReplyList;
