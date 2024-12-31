import FifthSection from "../../Components/FifthSection/FifthSection"
import FirstSection from "../../Components/FirstSection/FirstSection"
import Footer from "../../Components/Footer/Footer"
import FourthSection from "../../Components/FourthSection/FourthSection"
import Header from "../../Components/Header/Header"
import SecondSection from "../../Components/SecondSection/SecondSection"
import SixthSection from "../../Components/SixthSection/SixthSection"
import ThirdSection from "../../Components/ThirdSection/ThirdSection"



const Home = () => {
    return (
        <div>
            <Header/>
            <div className="content max-w-[1440px] mx-auto px-2 md:px-5 lg:px-10 ">
                <FirstSection/>
                <SecondSection/>
                <ThirdSection/>
                <FourthSection/>
                <FifthSection/>
                <SixthSection/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home
