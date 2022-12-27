import React, { useState, useEffect } from 'react'
import Product from './Product'

const ProductList = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('https://star-spark-pasta.glitch.me/api/products')
        .then(response => response.json())
        .then(products => {
            setProducts(products);
        })
    },[])

    return (
        <>
            <div className='container mx-auto pb-24'>
                <h1 className='text-lg font-bold my-4'>Products</h1>
                <div className='grid lg:grid-cols-5 lg:gap-16 md:grid-cols-4 md:gap-12 sm:grid-cols-3 sm:gap-10 grid-cols-3 gap-6 my-8 '>
                    {
                        products.map((product)=> <Product key={product._id} product={product}/>)
                    }       
                </div>
            </div>
        </>
    )
}

export default ProductList