

import { useState } from 'react';
import headerImg from '../../assets/images/header-img.png'
import logo from '../../assets/images/logo (2).png'


const Header = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const links = [
        {text : "Home" , path : "#"},
        {text : "Why choose us" , path : "#"},
        {text : "Programs" , path : "#"},
        {text : "Diet Plans" , path : "#"},
        {text : "Download" , path : "#"},
    ]


    return (
        <div 
            className=""
            style={{
                backgroundImage: `url(${headerImg})`, 
                backgroundSize: "cover", 
                // backgroundPosition: "center",
                // height: "100vh", 
                backgroundRepeat:"no-repeat"
            }}
        >
            <header className="flex items-center justify-between px-2 md:px-5 lg:px-10 py-3">
                <img src={logo} alt="logo" 
                    className="w-[100px] lg:w-[150px]"
                />
                <ul className="hidden md:flex items-center justify-end gap-10 flex-1 text-[white] text-[22px]">
                    {links.map((link , index) => (
                        <li key={index}>
                            <a href={link.path}
                            onClick={() => handleTabClick(index)}
                                className={`${
                                activeTab === index
                                    ? "border-b-4 border-maincolor text-maincolor"
                                    : "text-white"
                                } pb-2`}
                        >{link.text}</a>
                        </li>
                    ))}
                </ul>
            </header>
            <div className="heroHome flex items-center justify-center py-40 flex-col gap-5">
                <p className="text-[22px] lg:text-[40px] font-[700] text-[white] text-center">Set your goals, track your fitness level,<br />
                    and get a comprehensive plan that <br />
                    combines workouts and nutrition.
                </p>
                <button className='bg-maincolor text-[white] text-[20px] font-[700] rounded-lg px-5 lg:px-10 py-3'>Start Now</button>
            </div>
        </div>
    )
}

export default Header



