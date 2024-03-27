import { useCartStore } from '../../store/cart-store'
import { v4 as uuidv4 } from 'uuid';

const Cart = () => {

    const cart = useCartStore(state => state.cart)
    const removeCartItem = useCartStore(state=>state.removeCartItem)
    const incrementCartItemCount = useCartStore(state=>state.incrementCartItemCount)
    const decrementCartItemCount = useCartStore(state=>state.decrementCartItemCount)
    const clearCart = useCartStore(state=>state.clearCart)
    function removeItem(productId){
        removeCartItem(productId)
    }

    const cartItems = Array.from(cart.items.values());
    console.log(cartItems)
    if(cartItems.length==0){
        return <></>
    }

    function incrementItemCount(productId){
        incrementCartItemCount(productId)
    }
    function decrementItemCount(productId){
        decrementCartItemCount(productId)
    }

    
    return (
        <div className='flex justify-center w-full '>
            <ul className='p-3 mt-3 rounded-md shadow-sm shadow-current min-w-96 w-fit ' >
                {cartItems.length>0 && cartItems.map(item => {
                    {console.log()}
                    return <li className='flex w-full gap-2 mb-2 ' key={uuidv4()}>
                        <button className='px-1 text-red-500' onClick={()=>removeItem(item.id)}>x</button>
                        <div className='flex w-fit'>
                            <img className='object-cover object-top w-20 h-16 rounded-md' src={item?.thumbnail} />
                        </div>
                        <div className='w-full '>
                            <h1>{item?.title}</h1>
                            <div className='flex items-center justify-between gap-5'>
                                <p>price: {item?.price}$</p>
                                <div className='flex gap-2'>
                                    <button onClick={()=>decrementItemCount(item.id)} className='flex items-center px-2 py-0 text-white bg-red-500 rounded-md'>-</button>
                                    <span>{item?.count}</span>
                                    <button onClick={()=>incrementItemCount(item.id)}  className='flex items-center px-2 py-0 text-white bg-green-500 rounded-md'>+</button>
                                </div>
                            </div>
                        </div>
                    </li>
                })
                }
                <li className='pt-1 mt-2 border-t '>
                    <div className='flex justify-around'>

                        <p>total: {cart.total} $</p>
                        <p>count: {cart.count}</p>
                    </div>

                    <div className='flex justify-end gap-3 pt-1 mt-1 border-t'>
                        <button onClick={clearCart} className='px-2 py-0 pb-0.5 text-white bg-red-400 rounded-md'>clear</button>
                        <button className='bg-green-500 text-white pb-0.5 rounded-md px-2 py-0'>checkout</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
export default Cart
