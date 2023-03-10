import React from 'react'
import ProductList from '../components/ProductList';

const Home = () => {
    return (
        <>
            <div className='hero pt-32'>
                <div className='container mx-auto flex items-center justify-between'>
                    <div className='w-1/2'>
                        <h6 className='text-lg'><em>Are You Hungry ?</em></h6>
                        <h1 className='text-3xl md:text-6xl font-bold'>Don't Wait !</h1>
                        <button className='px-6 py-2 rounded-full text-white font-bold mt-8 bg-yellow-500 hover:bg-yellow-600' type="submit">Order Now</button>
                    </div>
                    <div className='w-1/2 flex justify-end'>
                        <img className='w-4/5 flex' src="/images/pizza.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='container mx-auto py-20'>
                <ProductList/>
            </div>
        </>
    )
}

export default Home;