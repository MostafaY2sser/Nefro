
import x from '../../assets/images/Footer/x.png'
import snap from '../../assets/images/Footer/snap.png'
import instagram from '../../assets/images/Footer/instagram.png'
import youtbe from '../../assets/images/Footer/youtbe.png'


const Footer = () => {
    return (
        <div className="flex justify-between px-4 md:px-10 bg-bgsection py-5 md:py-10 flex-col md:flex-row gap-y-7">
            <h4 className="text-maincolor text-[40px] font-[700]">NEFRO</h4>
            <div className="links ">
                <h4 className="text-[26px] font-[700] ">QUICK LINKS</h4>
                <ul className='flex flex-col gap-2 pl-3'>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#one">Why choose us</a>
                    </li>
                    <li>
                        <a href="#three">Programs</a>
                    </li>
                    <li>
                        <a href="#three">Diet Plans</a>
                    </li>
                    <li>
                        <a href="#four">Download</a>
                    </li>
                </ul>
            </div>
            <div className="social">
                <h4 className="title text-[26px] font-[700] ">FOLLOW US</h4>
                <div className="icons flex items-center gap-3">
                    <a className='bg-[white] p-2 rounded-[50%]' href="#">
                        <img src={x} alt="" />
                    </a>
                    <a className='bg-[white] p-2 rounded-[50%]' href="#">
                        <img src={youtbe} alt="" />
                    </a>
                    <a className='bg-[white] p-2 rounded-[50%]' href="#">
                        <img src={snap} alt="" />
                    </a>
                    <a className='bg-[white] p-2 rounded-[50%]' href="#">
                        <img src={instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
