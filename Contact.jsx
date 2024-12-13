import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { postData} from '../Api/Api';
import { queryKeys } from '../Api/Constants';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const mutation = useMutation({
    mutationFn: (formData) => postData(queryKeys.CONTACT, formData),
    onSuccess: () => {
      toast.success('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
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
    <div className='h-[85vh] w-[100%] bg-black'>
      <h1 className='text-[2vw] text-white ml-[8.5vw] pt-[2vh]'>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col pl-[8.5vw] pt-[4vh]'>
          <label className='text-white font-bold text-[1.25vw]'>Username</label>
          <input
            type="text"
            name='name'
            placeholder='Enter your username'
            value={form.name}
            onChange={handleInput}
            className='h-[8vh] w-[75vw] rounded pl-[1vw]'
          />
        </div>
        <div className='flex flex-col pl-[8.5vw] pt-[4vh]'>
          <label className='text-white font-bold text-[1.25vw]'>Email</label>
          <input
            type="email"
            name='email'
            className='h-[8vh] w-[75vw] pl-[1vw] rounded'
            onChange={handleInput}
            value={form.email}
            placeholder='Enter your email address'
          />
        </div>
        <div className='flex flex-col pl-[8.5vw] pt-[4vh]'>
          <label className='text-white font-bold text-[1.25vw]'>Message</label>
          <textarea
            rows={3}
            name='message'
            value={form.message}
            onChange={handleInput}
            className='resize-none w-[75vw] pt-[2vh] rounded pl-[1vw]'
            placeholder='Enter your message'
          ></textarea>
        </div>
        <button
          type="submit"
          className='h-[7vh] w-[8vw] bg-[#198754] duration-500 ease-in-out hover:bg-[#198754b0] ml-[8.5vw] mt-[7vh] rounded text-white font-medium'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
