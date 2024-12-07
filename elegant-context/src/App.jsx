import Header from './components/Header/Header'
import ProductsPage from './components/ProductsPage/ProductsPage'
import CartContextProvider from './context/CartContextProvider'

function App() {

  return (
    <CartContextProvider>
      <Header />
      <ProductsPage />
    </CartContextProvider>
  )
}

export default App
