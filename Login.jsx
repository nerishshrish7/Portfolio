import React, { useEffect, useState } from 'react';
import login from '../assets/login.png';
import {  NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from './MyContext';

const Login = () => {
  useEffect(() => {
		if (isLoggedIn) navigate("/home");
	});

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const { storeToken, isLoggedIn} = useAuth();

	const URL = `https://api.durlavparajuli.com.np/api/auth/login`;
	const handleInput = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		setUser({ ...user, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user),
			});

			const res_data = await response.json();
			if (response.ok) {
				console.log(res_data);
				storeToken(res_data.token);
				setUser({
					email: "",
					password: "",
				});
				toast.success("Login Successful ");
				navigate({
					pathname: "/home",
				});
			} else {
				setLoading(false);
				toast.error(res_data.extraDetails || res_data.message);
			}

			console.log(response);
		} catch (error) {
			console.log("login", error);
		}
	};

  return (
    <div className='h-[85vh] w-[100%] bg-black flex justify-center items-center'>
      <div className='h-[75vh] w-[58%] bg-[#120929] rounded- flex justify-center items-center gap-[5vw]'>
        <div>
          <img src={login} alt="Login" height={280} width={280} />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
          <label className='text-white font-semibold text-[1.75vw]'>Login Here</label>
          <div className='flex flex-col pt-[5vh]'>
            <label className='text-white font-bold text-[1.2vw]'>Email</label>
            <input type="email" name='email' className='h-[8vh] w-[25vw] pl-[1vw] rounded mt-[1vh]' value={user.email} onChange={handleInput} placeholder='Enter your email address' />
          </div>
          <div className='flex flex-col pt-[3vh]'>
            <label className='text-white font-bold text-[1.2vw]'>Password</label>
            <input type='password' name='password' className='h-[8vh] w-[25vw] rounded pl-[1vw] mt-[1vh]' value={user.password} onChange={handleInput} placeholder='Enter your password' />
          </div>
          <div className='flex mt-[3vh] gap-[1vw]'>
            <button type="submit" className='h-[6.5vh] w-[5vw] bg-[#0D6EFD] duration-500 ease-in-out hover:bg-[#0d6dfdb0] text-[1.2vw] rounded text-white '>Login</button>
            <button type="button" onClick={() => navigate('/register')} className='h-[6.5vh] w-[9vw] bg-[#198754] text-[1.2vw] duration-500 ease-in-out hover:bg-[#198754b0] rounded text-white'>
              Register Now
            </button>
          </div>
          <button type="button" onClick={() => navigate('/forgot')} className='h-[6.5vh] w-[11vw] bg-[#DC3545] text-[1.2vw] duration-500 ease-in-out hover:bg-[#dc3546b0] mt-[3vh] rounded text-white'>
            Forgot Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
