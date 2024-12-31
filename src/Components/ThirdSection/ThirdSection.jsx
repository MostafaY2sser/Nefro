
import image from '../../assets/images/ThirdSection/image (2).png'
import vedio from '../../assets/images/ThirdSection/vedio.png'


const ThirdSection = () => {
    return (
        <div className="flex justify-around my-10 lg:my-20 gap-5 py-5 md:py-10 px-3 md:px-10 bg-bgsection rounded-lg shadow-lg flex-col md:flex-row items-center md:items-start" id="three">
            <div className="text w-[100%] md:w-[40%] flex items-center md:items-start flex-col">
                <h4 className="text-maincolor text-[36px] font-[700] text-center md:text-start">Diet System</h4>
                <p className="text-[26px] md:text-[32px] font-[500] text-center md:text-start py-5" >Achieve your goals with a personalized diet plan tailored to your needs.</p>
                <button className='text-[26px] font-[500] mt-5 md:mt-20 mb-10 md:mb-0 bg-maincolor py-3 w-[200px] rounded-lg text-[white]'>Choose Now</button>
            </div>
            <div className="imageCenter">
                <img src={image} alt="" />
            </div>
            <div className="vedio w-[100%] md:w-[25%] flex flex-col gap-5 items-center md:items-start">
                <img src={vedio} alt="" />
                <p className="text-[14px] pl-3 text-center md:text-start">Lower Body Training focuses on strengthening and toning the muscles of the lower body, including glutes, thighs, and calves. It improves strength, stability, and balance with exercises like squats, lunges, and deadlifts.</p>
            </div>
        </div>
    )
}

export default ThirdSection
