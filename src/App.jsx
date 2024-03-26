import ProductContainer from './containers/ProductContainer/ProductContainer'
import DefaultLayout from './layouts/DefaultLayout'
import  './assets/css/colors.css'
import Cart from './components/Cart/Cart'
function App() {
  return (
    <DefaultLayout >
      <Cart />
      <ProductContainer />
    </DefaultLayout>
  )
}
export default App
