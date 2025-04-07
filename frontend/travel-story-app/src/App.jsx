// eslint-disable-next-line no-unused-vars
import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
	return (
		<div>
			<Router>
				<Routes>
					<Route path="/dashboard" exact element={<Home />} />
					<Route path="/login" exact element={<Login />} />
					<Route path="/signup" exact element={<SignUp />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
