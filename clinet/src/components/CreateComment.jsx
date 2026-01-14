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
                const res = await axios.get(`http://localhost:8001/api/v1/comment/${snippetid}/get`)
                setComments(res.data?.[snippetid] || []);
                console.log("comments >>> ", res?.data)

            } catch (error) {
                console.log("error getting comments", error);
            }
        }
        if (snippetid) fetchComments();

    }, [snippetid]);

    return (
        <div className="mt-4 space-y-3 ">
            {/* Add Comment */}
            <form
                onSubmit={addcomment}
                className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg border "
            >
                <input
                    type="text"
                    name="comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 bg-white border border-gray-300 rounded-md px-3  py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
                <button
                    type="submit"
                    className="bg-black text-white px-4  py-2 rounded-md text-sm hover:bg-gray-800 transition"
                >
                    Add
                </button>
            </form>

            {/* Comment List */}
            <div className="space-y-2">
                {comments.length === 0 ? (
                    <p className="text-gray-400 text-sm">No comments yet</p>
                ) : (
                    comments.map((comment) => (
                        <div
                            key={comment.id}
                            className="bg-white border rounded-lg px-3 py-2 text-sm shadow-sm"
                        >
                            {comment.text}
                        </div>
                    ))
                )}
            </div>
        </div>

    )
}
