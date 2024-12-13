import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './MyContext';

const Dashboard = () => {
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      console.log(token)

      if (!token) {
        console.log("No token available");
        return;
      }

      const url = "https://api.durlavparajuli.com.np/api/auth/user";

      try {
        const response = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        });

        console.log(response.data);
      } catch (error) {
        console.error("Error:", error.response || error);
      }
    };

    fetchData();
  }, [token]);

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login')
    }
  }

  useEffect(() => {
    checkLogin();
  }, [])
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
