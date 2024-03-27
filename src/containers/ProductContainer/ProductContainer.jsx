import ShowProductCard from '../../components/Products/ShowProductCard/ShowProductCard';
import { v4 as uuidv4 } from 'uuid';
import {
  useQuery,
} from '@tanstack/react-query';
import { getAllProducts } from '../../api/products';
const ProductContainer = () => {
let {data,isLoading,isSuccess,isError} = useQuery({ queryKey: ['products'], queryFn: getAllProducts });


  return (
    <div className='flex flex-wrap justify-center mt-3'>
    {isLoading && <h1 className='text-center'>loading ...</h1>} 
    {isError && <h1 className='text-center text-red-500'>erorr loading products</h1>}
    {
      isSuccess && data?.products?.map(product=> <ShowProductCard key={uuidv4()} product={product} />)
    }
    </div>
  )
}
export default ProductContainer