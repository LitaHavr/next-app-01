import Link from "next/link";
import React, { Suspense } from "react";

import UserTable from "./UserTable";

interface Props {
	searchParams: { sortOrder: string };
}

const UsersPage = ({ searchParams: { sortOrder } }: Props) => {
	return (
		<>
			<div>UsersPage</div>
			<h1>Users</h1>
			<Link href="/users/new" className="btn">
				New
			</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<UserTable sortOrder={sortOrder} />
			</Suspense>
		</>
	);
};

export default UsersPage;
