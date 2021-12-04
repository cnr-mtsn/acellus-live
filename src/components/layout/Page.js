import React from 'react'
import Header from './Header';
import Footer from './Footer';
export default function Page({children}) {

	return (
		<div className="flex flex-1 flex-col justify-between items-center min-h-screen">
			<Header/>
			<main className="p-4 lg:p-8">{children}</main>
			<Footer/>
		</div>
	)
}
