//App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from "./pages/home/home";
import PageNotFound from "./pages/pageNotFound/pageNotFound";
import CounterLayout from "./components/CounterLayout";
import ErrorBoundaryTest from "./pages/errorBoundaryTest/errorBoundaryTest";

const App = () => {
	return (
		<BrowserRouter className="App">
			<Helmet>
        		<title>Counter App</title>
				<meta name="description" content="A simple and interactive counter app to increment, decrement, and reset counters." />
        		<meta name="keywords" content="counter, increment, decrement, reset, react app" />
      		</Helmet>
			<CounterLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="error" element={<ErrorBoundaryTest />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</CounterLayout>
		</BrowserRouter>
	);
};

export default App;
