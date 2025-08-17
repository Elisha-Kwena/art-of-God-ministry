import React from "react";

interface WelcomeProps{
    label:string;
    banner:string;
    description:string
}

const WelcomeCard:React.FC<WelcomeProps> = ({label,banner,description}) =>{
    return(
        <>
        <div className="lg:shadow-none shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)] flex flex-col group gap-4 items-center p-4 rounded-md transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_1px_2px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.6)]" data-aos="zoom-in" data-aos-delay="1500">
            <img src={banner} alt="" className="w-20"/>
            <h1 className="text-black text-3xl font-bold group-hover:text-[#ab4f43]">{label}</h1>
            <p className="text-center text-xl">{description}</p>
        </div>
        </>
    )
}
export default WelcomeCard
