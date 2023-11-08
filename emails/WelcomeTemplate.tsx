import {Body,Container,Html,Link,Preview,Tailwind,Text} from "@react-email/components"
import React from 'react'
const WelcomeTemplate = ({name}:{name:string}) => {
	return (
<Html>
	<Preview>Holo </Preview>
	<Tailwind>
		<Body className="bg-white">
		<Container>
			<Text className="font-bold text-3xl">Holo again {name}</Text>
      <Link href='https://giphy.com/clips/studiosoriginals-party-podalienz-6N3MIPOsVHSuboy9Qw'>Want to belive?</Link>

		</Container>
	</Body>
	</Tailwind>
</Html>	)
}



export default WelcomeTemplate