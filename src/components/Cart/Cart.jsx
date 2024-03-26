import React from 'react'
const Cart = () => {
    return (
        <div className='flex justify-center w-full '>
            <ul className='p-3 mt-3 rounded-md shadow-sm shadow-current min-w-96 w-fit ' >
                <li className='flex w-full gap-2 '>
                        <button className='px-1 text-red-500'>x</button>
                    <div className='flex w-fit'>
                        <img className='object-cover object-top w-20 h-16 rounded-md' src='https://cdn.dummyjson.com/product-images/1/thumbnail.jpg' />
                    </div>
                    <div className='w-full '>
                        <h1>title one</h1>
                        <div className='flex justify-between gap-5'>
                            <p>price: 40$</p>
                            <p>count: 3</p>
                        </div>
                    </div>
                </li>

                <li className='pt-1 mt-2 border-t '>
                    <div className='flex justify-around'>

                    <p>total: 343$</p>
                    <p>count: 4</p>
                    </div>

                    <div className='flex justify-end gap-3 pt-1 mt-1 border-t'>
                        <button className='px-2 py-0 pb-0.5 text-white bg-red-400 rounded-md'>clear</button>
                        <button className='bg-green-500 text-white pb-0.5 rounded-md px-2 py-0'>checkout</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Cart
