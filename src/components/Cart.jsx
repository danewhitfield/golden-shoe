import React from 'react';
import { useContext } from 'react';
import { BasketContext } from '../context/basket.context';

const Cart = () => {
	const { basket } = useContext(BasketContext);
	return (
		<div>
			{!basket.length && <h1>Your basket is empty!</h1>}
			<ul>
				{basket.map((product) => {
					return <h1>{product.productName}</h1>;
				})}
			</ul>
		</div>
	);
};

export default Cart;
