import React from "react";

const navigation = [
	{ name: "Watch Now", href: "/#latest_ep" },
	{ name: "Recent Episodes", href: "/episodes.phtml" },
	{ name: "Podcast", href: "#" },
	{ name: "About", href: "/#about" },
];

export default function Header() {
	return (
		<header className="bg-white">
			<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
				<div className="w-full py-6 flex items-center justify-between">
					<div className="flex items-center">
						<a href="#">
							<span className="sr-only">Workflow</span>
							<img
								className="h-10 w-auto"
								src="/images/Science-Live-Logo-Hdr.png"
								alt="Science L!VE with Roger Billings"
							/>
						</a>
						<div className="hidden ml-10 space-x-8 lg:block"></div>
					</div>
					<div className="hidden ml-10 space-x-5 lg:block">
						{navigation.map(link => (
							<a
								key={link.name}
								href={link.href}
								className="text-base font-medium uppercase text-gray-500 hover:text-blue-300"
							>
								{link.name}
							</a>
						))}
					</div>
				</div>
				<div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
					{navigation.map(link => (
						<a
							key={link.name}
							href={link.href}
							className="text-base font-medium uppercase text-gray-500 hover:text-blue-300"
						>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
