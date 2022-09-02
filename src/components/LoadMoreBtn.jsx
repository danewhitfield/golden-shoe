import React from 'react';
import Button from './Button';

const LoadMoreBtn = ({ setVisible }) => {
	const loadMore = () => setVisible((prev) => prev + 6);

	return <Button handler={loadMore} text={'Load More'} />;
};

export default LoadMoreBtn;
