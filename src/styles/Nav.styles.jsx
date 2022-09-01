import styled from 'styled-components';

export const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 40px;
	box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
	background-color: #ad1d1d;
	color: #fff;

	ul {
		list-style: none;
		display: flex;
		gap: 20px;
	}

	a {
		text-decoration: none;
		color: #fff;
	}

	.cart {
		position: relative;

		&::after {
			/* content: '${(props) => props.qty}'; */
			content: '${({ qty }) => (qty ? qty : '0')}';
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			top: -10px;
			left: 10px;
			width: 16px;
			height: 16px;
			font-size: 12px;
			background-color: blue;
			border-radius: 50%;
		}
	}
`;
