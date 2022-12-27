import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            <div className='shadow-md'>
                <nav className='container mx-auto flex justify-between py-2'>
                    <div>
                        <Link to='/'>
                            <img src="/images/logo.png" alt="logo" />
                        </Link>
                    </div>
                    <ul className='flex items-center gap-4 font-bold'>
                        <li className='hover:bg-amber-400 rounded-md p-2 px-6'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='hover:bg-amber-400 rounded-md p-2 px-6'>
                            <Link to='/products'>Products</Link>
                        </li>
                        <li className=''>
                            <Link to='/cart'>
                                <div className='flex bg-amber-500 hover:bg-amber-600 rounded-[50px] space-x-4 p-2 px-4'>
                                    <span className='pl-1'>10</span>
                                    <img className='pr-1' src="/images/cart.png" alt="cart" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Nav