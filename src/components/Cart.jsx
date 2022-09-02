import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BasketContext } from '../context/basket.context';
import { StyledCart } from '../styles/Cart.styles';
import Button from './Button';

const Cart = () => {
	const { basket } = useContext(BasketContext);

	// const prod = basket.filter((product, i) => {
	// 	product[i]?.productName === product?.productName
	// 		? (product.qty = i += 1)
	// 		: (product.qty = 1);
	// });

	const totalCost =
		basket.length &&
		basket
			.map((product) => +product.price.replace(/[^0-9.-]+/g, ''))
			.reduce((a, b) => a + b)
			.toFixed(2);

	return (
		<StyledCart>
			{!basket.length && (
				<div className='empty'>
					<h1>Your basket is empty!</h1>
					<p style={{ textAlign: 'center' }}>
						Go and buy some stuff <Link to='/shop'>here</Link>
					</p>
				</div>
			)}
			{basket.length > 0 && (
				<ul>
					<h2>Here is a summary of your basket</h2>
					{basket.map((product) => {
						return (
							<li>
								<div>
									<h3>{product.productName}</h3>
									<span>Shoe size: UK-{product.shoeSize}</span>
									<p>{product.price}</p>
								</div>
								<img src={product.productImg} alt='' />
							</li>
						);
					})}
					<p>{`Your current total is: £${totalCost}`}</p>
					<Button text={'Proceed to Checkout'} />
				</ul>
			)}
		</StyledCart>
	);
};

export default Cart;
