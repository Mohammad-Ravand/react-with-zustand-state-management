export function getAllProducts(){
    return fetch('https://dummyjson.com/products')
    .then(res => res.json())
}