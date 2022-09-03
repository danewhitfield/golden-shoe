import React from 'react';
import { StyledReturns } from '../styles/Returns.styles';
import Button from './Button';

// TOAST
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Returns = () => {
	const [name, setName] = useState('');

	const notify = () =>
		toast(
			`${name}, your refund is being processed! We're sorry for any inconvenience 😊`
		);

	const handleReturn = (e) => {
		e.preventDefault();
		if (!name) return toast('Please enter your full name');
		notify();
	};

	return (
		<StyledReturns>
			<h1>Fill out our simple returns form</h1>
			<form style={{ display: 'flex', flexDirection: 'column', width: '20%' }}>
				<div>
					<label htmlFor='name'>Full Name</label>
					<input
						type='text'
						name='name'
						id='name'
						placeholder='DJ Khaled'
						onChange={(e) => setName(e.target.value)}
					/>
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

				<Button text={'Submit Return'} handler={handleReturn} />
				<ToastContainer position='top-center' />
			</form>
		</StyledReturns>
	);
};

export default Returns;
