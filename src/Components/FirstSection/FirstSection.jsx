
import checked from '../../assets/images/firstSection/checked.png'
import border from '../../assets/images/firstSection/border.png'
import image from '../../assets/images/firstSection/mop.png'


const FirstSection = () => {

    const data = [
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
        {text : " Expert Support Access professional trainers and nutritionists through live chat for personalized advice and motivation."},
    ]

    return (
        <div className="my-5 lg:my-10 flex items-center justify-center flex-col gap-5">
            <div className="title text-[40px] font-[700] relative after:content-[''] after:absolute after:bg-maincolor after:rounded-lg after:w-[30%] after:h-[5px] after:bottom-[-12px] after:right-[50%] after:translate-x-[50%] 
                before:content-[''] before:absolute before:bg-[#333333b2] before:w-[50%] before:h-[1px] before:bottom-[-10px] before:right-[50%] before:translate-x-[50%] ">
                <span className="text-maincolor">Why</span>
                <span> Choose US ?</span>
            </div >
            <div className="content flex items-center mt-5 lg:mt-20 gap-0 lg:gap-5 w-[100%] lg:w-[93%] flex-col lg:flex-row">
                <div className="left flex gap-5 lg:gap-20 flex-col w-[100%] lg:w-[50%] px-3 lg:px-0">
                    {data.slice(0, 3).map((item , index) =>(
                        <div 
                            key={index}
                            className={`bg-[#D9D9D966] py-5 px-10 relative rounded-lg w-[100%] shadow-lg ${
                                index === 1 ? 'ml-[0] lg:ml-[-70px]' : '' 
                            }`}
                        >
                            <p className="text-center">{item.text}</p>
                            <img className="absolute top-3 left-3" src={checked} alt="" />
                        </div>
                    ))}
                </div>
                <div className="center  flex justify-center  flex-col">
                    <img className='mb-[-100px] min-w-[100%] lg:min-w-[150%] ml-[-100px] hidden lg:block' src={border} alt="" />
                    <img className='mt-[-30px] lg:mt-[-400px] w-[90%] ml-5' src={image} alt="" />
                </div>
                <div className="right flex gap-5 lg:gap-20 flex-col w-[100%] lg:w-[50%] px-3 lg:px-0">
                    {data.slice(3, 6).map((item , index) =>(
                        <div 
                            key={index}
                            className={`bg-[#D9D9D966] py-5 px-10 relative rounded-lg w-[100%] shadow-lg ${
                                index === 1 ? 'ml-[0] lg:ml-[60px]' : '' 
                            }`}
                        >
                            <p className="text-center">{item.text}</p>
                            <img className="absolute top-3 left-3"  src={checked} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FirstSection
