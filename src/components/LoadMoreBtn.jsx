import React from 'react';
import { StyledLoadMoreBtn } from '../styles/LoadMoreBtn.styles';
import Button from './Button';

const LoadMoreBtn = ({ setVisible }) => {
	const loadMore = () => setVisible((prev) => prev + 6);

	return <StyledLoadMoreBtn onClick={loadMore}>Load More</StyledLoadMoreBtn>;
};

export default LoadMoreBtn;
