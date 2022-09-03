import React from 'react';
import { useContext } from 'react';
import { ShoeSizeContext } from '../context/shoeSize.context';
import { StyledSizeBtn } from '../styles/SizeBtn.styles';

const SizeBtn = ({ value }) => {
	const { shoeSize, setShoeSize } = useContext(ShoeSizeContext);

	return (
		<StyledSizeBtn
			onClick={(e) => {
				e.preventDefault();
				setShoeSize(value);
			}}
		>
			{value}
		</StyledSizeBtn>
	);
};

export default SizeBtn;
