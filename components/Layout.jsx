import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useStateContext } from "../context/StateContext";


const Layout = ({ children }) => {

	const {lightTheme} = useStateContext();


	return (
		<div className={"body"+ (lightTheme?" light-theme":"")}>
			<Head>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				></link>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				></link>
				<title>Binsaleh Realtors</title>
				<meta
					name="description"
					content="Real Estate Around Pakistan!"
				/>
			</Head>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Layout;
