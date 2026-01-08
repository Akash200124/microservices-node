import React from 'react'

export default function CreateSnippet() {
    return (
        <div>
            <form action="" className='flex flex-col space-y-4'>
                <input
                    type="text"
                    placeholder='Title'
                    className='border rounded px-2 py-1 w-fit'
                />
                <textarea
                    placeholder=' Write a code Snippetes...'
                    className='border rounded px-2 py-1'
                />
                <button
                    type='Add'
                    className='bg-blue-500 text-white rounded px-6 py-2 w-fit coursor-pointer'
                >
                    Add
                </button>
            </form>
        </div>
    )
}
