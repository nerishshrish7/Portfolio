import { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const MyContext = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token"));
	const [user, setUser] = useState({});

	const [loading, setLoading] = useState(true);

	const storeToken = (serverToken) => {
		setToken(serverToken);
		return localStorage.setItem("token", serverToken);
	};
	const LogoutUser = () => {
		setToken("");
		localStorage.removeItem("token");
	};

	let isLoggedIn = !!(token === localStorage.getItem("token"));
	console.log("Login Status: " + isLoggedIn);

	const userAuthentication = async () => {
		try {
			const response = await fetch(`https://api.durlavparajuli.com.np/api/auth/user`, {
				method: "GET",
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (response.ok) {
				const data = await response.json();
				setUser(data.userData);
			} else {
				LogoutUser();
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		if (!token) {
			LogoutUser();
		} else {
			userAuthentication();
		}
	}, [token]);

  useEffect(() => {
		const loadAPI = async () => {
			try {
				const response = await fetch(`${API}`, {
					method: "GET",
				});
				// console.log( response );
				if (response.ok) {
					const data = await response.json();
					console.log("serverData ", data);
					setLoading(false);
				}
			} catch (error) {
				toast.error("Failed to connect to the server");
			}
		};
		loadAPI();
	}, []);


	return (
		<AuthContext.Provider
			value={{ isLoggedIn, storeToken, LogoutUser, user, token, loading }}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const authContextValue = useContext(AuthContext);
	if (!authContextValue) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return authContextValue;
};