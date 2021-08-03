import React from 'react';
import './index.css';

//A form that inserts new reply to all replies 

let ReplyForm = (props) => {

    let handleChange = (event) => {
        props.setCurrentReply(event.target.value)
    }

    return (
        <div>

            <form class="bg-grey shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={props.addReply}>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="question">
                    Reply:
                    <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={props.currentReply} onChange={handleChange} />
                </label>
                <input class="bg-blue-500 hover:bg-blue-700 text-white text-base py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" value="Reply" />
            </form>

        </div>
    );
}

export default ReplyForm;
