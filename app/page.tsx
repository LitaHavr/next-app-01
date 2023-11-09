import { getServerSession } from "next-auth";

import { authOptions } from "./api/auth/[...nextauth]/route";
export default async function Home() {

	const session = await getServerSession(authOptions)
	return (
		<main className="relative h-screen">
			<h1 className="font-poppins">Hello </h1>

		</main>
	);
}
