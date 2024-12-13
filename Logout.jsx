import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.removeItem("token");
        window.location.href= "/dashboard"
    }, [])

    return (
        <div>

        </div>
    )
}

export default Logout
