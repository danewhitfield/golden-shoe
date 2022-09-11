import React, { useEffect, useState } from 'react';
import { StyledHome } from '../styles/Home.styles';
import DisplayShoe from './DisplayShoe';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
	const [width, setWidth] = useState(1048);

	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
	}, [width]);

	return (
		<StyledHome>
			{width > 768 && <DisplayShoe />}
			<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
				Check out some of our best sellers!
			</h2>
			<FeaturedProducts />
		</StyledHome>
	);
};

export default Home;
