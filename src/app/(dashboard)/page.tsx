"use client";
import React, { useState, useEffect } from 'react';
import HomeLoader from "../test/page";

export default function Home() {
	const [loading, setLoading] = useState(true);

	setTimeout(() => {
		setLoading(false);
	}, 500);
	  
	return (
		// <div>
		// 	{loading ? (
		// 		<HomeLoader/>
		// 	) : (
		// 		<div>This is the first page</div>
		// 	)}
		// </div>
		<div>
			<HomeLoader/>
		</div>
		
		
	);
}
