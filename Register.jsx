import React, { useState } from 'react'
import login from "../assets/login.png"
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postData } from '../Api/Api';
import { queryKeys } from '../Api/Constants';


const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phone: '',
    password: ''
  });

  const mutation = useMutation({
    mutationFn: (formData) => postData(queryKeys.REGISTER, formData),
    onSuccess: () => {
      toast.success('Message sent successfully!');
      setForm({ username: '', email: '', phone: '', password: '' });
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || 'An error occurred. Please try again.');
    }
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(form);
    console.log(form)
  };
  return (
    <div className='h-[120vh] w-[100%] bg-black flex justify-center items-center'>
      <div className='h-[110vh] w-[60%] bg-[#120929] rounded-lg flex justify-center items-center gap-[3vw] max-md:flex-col'>
        <div className='max-md:size-40'>
          <img src={login} alt="Login" height={350} width={350}/>
        </div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label className='text-white font-semibold text-[1.75vw] max-md:text-[2.5vw]'>Registration Form</label>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw] max-md:text-[2vw]'>Username</label>
            <input type="text" className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh] max-md:h-[7vh] max-md:w-[40vw]' name='username' value={form.username} onChange={handleInput} placeholder='Enter your username' />
          </div>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw] max-md:text-[2vw]'>Email</label>
            <input type="email" className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh] max-md:h-[7vh] max-md:w-[40vw]' name='email' value={form.email} onChange={handleInput} placeholder='Enter your email address' />
          </div>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw] max-md:text-[2vw]'>Phone</label>
            <input type="text" className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh] max-md:h-[7vh] max-md:w-[40vw]' name='phone' value={form.phone} onChange={handleInput} placeholder='Enter your phone' />
          </div>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw] max-md:text-[2vw]'>Password</label>
            <input type='password' className='h-[8vh] w-[25vw] rounded pl-[1vw] mt-[1vh] max-md:h-[7vh] max-md:w-[40vw]' name='password' value={form.password} onChange={handleInput} placeholder='Enter your password' />
          </div>
          <button type="submit" className='h-[6.5vh] w-[9vw] mt-[5vh] bg-[#0D6EFD] duration-500 ease-in-out hover:bg-[#0d6dfdb0] rounded text-white max-md:w-[15vw]'>Register Now</button>
        </form>
      </div>
    </div>
  )
}

export default Register
