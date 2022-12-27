import { Link } from 'react-router-dom'

const Product = (props) => {

    const { product } = props;

    return (
        <>

            <div>
                <div className='text-center'>
                    <Link to='/products/id'>
                        <div>
                            <div className='flex justify-center'>
                                <img src={product.image} alt="pizza" />
                            </div>
                            <h2 className='text-lg font-bold py-2'>{product.name}</h2>
                        </div>
                    </Link>
                    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{product.size}</span>
                </div>
                <div className='flex justify-between py-2 '>
                    <span className='text-lg font-bold'>Tk. {product.price}</span>
                    <button className='bg-yellow-500 py-1 px-3 rounded-full font-bold' type="submit">ADD</button>
                </div>
            </div>
        </>
    )
}

export default Product