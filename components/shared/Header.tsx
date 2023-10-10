// import Logo from '../assets/Logo.png'

const Header = () => {
  return (
    <nav className="w-full px-20 h-20 flex justify-between items-center absolute font-serif">
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
        <div>
            <ul className='flex flex-row gap-5'>
                <li>Home</li>
                <li>About us</li>
                <li>Menu</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div>
            <button className='px-4 py-2 border border-white bg-opacity-60'>Dashboard</button>
        </div>
    </nav>
  )
}

export default Header