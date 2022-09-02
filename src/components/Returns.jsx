import React from 'react';
import { StyledReturns } from '../styles/Returns.styles';

const Returns = () => {
	return (
		<StyledReturns>
			<h1>Fill out our simple returns form</h1>
			<form style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
				<div>
					<label htmlFor='name'>Full Name</label>
					<input type='text' name='name' id='name' placeholder='DJ Khaled' />
				</div>

				<div>
					<label htmlFor='order-no'>Order No.</label>
					<input
						type='text'
						name='order-no'
						id='order-no'
						placeholder='782167'
					/>
				</div>

				<h3>Reason For Return</h3>
				<div className='checkbox'>
					<label htmlFor='wrong-size'>Wrong Size</label>
					<input
						type='checkbox'
						value='wrong-size'
						name='wrong-size'
						id='wrong-size'
					/>
				</div>
				<div className='checkbox'>
					<label htmlFor='wrong-colour'>Wrong Colour</label>
					<input
						type='checkbox'
						value='wrong-colour'
						name='wrong-colour'
						id='wrong-colour'
					/>
				</div>

				<button>Submit Refund</button>
			</form>
		</StyledReturns>
	);
};

export default Returns;
