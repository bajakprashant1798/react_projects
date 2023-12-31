import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
    const [navBarOpen, setNavBarOpen] = useState(false)

  return (
    <header className='shadow sticky z-50 top-0 bg-white'>
        <nav className='lg:flex lg:justify-between lg:items-center bg-white border-b-1 border-gray-200 py-2 max-w-5xl mx-auto w-full'>
            <div className='flex justify-between items-center pr-5'>
                <div>
                    <Link to="#">
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                </div>
                <button className='cursor-pointer lg:hidden' onClick={() => setNavBarOpen((prev) => !prev)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>

            <div className=' px-2'>
                <ul className={`flex lg:flex-row items-center flex-col gap-2 ${navBarOpen ? '' : 'hidden'} lg:flex md:transition md:ease-in-out md:delay-150`}>
                    <li>
                        <NavLink to="/" className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                            Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                            About</NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                            Contact</NavLink>
                    </li>

                    <li>
                        <NavLink to="/github" className={({isActive}) => 
                                `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }>
                            Github</NavLink>
                    </li>
                </ul>
            </div>

            <div className={`flex flex-wrap items-center gap-2 justify-center lg:justify-start my-3 lg:my-0 px-2 ${navBarOpen ? '' : 'hidden'} lg:flex md:transition md:ease-in-out md:delay-150`}>
                {/* <Link to="#" className='text-black '>Log in</Link>
                <Link to="#" className='bg-orange-600 text-white rounded-lg px-3 py-1.5'>Get started</Link> */}
                <p className='text-black '>Log in</p>
                <p className='bg-orange-600 text-white rounded-lg px-3 py-1.5'>Get started</p>
            </div>
        </nav>
    </header>
  )
}

export default Header