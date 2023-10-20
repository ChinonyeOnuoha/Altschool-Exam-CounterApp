//App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import CounterLayout from "./components/CounterLayout";

const App = () => {
	return (
		<BrowserRouter>
			<CounterLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/page-not-found" element={<PageNotFound />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</CounterLayout>
		</BrowserRouter>
	);
};

export default App;
