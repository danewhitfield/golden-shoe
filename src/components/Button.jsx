import React from 'react';
import { StyledButton } from '../styles/Button.styles';

const Button = ({ text, handler }) => (
	<StyledButton onClick={handler}>{text}</StyledButton>
);

export default Button;
