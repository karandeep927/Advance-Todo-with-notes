import { BUTTON_BG,HEADING_SIZE,SECOND_BUTTON_BG} from '../constants/color'
import {Link} from "react-router-dom"
import Button from '../components/Button'

function Login() {
  return (
    <div className='h-screen w-full flex flex-wrap justify-around'>
        <div
        className='sm:w-1/2 getStarted hidden sm:flex sm:justify-center items-center'>
            <h1 className='text-4xl font-bold text-center'>Todo: Complete your tasks before Deadline</h1>
        </div>
        <div className='sm:w-1/2   w-full flex justify-center items-center'>
            <div className='w-2/3 flex flex-col gap-3'>
            <h1 style={{fontSize:HEADING_SIZE}}
            className='font-bold'
            >Sign in</h1>
            <form className='flex flex-col gap-7'>
                <input type="text" placeholder='User Name'  className='input-box'/>
                <input type="password"  placeholder='Password' className='input-box'/>
            <Link to={'/dashboard'} className='flex'><Button title={'Sign in'} color={BUTTON_BG}/></Link>
            </form>
            <div className='flex justify-between items-center gap-3'>
                <div className='border-[#e9e6e6ab] border flex-1'></div>
                <p className='text-xl text-[#d8d7d7]'>or</p>
                <div className='border-[#e9e6e6ab] border flex-1'></div>
            </div>
            <div className='flex justify-between gap-4'>
                <Button title={'Google'} color={SECOND_BUTTON_BG}/>
                <Button title={'Facebook'} color={SECOND_BUTTON_BG}/>
            </div>
            <p className='text-center'>Don't have an account? <Link to={'/signup'} className='hover:text-blue-800'>Sign up</Link></p>
            </div>
        </div>
    </div>
  )
}

export default Login