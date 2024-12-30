
import slider_2 from '../..//assets/images/secondSection/slider_2.png'
import slider_3 from '../..//assets/images/secondSection/slider_3.png'
import slider_4 from '../..//assets/images/secondSection/slider_4.png'
import frame from '../..//assets/images/secondSection/frame.png'


const SecondSection = () => {

    const sliderImg = [
        {image : slider_2 },
        {image : slider_3 },
        {image : slider_4 },
        {image : slider_2 },
        {image : slider_3 }
    ]


    return (
        <div className="flex items-center flex-col gap-5 mt-5 lg:mt-20">
            <div className="title flex items-center flex-col gap-2">
                <span className="text-maincolor font-[700]">App Screen!</span>
                <h4 className="text-maincolor font-[700] text-[40px]">Show our App Screenshots!</h4>
                <p className="text-textcolor text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eosinventore <br /> omnis aliquid rerum alias molestias.</p>
            </div>
            <div className="slider flex items-center gap-10">
                {sliderImg.map((img , index) => (
                    <div className="img" key={index}>
                        <img src={img.image} alt="" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SecondSection


