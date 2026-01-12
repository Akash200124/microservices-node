import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CreateComment from './CreateComment'


export default function CreateSnippet() {

    const [title, setTitle] = useState('')
    const [code, setCode] = useState('')
    const [snippets, setSnippets] = useState({})

    const CreateSnippet = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:8000/api/v1/snippet/create', {
                title,
                code
            })

            console.log("api res", res)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        const fetchSnippet = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:8000/api/v1/snippet/get'
                );

                console.log(res.data);
                setSnippets(res.data);
            } catch (error) {
                console.log("error in getting the snippets", error);
            }
        };

        fetchSnippet();
    }, []);


    return (
        <div>
            <form onSubmit={CreateSnippet} className='flex flex-col space-y-4'>
                <input
                    type="text"
                    placeholder='Title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className='border rounded px-2 py-1 w-fit'
                />
                <textarea
                    placeholder=' Write a code Snippetes...'
                    className='border rounded px-2 py-1'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                />
                <button
                    type='Add'
                    className='bg-blue-500 text-white rounded px-6 py-2 w-fit coursor-pointer'
                >
                    Add
                </button>
            </form>

            <div className="mt-5 grid grid-cols-3 gap-4">
                {Object?.values(snippets).map((snippet, index) => (
                    <div key={snippet.id || index} className="p-3 border rounded">
                        <h1 className="font-bold text-xl">{snippet.title}</h1>
                        <CreateComment snippetid={snippet.id}/>
                    </div>
                    
                ))}
            </div>

        </div>
    )
}
