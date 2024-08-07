import React, { useContext, useState } from 'react'
import Button from './Button'
import { SECOND_BUTTON_BG, BUTTON_BG } from '../constants/color';
import { dataContext } from '../context/store';

function Model({ visibility, setVisibility }) {
    const {addNotes} = useContext(dataContext)
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')
    const [newId, setNewId] = useState(Date.now())

    const toggleModel = () => {
        setVisibility((prev) => !prev)
        setDescription("")
        setTitle("")
    }

    const handleData = () => {
        if (title) {
            setNewId(Date.now())
            const note = { id: newId, title: title, desc: desc }
            addNotes(note)
        }
        toggleModel()
    }

    return (
        <div className={`w-full h-screen bg-transparent flex justify-center items-center z-10 absolute ${!visibility ? 'hidden' : null}`}>
            <div className='w-3/6 h-3/4 rounded p-5 bg-white shadow-md border flex flex-col gap-4'>
                <h1 className='font-bold text-3xl text-center'>Add Notes</h1>
                <label htmlFor="title" className='text-2xl font-bold'>Title</label>
                <input type="text" name='title' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='input-box' />
                <label htmlFor="desc" className='text-2xl font-bold'>Description</label>
                <textarea name="desc" rows={10} className='input-box' placeholder='Write note' value={desc} onChange={(e) => setDescription(e.target.value)}></textarea>
                <div className='flex-1 flex items-end gap-5 self-end'>
                    <Button title='cancel' color={SECOND_BUTTON_BG} handler={toggleModel} />
                    <Button title='Add' color={BUTTON_BG} handler={handleData} />
                </div>
            </div>
        </div>
    )
}

export default Model