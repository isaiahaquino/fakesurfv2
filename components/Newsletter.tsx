import { FiMail } from 'react-icons/fi'

export default function Newsletter() {
  return (
    <div className='flex flex-col items-center py-20 gap-4 bg-white'>
      <h1 className='text-3xl font-bold'>Newsletter Signup</h1>
      <form className='flex flex-col sm:flex-row justify-center items-center gap-4'>
        <div className='flex flex-row items-center border-2 p-2 w-sm md:w-[20rem] lg:w-[30rem]'>
          <FiMail size={20} className='mx-2' />
          <input 
            type='text' 
            placeholder='Enter your email address'
            className='w-full focus:outline-0'
          ></input>
        </div>
        <button 
          type='submit'
          className="bg-slate-800 text-white h-full px-10 py-2.5 hover:bg-black rounded-sm"
        >SUBSCRIBE</button>
      </form>
      
    </div>
  )
}