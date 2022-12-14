import styled from 'styled-components';

export const StyledReturns = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 40px;
	color: #000;
	width: 100vw;
	height: 80vh;

	form {
		padding: 50px;
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.1);
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
