

import app from '../../assets/images/SixthSection/app.png'
import play  from '../../assets/images/SixthSection/play store.png'
import group from '../../assets/images/SixthSection/group.png'
import bg  from '../../assets/images/SixthSection/bg.png'



const SixthSection = () => {
    return (
        <div 
            className="flex items-center justify-evenly py-10 lg:py-20 my-10 rounded-lg flex-col-reverse lg:flex-row gap-y-5 "
            style={{
                backgroundImage: `url(${bg})`, 
                backgroundSize: "cover", 
                backgroundPosition: "center",
                // height: "100vh", 
                backgroundRepeat:"no-repeat"
            }}
            id="four"
        >
            <div className="text w-[100%] lg:w-[40%] px-3 lg:px-0">
                <h4 className="text-[34px] lg:text-[40px] font-[700] text-[white] text-center lg:text-start">Build Your Ideal Fitness Journey Today.</h4>
                <p className="text-[14px] text-[white] py-5 text-center lg:text-start">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                    distinctio vero facilis numquam sapiente! Eaque inventore eveniet
                    repellendus quod maiores nulla.
                </p>
                <div className="dwonload flex items-center gap-5 justify-center">
                    <img  className='cursor-pointer w-[40%]' src={app} alt="" />
                    <img className='cursor-pointer w-[40%]' src={play} alt="" />
                </div>
            </div>
            <div className="image">
                <img src={group} alt="" />
            </div>
        </div>
    )
}

export default SixthSection
