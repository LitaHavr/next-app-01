"use client"
import Link from "next/link";
import { signIn,useSession } from "next-auth/react";
import React from "react";

const NavBar = () => {
	const {status,data:session}=useSession()

	return (
		<div className="flex bg-slate-200 p-5">
			<Link href="/" className="mr-5">
				Next.js
			</Link>
			<Link href="/users" className="mr-5">
				Users
			</Link>
			{status==="loading" &&  <div>Loading ...</div>}

			{status === "authenticated" && <div>{session.user!.name}</div>}
			{	status === "unauthenticated" && <button onClick={()=>signIn()} className="mr-5">
				Login
			</button>}
		
		</div>
	);
};

export default NavBar;
