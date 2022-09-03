import styled from 'styled-components';

export const StyledFaqs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 80vh;

	h1 {
		margin-bottom: 20px;
	}

	ul {
		list-style: none;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 20px;
	}

	li {
		width: 100%;
		background-color: #f3f3f396;
		padding: 20px;
		border-radius: 6px;
		transition: all ease 0.2s;
	}

	li:hover {
		background-color: #ad1d1d;
		color: #fff;
		cursor: pointer;
	}
`;
