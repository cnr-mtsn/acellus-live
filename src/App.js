import React from "react";
// import Page from "./components/layout/Page";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page from "./components/layout/Page";
import Home from "./pages/Home";
import Episodes  from './pages/Episodes'
import Podcast from "./pages/Podcast";

export default function App() {
	return (
		<>
			<Helmet>
				<title>Science LIVE with Roger Billings</title>
				<link rel="stylesheet" type="text/css" href="/magnific-popup.css"></link>
				<script type="text/javascript" src="/jquery.magnific-popup.js"></script>
			</Helmet>
			<Router>
				<Page>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/episodes" element={<Episodes />} />
						<Route path="/podcast" element={<Podcast />} />
					</Routes>
				</Page>
			</Router>
		</>
	);
}
