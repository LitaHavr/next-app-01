"use client"
import dynamic from "next/dynamic"
import { useState } from "react";


const HeavyComponent = dynamic(()=>import ("./components/HeavyComponent"),{ssr:false,loading:()=><p>Loading...</p>})

export default  function Home() {
const [isVisible,setVisible]=useState(false)
	return (
		<main className="relative h-screen">
			<h1 className="font-poppins">Hello </h1>
			<button onClick={()=>setVisible(true)}>Show</button>
			{isVisible &&<HeavyComponent/> }
      
		</main>
	);
}


// just an example of 
export async function generateMetada():Promise<Metada>{
	const product = await fetch("")

	return{
		title:"product.title",
		description:"..."
	}
}
