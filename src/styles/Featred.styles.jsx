import styled from 'styled-components';

export const StyledFeatured = styled.div`
	display: flex;
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
		color: #ad1d1d;
	}

	@media only screen and (max-width: 600px) {
		display: flex;
		flex-wrap: wrap;

		@media only screen and (max-width: 600px) {
			ul {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
				gap: 30px;
				list-style: none;
			}

			li {
				width: 60%;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				gap: 20px;
				padding: 30px;
				box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.1);
				transition: all ease 0.2s;
			}

			img {
				width: 150px;
			}
		}
	}
`;
