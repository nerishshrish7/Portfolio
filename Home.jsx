import { useEffect } from "react";
import { useAuth } from "./MyContext";

const Home = () => {
	const { user, token } = useAuth();
	return (
		<>
			<h2 className="text-[white] font-[3vw]">Welcome, { token ? user.username : "Guest"}</h2>
		</>
	);
};

export default Home;