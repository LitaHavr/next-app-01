"use client"
import { CldImage,CldUploadWidget } from 'next-cloudinary'
import React,{useState} from 'react'
interface CloudinaryResult{
	public_id:string
}

const UploadPage = () => {
	const [publicId,setPublicId] = useState("")
	return (
		<div>
			{publicId && <CldImage src={publicId} width={270} height={180} alt="marvel"/>}
			<CldUploadWidget
			options={{sources:["camera","local","google_drive"],multiple:false,maxFiles:5}}
			 uploadPreset='xlx3s4ip' onUpload={(result)=>{if(result.event!=="success")return
			const info = result.info as CloudinaryResult
		 setPublicId(info.public_id)
		}}>
				{({open})=><button className='btn btn-primary' onClick={()=>open()}>Upload</button>}
			</CldUploadWidget>
		</div>
	)
}

export default UploadPage