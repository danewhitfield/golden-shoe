import React, { useContext, useState } from 'react';
import { BasketContext } from '../context/basket.context';
import { BasketQtyContext } from '../context/basketQty.context';
import { ShoeSizeContext } from '../context/shoeSize.context';
import { products } from '../data/products';
import { StyledShop } from '../styles/Shop.styles';
import Button from './Button';
import LoadMoreBtn from './LoadMoreBtn';
import SizeBtn from './SizeBtn';

const Shop = () => {
	const [visibile, setVisible] = useState(6);
	const { qty, setQty } = useContext(BasketQtyContext);
	const { basket, setBasket } = useContext(BasketContext);
	const { shoeSize } = useContext(ShoeSizeContext);

	const handleAddToBasket = (e, product) => {
		e.preventDefault();
		setQty((prev) => (+prev + 1).toString());
		product.shoeSize = shoeSize;
		setBasket((prev) => [...prev, product]);
	};

	console.log(basket);

	return (
		<StyledShop>
			<h1 style={{ marginBottom: '30px' }}>Shop</h1>
			<ul>
				{products.slice(0, visibile).map((product) => {
					return (
						<li>
							<img src={product.productImg} alt={product.productName} />
							<h3>{product.productName}</h3>
							<p>{product.price}</p>
							<div style={{ display: 'flex', gap: '10px' }}>
								<SizeBtn value={3} />
								<SizeBtn value={4} />
								<SizeBtn value={5} />
								<SizeBtn value={6} />
							</div>
							<Button handler={(e) => e.preventDefault()} text={'Buy Now!'} />
							<Button
								handler={(e) => handleAddToBasket(e, product)}
								text={'Add To Basket'}
							/>
						</li>
					);
				})}
			</ul>
			<p style={{ color: 'black', marginTop: '20px', marginBottom: '-20px' }}>
				{visibile <= products.length
					? `${visibile}/${products.length} items showing`
					: `${products.length}/${products.length} items showing`}
			</p>
			<LoadMoreBtn setVisible={setVisible} />
		</StyledShop>
	);
};

export default Shop;
