import styled from 'styled-components';

export const StyledCart = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	.empty {
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		h1 {
			margin-bottom: 10px;
		}
	}

	ul {
		width: 80%;
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 60px;
		box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		padding: 80px;
	}

	li {
		position: relative;
		display: flex;
		justify-content: space-between;
	}

	li::after {
		content: '';
		bottom: -20px;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		width: 100%;
		height: 2px;
		background-color: #00000022;
	}

	h2 {
		text-align: center;
	}

	img {
		width: 100px;
	}

	p {
		color: var(--brand-red);
	}
`;
