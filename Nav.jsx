import { NavLink } from "react-router-dom";
import "../assets/Navbar.css";
import { useAuth } from "./MyContext";
import { MdHome, MdDashboard } from "react-icons/md";
import { RiLoginCircleFill } from "react-icons/ri";
import { IoMdMail } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";
import { GrServices } from "react-icons/gr";
import { FaUser } from "react-icons/fa";

const Nav = () => {
	const { isLoggedIn, user } = useAuth();

	if (user.username) {
		var fullUserName = user.username;
		let trimmedText = fullUserName.trim();
		let words = trimmedText.split(" ");
		var userFirstName = words[0];
	}

	return (
		<>
			<header>
				<div className="container">
					<div className="logo-brand">Portfolio</div>
					<nav>
						<ul>
							<li>
								<NavLink to="/home">
									<MdHome className="inline"/> Home
								</NavLink>
							</li>
							<li>
								<NavLink to="/about">
									<IoInformationCircle className="inline"/> About
								</NavLink>
							</li>
							<li>
								<NavLink to="/services">
									<GrServices className="inline"/> Services
								</NavLink>
							</li>
							<li>
								<NavLink to="/contact">
									<IoMdMail className="inline"/> Contact
								</NavLink>
							</li>

							{isLoggedIn && user.isAdmin ? (
								<li>
									<NavLink to="/dashboard">
										{" "}
										<MdDashboard className="inline"/> Dashboard
									</NavLink>
								</li>
							) : null}

							{isLoggedIn ? null : (
								<>
									<li>
										<NavLink to="/login">
											{" "}
											<RiLoginCircleFill className="inline"/> Login
										</NavLink>
									</li>
								</>
							)}
						</ul>
					</nav>
					{isLoggedIn ? (
						<div className="user-panel">
							<li className="username">
								<NavLink to="/profile">
									<FaUser className="inline"/> {userFirstName}
								</NavLink>
							</li>
						</div>
					) : null}
				</div>
			</header>
		</>
	);
};

export default Nav;
