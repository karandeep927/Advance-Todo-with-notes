import React, { useContext, useState,useEffect,useRef } from 'react'
import Button from './Button'
import { SECOND_BUTTON_BG, BUTTON_BG } from '../constants/color';
import { dataContext } from '../context/store';
import PropTypes from 'prop-types'


function Model({ visibility, setVisibility }) {
    const {addNotes} = useContext(dataContext)
    const [title, setTitle] = useState('')
    const [desc, setDescription] = useState('')
    const [newId, setNewId] = useState(Date.now())
    const inputRef = useRef(null)
    const color = colorPicker()
    function colorPicker(){
        const colors = ['#CD5C08','#6A9C89','#1A4870','#179BAE']
        const index = Math.floor(Math.random()*colors.length)
        return colors[index]
    }
    const toggleModel = () => {
        setVisibility((prev) => !prev)
        setDescription("")
        setTitle("")
    }

    const handleData = () => {
        if (!title.trim()) {
            alert("Enter the title");
            return;
        }
        if (title) {
            setNewId(Date.now())
            const note = { id: newId, title: title, desc: desc ,color}
            addNotes(note)
        }
        toggleModel()
    }
    useEffect(()=>{
        if (visibility) {
            inputRef.current.focus();
        }
    },[visibility])

    return (
        <div className={`w-full h-screen bg-transparent flex justify-center items-center z-10 absolute ${!visibility ? 'hidden' : null}`}>
            <div className='w-3/6 h-3/4 rounded p-5 bg-white shadow-md border flex flex-col gap-4'>
                <h1 className='font-bold text-3xl text-center'>Add Notes</h1>
                <label htmlFor="title" className='text-2xl font-bold'>Title</label>
                <input type="text" name='title' ref={inputRef} placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} className='input-box' />
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

Model.propTypes = {
    visibility: PropTypes.bool.isRequired,
    setVisibility: PropTypes.func.isRequired,
  };


export default Model