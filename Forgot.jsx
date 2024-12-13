import React, { useState } from 'react'
import login from '../assets/login.png'
import { useMutation } from '@tanstack/react-query';
import { postData } from '../Api/Api';
import { queryKeys } from '../Api/Constants';
import { toast } from 'react-toastify';

const Forgot = () => {
  const [input, setInput] = useState(
    {
      email:''
    }
  );
  
  const handleInput = (e) =>{
    let email = e.target.name;
    let value = e.target.value;

    setInput({...input, [email]:value})
  }

  const mutation = useMutation({
    mutationFn: (formData) => postData(queryKeys.FORGOT, formData),
    onSuccess: () => {
      toast.success('Message sent successfully!');
      setInput({ email: ''});
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  });

  const handleSubmit=async(e)=>{
    e.preventDefault();
    mutation.mutate(input);
    console.log(input)
  }

  return (
    <div className='h-[85vh] w-[100%] bg-black flex justify-center items-center'>
      <div className='h-[60vh] w-[55%] bg-[#120929] rounded-lg flex justify-center items-center mt-[-10vh] gap-[3vw]'>
        <div>
          <img src={login} alt="Login" height={300} width={300} />
        </div>
        <form className='flex flex-col justify-center'>
          <label className='text-white font-semibold text-[1.75vw] mt-[-10vh]'>Forgot Password?</label>
          <div className='flex flex-col pt-[5vh]'>
            <label className='text-white font-bold text-[1.2vw]'>Email</label>
            <input type="email" className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh]' name='email' value={input.email} onChange={handleInput} placeholder='Enter your email address' />
          </div>
          <button type="submit" onClick={handleSubmit} className='h-[6.5vh] w-[15vw] mt-[5vh] bg-[#0D6EFD] duration-500 ease-in-out hover:bg-[#0d6dfdb0] rounded text-white'>Send Verification Email</button>
        </form>
      </div>
    </div>
  )
}

export default Forgot
