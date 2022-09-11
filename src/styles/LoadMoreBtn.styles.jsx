import styled from 'styled-components';

export const StyledLoadMoreBtn = styled.button`
	background: var(--brand-red);
	color: #fff;
	padding: 10px 20px;
	border-radius: 6px;
	width: 200px;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;
	border: none;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	transition: all ease 0.2s;
	margin-top: 30px;

	&:hover {
		color: var(--brand-red);
		background-color: #fff;
		box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;
