import styled from 'styled-components';

export const StyledReturns = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: #000;
	width: 100vw;

	form {
		width: 100px;
		padding: 40px;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
	}

	div {
		display: flex;
		flex-direction: column;
		margin: 10px 0;
	}

	input {
		width: 50%;
		border: none;
		border-bottom: 1px solid #000;
		background: none;
		outline: none;
		color: #000;
	}

	.checkbox {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		width: 250px;
	}
`;
