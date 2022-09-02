import styled from 'styled-components';

export const StyledShop = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		justify-content: center;
		align-items: center;
		gap: 30px;
		list-style: none;
	}

	li {
		width: 100%;
		height: 100%;
		display: grid;
		grid-template-rows: 9fr 1fr;
		justify-content: center;
		align-items: center;
		gap: 20px;
		padding: 30px;
		box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
		transition: all ease 0.2s;
	}

	li:hover {
		transform: translateY(-2px);
	}

	img {
		width: 200px;
	}

	p {
		color: var(--brand-red);
	}

	/* button {
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
	}

	button:hover {
		color: var(--brand-red);
		background-color: #fff;
		box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
	} */
`;
