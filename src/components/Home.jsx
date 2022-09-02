import React from 'react';
import DisplayShoe from './DisplayShoe';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
	return (
		<div>
			<DisplayShoe />
			<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
				Check out some of our best sellers!
			</h2>
			<FeaturedProducts />
		</div>
	);
};

export default Home;
