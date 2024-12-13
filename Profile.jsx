import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./MyContext";
import { FaUserEdit } from "react-icons/fa";
import { TbPasswordUser } from "react-icons/tb";
import { RiLogoutCircleRFill } from "react-icons/ri";

const Profile = () => {
	const navigate = useNavigate();
	const { isLoggedIn } = useAuth();
	useEffect(() => {
		if (!isLoggedIn) navigate("/home");
	}, []);

	return (
		<div className="admin-container">
			<div className="menu-container">
				<ul>
					<li>
						<NavLink to="/logout">
							<RiLogoutCircleRFill /> Logout
						</NavLink>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Profile;