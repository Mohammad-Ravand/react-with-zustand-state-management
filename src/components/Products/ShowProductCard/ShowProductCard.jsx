import PropTypes from 'prop-types';

const ShowProductCard = ({product}) => {
  return (
    <article className='flex flex-col justify-between p-4 m-5 rounded-md shadow-sm max-w-64 shadow-current ' >
      <header className='h-40 rounded-md' >
        <div className='h-40 p-0 -m-4 rounded-md' >
          <img className='object-cover w-full h-40 m-auto rounded-t-md' src={product?.thumbnail} />
        </div>
      </header>
      
      <div>
        <h1 className='font-bold text-gray-600'>{product?.title}</h1>
        <p className='my-2 text-sm font-normal'>{product?.description}</p>
        <p className='mb-2'>price: {product?.price}$</p>
      </div>

      <footer className='flex justify-end '>
        <button className='px-3 py-1 text-white bg-blue-500 rounded-md'>add to cart</button>
      </footer>
    </article>
  )
}

ShowProductCard.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};


export default ShowProductCard