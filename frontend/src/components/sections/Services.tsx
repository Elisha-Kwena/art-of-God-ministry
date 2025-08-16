import React from "react";
import banner1 from '../../../public/images/services/banner.jpg'
import banner2 from '../../../public/images/services/banner4.jpg'
import banner3 from '../../../public/images/services/banner.png'

import tea from '../../../public/images/icons/tea.png'
import worship from '../../../public/images/icons/praying.png'
import preach from '../../../public/images/icons/preach.png'
import sun from '../../assets/images/sun.png'
import bible from '../../assets/images/bible.png'

import SectionBreak from "../ui/SectionBreak";

const sunday = [
    {
        id:1,
        label:"First Service",
        banner1:preach,
        time:"8:00 am - 10:30 am",
    },
    {
        id:2,
        label:"Praise and Worship",
        banner1:worship,
        time:"10:30 am - 11:00 am",
    },
    {
        id:3,
        label:"Second Service",
        banner1:preach,
        time:"11:01 am - 1:00 pm",
    },
    {
        id:4,
        label:"Tea Taking",
        banner1:tea,
        time:"after 1:00 pm",
    },
    {
        id:5,
        label:"Church Departmental meetings and other special announcements",
        banner1:null,
        time:null,
    }
]
const Services:React.FC = () =>{
    return(
        <>
        <section className="welcome flex items-center justify-center py-10">
            <div className="w-[90%] mx-auto flex flex-col gap-2 items-center justify-center">
                <h1 className="text-[#ab4f43] text-6xl">Our church Services</h1>
                <p className="text-black text-xl mt-2 w-3/4 text-center"> At The Ark of God Ministry, we gather to seek God’s presence, grow in faith, and fellowship as a family.  
                Join us for powerful services filled with worship, the Word, and miracles. All are welcome!</p>

                {/* Services Container */}
                <div className="grid grid-cols-1 place-items-start sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto py-8">
                    

                    {/* Sunday Service */}
                    <div className="flex items-start justify-center flex-col">
                        <div className="banner w-full h-[230px] overflow-hidden rounded-md">
                            <img src={banner1} alt="" className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="w-full mt-2">
                            <h1 className="font-bold text-xl">Sunday Services</h1>
                            <div className="grid grid-cols-2 gap-1">

                                {sunday.map(item =>(
                                    <div 
                                    key={item.id}
                                    className="w-full gap-1 flex items-center justify-start"
                                    >
                                        {item.banner1 && (
                                            <div className="border p-1 rounded-sm border-black">
                                                <img src={item.banner1 as string} alt="" className="w-8" />
                                            </div>
                                        )}
                                        <div className="flex flex-col gap-0 items-start justify-center">
                                            <h1 className="text-md text-[#ab4f43]">{item.label}</h1>
                                            <div className="flex items-start justify-center gap-2">
                                                {item.time && (
                                                    <p className="text-black font-bold text-sm">{item.time}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    {/* Wednesday Service */}
                    <div className="flex items-start justify-center flex-col gap-2 ">
                        <div className="banner w-full h-[230px] overflow-hidden rounded-md">
                            <img src={banner2} alt="" className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-bold text-xl">Wednesday</h1>
                            <div className="flex items-start justify-start gap-2">
                                <div className="border p-1 rounded-sm border-black">
                                    <img src={sun} alt="" className="w-8" />
                                </div>
                                <div className="flex items-start justify-center flex-col">
                                    <h1 className="text-md text-[#ab4f43]">Midday Service</h1>
                                    <p className="text-black font-bold text-sm">10:00 am - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Saturday Service */}
                    <div className="flex items-start justify-center flex-col gap-2">
                        <div className="banner w-full h-[230px] overflow-hidden rounded-md">
                            <img src={banner3} alt="" className="w-full h-full object-cover rounded-md hover:scale-125 transition-all duration-300 ease-in-out" />
                        </div>
                        <div className="w-full">
                            <h1 className="font-bold text-xl">Wednesday</h1>
                            <div className="flex items-start justify-start gap-2">
                                <div className="border p-1 rounded-sm border-black">
                                    <img src={bible} alt="" className="w-8" />
                                </div>
                                <div className="flex items-start justify-center flex-col">
                                    <h1 className="text-md text-[#ab4f43]">Door to door Prayers</h1>
                                    <p className="text-black font-bold text-sm">10:00 am - 12:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <SectionBreak/>
            </div>
        </section>
        </>
    )
}
export default Services