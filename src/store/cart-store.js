import { create } from 'zustand'
export const useCartStore = create((set)=>({
    cart:{
        items:new Map(),
        total:0,
        count:0
    },
    addCartItem:(product )=>{
        product.count =1;
       return set((state)=> {
        const newMap =new Map([...state.cart.items]);
        if(newMap.has(product.id)){
            let existItem = newMap.get(product.id);
            existItem.count+=1;
            state.cart.count +=1;
            state.cart.total += parseInt(product.price)
        }else{
            product.count=1;
            state.cart.count +=1;
            state.cart.total += parseInt(product.price)
            newMap.set(product.id,product)
        }
        return {cart: {...state.cart,items: new Map([...newMap])}}
       })
    },
    removeCartItem:(productId)=>{
       return set((state)=> {
        const productCount = state.cart.items.get(productId).count;
        state.cart.count -=productCount;
        const filteredArray = Array.from(state.cart.items.values()).filter(product=> product.id !=productId)
        let newMapItems = new Map();
        if(filteredArray.length){
            filteredArray.forEach(item=>{
                newMapItems.set(item.id,item)
            });
        }
        return {
            cart:{
                ...state.cart,
                items: newMapItems 
            }
        };
       })
    },
    incrementCartItemCount:(productId)=>{
       return set((state)=> {
        const newMap =new Map([...state.cart.items]);
        if(newMap.has(productId)){
            let existItem = newMap.get(productId);
            existItem.count+=1;
            state.cart.total += parseInt(existItem.price)
            state.cart.count+=1;
        } 
        return {cart: {...state.cart,items: new Map([...newMap])}}
       })
    },
    decrementCartItemCount:(productId)=>{
        return set((state)=> {
            const newMap =new Map([...state.cart.items]);
            if(newMap.has(productId)){
                let existItem = newMap.get(productId);
                existItem.count-=1;
                if(existItem.count >0){
                    state.cart.total -= parseInt(existItem.price)
                    state.cart.count-=1;
                }else{
                    newMap.delete(productId);
                    state.cart.count-=1;
                }
            } 
            return {cart: {...state.cart,items: new Map([...newMap])}}
           })
    },
    clearCart:()=>{
       return set((state)=> ({cart:{ ...state.cart,count:0,total:0, items: new Map()}}))
    },
}))