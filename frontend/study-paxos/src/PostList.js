//Lists all questions belonging to the country
let PostList = (props) => {
    return <div>
        <p class="text-5xl">Posts</p>
        {props.questions.map(txt => <div class="hover:bg-purple-700" onClick={() => props.onClick(txt)}>{txt}</div>)}
    </div>
}

export default PostList;
