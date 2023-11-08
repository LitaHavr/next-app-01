import { NextResponse } from "next/server"
import {Resend} from "resend"

import WelcomeTemplate from "@/emails/WelcomeTemplate"
const resend = new Resend (process.env.RESEND_API_KEY)

export async function POST() {
	await resend.emails.send({
		from:"feedback-smtp.us-east-1.amazonses.com",
		to:"lolita.gavr@gmail.com",
		subject:"....",
		react: WelcomeTemplate ({name:"lita"})
	})
	return NextResponse.json({})
}
