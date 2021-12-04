import React from "react";
import { Link } from "react-router-dom";
import Nav from './Nav'

const Logo = () => (
	<Link to="/" className="flex self-start">
		<span className="sr-only">Workflow</span>
		<img className="h-10 w-auto" src="/images/Science-Live-Logo-Hdr.png" alt="Science L!VE with Roger Billings" />
	</Link>
);
export default function Header() {
		return (
			<header className="header">
				<Logo/>
				<Nav/>
			</header>
		);
}

