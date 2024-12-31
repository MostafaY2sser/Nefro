


import { useState } from 'react';
import headerImg from '../../assets/images/header-img.png';
import logo from '../../assets/images/logo (2).png';

const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة لإظهار أو إخفاء القائمة

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsMenuOpen(false); // غلق القائمة بعد اختيار رابط
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // تبديل حالة القائمة
    };

    const links = [
        { text: "Home", path: "#" },
        { text: "Why choose us", path: "#one" },
        { text: "Programs", path: "#three" },
        { text: "Diet Plans", path: "#three" },
        { text: "Download", path: "#four" },
    ];

    return (
        <div
            style={{
                backgroundImage: `url(${headerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <header className="flex items-center justify-between px-4 md:px-5 lg:px-10 py-3 relative">
                <img src={logo} alt="logo" className="w-[100px] lg:w-[150px]" />
                <ul
                    className={`${
                        isMenuOpen
                        ? "flex flex-col absolute top-[70px] left-0 w-full bg-black bg-opacity-90 py-5"
                        : "hidden"
                        } md:flex items-center justify-end gap-5 lg:gap-7 flex-1 text-[white] text-[18px] lg:text-[20px]`}
                >
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.path}
                                onClick={() => handleTabClick(index)}
                                className={`${
                                    activeTab === index
                                ? "border-b-4 border-maincolor text-maincolor"
                                : "text-white"
                                } pb-2 block px-5`}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            <div
                className="bar flex items-center justify-center md:hidden cursor-pointer"
                onClick={toggleMenu}
            >
                {isMenuOpen ? (
                // أيقونة "X"
                <span className="text-maincolor text-[30px] font-bold">X</span>
                ) : (
                 // أيقونة الـ "Bar"
                <div className="flex flex-col gap-2">
                    <span className="h-[3px] bg-maincolor w-[30px]"></span>
                    <span className="h-[3px] bg-maincolor w-[30px]"></span>
                    <span className="h-[3px] bg-maincolor w-[30px]"></span>
                </div>
            )}
            </div>
        </header>
        <div className="heroHome flex items-center justify-center py-40 flex-col gap-5">
            <p className="text-[22px] lg:text-[40px] font-[700] text-[white] text-center">
                Set your goals, track your fitness level,
                <br />
                and get a comprehensive plan that
                <br />
                combines workouts and nutrition.
                </p>
            <button className="bg-maincolor text-[white] text-[20px] font-[700] rounded-lg px-5 lg:px-10 py-3">
                Start Now
            </button>
        </div>
    </div>
  );
};

export default Header;































