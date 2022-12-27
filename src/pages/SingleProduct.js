import { useState, useEffect } from 'react';
// to get product-ID from url this hook is used
import { useParams, useNavigate } from 'react-router-dom';

const SingleProduct = () => {

    const [singleProduct, setSingleProduct] = useState({});
    const params = useParams();
    const navigate = useNavigate();
    // console.log(params)

    useEffect(()=> {
        fetch(`https://star-spark-pasta.glitch.me/api/products/${params._id}`)
        .then( response => response.json() )
        .then(product => {
            setSingleProduct(product)
        })

    },[params._id]);

    return (
        <>
            <div className="container mx-auto mt-12">
                <button className="mb-12 font-bold hover:bg-amber-400 rounded-md p-2 px-6 border border-amber-500" onClick={ ()=>  navigate(-1) }>Back</button>
                <div className="flex  sm:gap-10">
                    <img src={singleProduct.image} alt="pizza" />
                    <div className="m-10">
                        <h1 className="sm:text-xl font-bold">{singleProduct.name}</h1>
                        <div className="text-md">{singleProduct.size}</div>
                        <div className="font-bold mt-2">Tk. {singleProduct.price}</div>
                        <button className="bg-yellow-500 py-1 px-8 rounded-full font-bold mt-4">Add to cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct