import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {
	const navigation = [
		{ name: "Watch Now", href: "/#latest_ep" },
		{ name: "Recent Episodes", href: "/episodes" },
		{ name: "Podcast", href: "/podcast" },
		{ name: "About", href: "/about" }
	];
	return (
		<nav className="flex gap-4 flex-wrap items-center" aria-label="Top">
			{navigation.map(link => (
				<Link key={link.name} to={link.href} className="text-sm md:text-base font-medium uppercase text-gray-500 hover:text-blue-300">
					{link.name}
				</Link>
			))}
		</nav>
	);
}
