import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface ClergyProps{
    name:string;
    title:string;
    role:string;
    responsibilities:string;
    image:string;
    bio:string;
    phone:string;
    email:string
}
const ClergyCard:React.FC<ClergyProps> = ({
    name,
    title,
    role,
    responsibilities,
    image,
    bio,
    phone,
    email
}) =>{
    return(
        <>
        <div className="w-[300px] h-[450px] border relative rounded-md shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)]">
            <div className="absolute w-full top-0 left-0 h-full rounded-md">
                <img src={image} alt="" className="w-full h-full object-cover object-top rounded-md" />
            </div>
            <div className="relative z-10 w-full h-full backdrop-blur-[2px] flex flex-col itms-start">
                <div className="top w-full h-[200px] relative overflow-hidden rounded-t-md">
                    <div className="absolute  w-[120px] h-[120px] rounded-full bottom-0 z-10 left-4">
                        <img src={image} alt="" className="w-full h-full rounded-full object-cover object-top" />
                    </div>
                    <div className="absolute -bottom-[130px] left-0 w-[400px] h-[200px] bg-white/70 -rotate-[10deg]"></div>
                </div>
                <div className="bottom  bg-white/70 h-[calc(100%-200px)] rounded-b-sm p-2 flex flex-col">
                    <div className="flex-grow">
                        <h1 className="text-2xl font-bold">{name}</h1>
                        <p className="text-black">{title}</p>
                        <p className="text-[#ab4f43] font-bold">{role}</p>
                        <p>{responsibilities}</p>
                        <p>{bio}</p>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                        <a href={`tel:${phone}`} className="flex w-1/2 items-center justify-start gap-2 bg-green-500 p-2 rounded-[3px]">
                            <FontAwesomeIcon icon={faPhone} className="text-white text-sm"/>
                            <span className="text-[10px]">{phone}</span>
                        </a>
                        <a href={`mailto:${email}`} className="flex items-center w-1/2 justify-start gap-2 bg-blue-500 rounded-[3px] p-2">
                            <FontAwesomeIcon icon={faEnvelope} className="text-sm text-red-600"/>
                            <span className="text-[10px] overflow-hidden">{email}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default ClergyCard

