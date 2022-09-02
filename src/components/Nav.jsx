import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StyledNav } from '../styles/Nav.styles';
import { FaShoppingCart } from 'react-icons/fa';
import { BasketQtyContext } from '../context/basketQty.context';

const Nav = () => {
	const { qty } = useContext(BasketQtyContext);

	console.log(qty, '<<< QTY');

	return (
		<StyledNav>
			<Link to={'/'}>
				<h1>GoldenShoe</h1>
			</Link>
			<ul>
				<li>
					<Link to='/shop'>Shop</Link>
				</li>
				<li>
					<Link to='/faq'>FAQs</Link>
				</li>
				<li>
					<Link to='/returns'>Returns</Link>
				</li>
				<li className='cart' qty={qty.toString()}>
					<Link to='/cart'>
						<FaShoppingCart />
					</Link>
				</li>
			</ul>
		</StyledNav>
	);
};

export default Nav;
