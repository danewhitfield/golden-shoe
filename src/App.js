import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import FAQ from './components/FAQ';
import Home from './components/Home';
import Nav from './components/Nav';
import Shop from './components/Shop';
import { BasketContext } from './context/basket.context';
import { BasketQtyContext } from './context/basketQty.context';

function App() {
	const [qty, setQty] = useState('0');
	const [basket, setBasket] = useState([]);

	return (
		<BasketContext.Provider value={{ basket, setBasket }}>
			<BasketQtyContext.Provider value={{ qty, setQty }}>
				<Nav />
				<div className='App'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/shop' element={<Shop />} />
						<Route path='/faq' element={<FAQ />} />
						<Route path='/cart' element={<Cart />} />
					</Routes>
				</div>
			</BasketQtyContext.Provider>
		</BasketContext.Provider>
	);
}

export default App;
