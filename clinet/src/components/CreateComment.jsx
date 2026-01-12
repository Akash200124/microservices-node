import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function CreateComment({ snippetid }) {
    const [text, setText] = useState('')
    const [comments, setComments] = useState([])

    const addcomment = async (e) => {
        e.preventDefault()

        try {
            const res = await axios.post(`http://localhost:8001/api/v1/comment/${snippetid}/create`, { text })
            console.log("comment res", res)
            setText('')
        } catch (error) {
            console.log("error in adding comment", error);
        }
    }

    useEffect(() => {
        const fetchComments = async () => {
            try {
                console.log("snippetid", snippetid)
                const res = axios.get(`http://localhost:8001/api/v1/comment/${snippetid}/get`)
                setComments(res?.data)
                console.log("comments >>> ", res?.data)

            } catch (error) {
                console.log("error getting comments", error);
            }
        }
        fetchComments()
    }, [])
    return (
        <div className='flex items-center gap-2 flex-row mt-2 '>
            <form onSubmit={addcomment}>
                <input
                    type="text"
                    name="comment"
                    id="comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder='Add comments '
                    className='border-2 border-gray-200 rounded-md p-2 '
                />
                <button className='bg-black text-white p-2 rounded-md ml-2 '>Add</button>
            </form>

            <div>
                {comments?.map((comment) => (
                    <p key={comment._id}>{comment.text}</p>
                ))}
            </div>
        </div>
    )
}
