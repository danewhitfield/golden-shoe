import React from 'react';
import { products } from '../data/products';
import { StyledFeatured } from '../styles/Featred.styles';

const FeaturedProducts = () => {
	return (
		<StyledFeatured>
			<ul>
				{products.slice(0, 6).map((product) => {
					return (
						<li>
							<img src={product.productImg} alt={product.productName} />
							<h3>{product.productName}</h3>
							<p>{product.price}</p>
							<button onClick={(e) => e.preventDefault()}>Buy Now!</button>
						</li>
					);
				})}
			</ul>
		</StyledFeatured>
	);
};

export default FeaturedProducts;
