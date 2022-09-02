import styled from 'styled-components';

export const StyledButton = styled.button`
	background: var(--brand-red);
	color: #fff;
	padding: 10px 20px;
	border-radius: 6px;
	width: 100%;
	font-weight: bold;
	text-transform: uppercase;
	cursor: pointer;
	outline: none;
	border: none;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
	transition: all ease 0.2s;
	margin-bottom: -10px;

	&:hover {
		color: var(--brand-red);
		background-color: #fff;
		box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
	}
`;
