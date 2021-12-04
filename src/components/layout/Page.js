import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Page = ({ children }) => {
	return (
		<div>
			<Header />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Page;
