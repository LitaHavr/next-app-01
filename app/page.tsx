"use client"
export default  function Home() {
	return (
		<main className="relative h-screen">
			<h1 className="font-poppins">Hello </h1>
			<button onClick={async()=>{
				const _ = (await import ("lodash")).default
				const users =[
					{name:"c"},
					{name:"b"},
					{name:"d"}
				]
				// eslint-disable-next-line
				const sortedUsers=_.orderBy(users,["name"])
			}}>Show</button>
      
		</main>
	);
}


// just an example of 
// export async function generateMetada():Promise<Metada>{
// 	const product = await fetch("")

// 	return{
// 		title:"product.title",
// 		description:"..."
// 	}
// }
