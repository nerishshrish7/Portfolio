import React, { useState } from 'react';
import login from '../assets/login.png';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../Api/Api';
import { queryKeys } from '../Api/Constants';

const Reset = () => {
  const queryParameters = new URLSearchParams(window.location.search);
  const id = queryParameters.get('id');
  const token = queryParameters.get('token');

  const [input, setInput] = useState({
    npassword: '',
    cpassword: '',
    password: '',
    resetString: token,
    userId: id,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.npassword !== input.cpassword) {
      toast.error('Passwords do not match');
    }
    mutation.mutate(input);
    console.log(input)
  }
  const mutation = useMutation({
    mutationFn: (formData) => postData(queryKeys.RESET, formData),
    onSuccess: () => {
      toast.success('Message sent successfully!');
      setInput({ password: '', resetString: '', userId: '' });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  });

  return (
    <div className='h-[85vh] w-[100%] bg-black flex justify-center items-center'>
      <div className='h-[60vh] w-[55%] bg-[#120929] rounded-lg flex justify-center items-center mt-[-10vh] gap-[3vw]'>
        <div>
          <img src={login} alt="Login" height={300} width={300} />
        </div>
        <form className='flex flex-col justify-center' onSubmit={handleSubmit}>
          <label className='text-white font-semibold text-[1.75vw]'>Reset Password</label>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw]'>New Password</label>
            <input
              type="password"
              className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh]'
              name='npassword'
              value={input.npassword}
              onChange={handleInput}
              placeholder='Enter your new password'
            />
          </div>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw]'>Confirm Password</label>
            <input
              type="password"
              className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh]'
              name='cpassword'
              value={input.cpassword}
              onChange={handleInput}
              placeholder='Confirm your new password'
            />
          </div>
          <button type="submit" className='h-[6.5vh] w-[15vw] mt-[3vh] bg-[#0D6EFD] duration-500 ease-in-out hover:bg-[#0d6dfdb0] rounded text-white'>
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Reset;
