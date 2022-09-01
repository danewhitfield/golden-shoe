import React from 'react';

const LoadMoreBtn = ({ setVisible }) => {
	const loadMore = () => setVisible((prev) => prev + 6);

	return (
		<button
			onClick={loadMore}
			style={{ width: '10%', marginTop: '30px', padding: '15px 0' }}
		>
			Load More
		</button>
	);
};

export default LoadMoreBtn;
