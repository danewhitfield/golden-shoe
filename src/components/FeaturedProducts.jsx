import React from 'react';
import { products } from '../data/products';
import { StyledFeatured } from '../styles/Featred.styles';
import Button from './Button';

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
							<Button handler={(e) => e.preventDefault()} text={'Buy Now!'} />
						</li>
					);
				})}
			</ul>
		</StyledFeatured>
	);
};

export default FeaturedProducts;
