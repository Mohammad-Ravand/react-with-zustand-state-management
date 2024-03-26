const Header = () => {
  return (
    <>
      <div className='flex items-center justify-between w-full h-12 itemscen bg-gradient-to-r from-cyan-500 to-blue-500'>
        <h1 className='m-auto text-xl text-white'>Practice zustand</h1>

        <button className="relative flex items-center justify-between h-full gap-3 px-3 border border-teal-500 rounded-md hover:opacity-80 w-44 bg-cyan-600">
          <span className="absolute top-0.5 left-0.5 px-2 py-0.5 text-sm text-white bg-teal-500 rounded-md">3</span>
          <div className="ml-6">
            <span className="text-sm text-gray-200">total:</span>
            <span className="ml-1 text-white">1,125,568 $</span>
          </div>
        </button>
      </div>
    </>
  )
}
export default Header