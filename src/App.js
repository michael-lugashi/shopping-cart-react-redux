import './styles/App.css';
import ProductContainer from './core/product-container';
import CartContainer from './core/cart-container';

function App() {
 return (
  <div className="App">
   <header className="App-header">
    <h1>Shopping Cart</h1>
    <hr />
   </header>
   <main>
    <ProductContainer />
    <hr />
    <CartContainer />
   </main>
  </div>
 );
}

export default App;
