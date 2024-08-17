import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {HEADING_SIZE,SECOND_BUTTON_BG,BUTTON_BG} from '../constants/color'
import Button from '../components/Button'

function SignUp() {
  const [name,setName] = useState('')
  const [userName,setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [showPassword,setShowPassword] = useState(true)
  
  return (
    <div className='h-screen w-full flex flex-wrap justify-around'>
    <div
    className='sm:w-1/2 getStarted hidden sm:flex sm:justify-center items-center'>
        <h1 className='text-4xl font-bold text-center'>Todo: Complete your tasks before Deadline</h1>
    </div>
    <div className='sm:w-1/2   w-full flex justify-center items-center'>
        <div className='w-2/3 flex flex-col gap-3'>
        <h1 style={{fontSize:HEADING_SIZE}}
        className='font-bold text-center'
        >Sign UP</h1>
        <form className='flex flex-col gap-7'>
            <input type="text" placeholder='Name'  className='input-box' onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder='User Name'  className='input-box' onChange={(e)=>setUserName(e.target.value)}/>
            <div className='relative'>
            <input type={showPassword?"password":"text"} placeholder='Password' className='input-box' onChange={(e)=>setPassword(e.target.value)}/>
            <span className='absolute right-0 cursor-pointer' onClick={()=>setShowPassword(!showPassword)}>show</span>
            </div>
        <Link to={'/dashboard'} className='flex'><Button title={'Sign up'} color={BUTTON_BG}/></Link>
        </form>
        <div className='flex justify-between items-center gap-3'>
            <div className='border-[#e9e6e6ab] border flex-1'></div>
            <div className='border-[#e9e6e6ab] border flex-1'></div>
        </div>
        <p className='text-center'>Already have an account? <Link to={'/login'} className='hover:text-blue-800'>Sign in</Link></p>
        </div>
    </div>
</div>
  )
}

export default SignUp