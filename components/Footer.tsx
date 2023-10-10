// import Logo from '../assets/Logo.png'
import {AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="w-10/12 h-72 mx-auto mt-10">
        <div className="bg-yellow-700 h-[1px] w-full "/>
        <div className="grid grid-cols-6   mt-10 font-serif">
            <div className="col-span-2">
                <div className='flex flex-row  items-center'>
                    {/* <img src={Logo} alt="logo" className='w-20' /> */}
                    <div>
                        <h1 className='text-2xl '>UPTOWN</h1>
                        <div className='flex items-center gap-1'>
                            <div className='bg-white w-6 h-[.5px]'/>
                            <p className='text-[.35rem]'>Delightful . Dining . Experience</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-yellow-600 text-lg">About us</h2>
                <ul className="mt-5 flex flex-col gap-4 text-sm">
                    <li>Price</li>
                    <li>Menu</li>
                    <li>Home</li>
                </ul>
            </div>
            <div>
                <h2 className="text-yellow-600 text-lg  ">Services</h2>
                <ul className="mt-5 flex flex-col gap-4  text-sm">
                    <li>Delivery</li>
                    <li>Packaging</li>
                </ul>
            </div>
            <div>
                <h2 className="text-yellow-600 text-lg">Schedule</h2>
                <ul className="mt-5 flex flex-col gap-4  text-sm">
                    <li>Mon-Fri <br /> 9:00 am to 8:00 pm</li>
                    <li>info@uptown.go</li>
                </ul>
            </div>
            <div className='flex gap-2 text-xl'>
                <i><AiOutlineFacebook  /></i>
                <i><AiOutlineInstagram/></i>
            </div>

        </div>
    </div>
  )
}

export default Footer