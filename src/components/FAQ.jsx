import React from 'react';
import { StyledFaqs } from '../styles/FAQ.styles';

const faqs = [
	{
		question: 'Do you accept returns?',
		answer: 'Yes we do, you can find our returns policy here',
	},
	{
		question: 'What size shoes do you sell?',
		answer: 'You can find our shoe size chart here',
	},
];

const FAQ = () => {
	return (
		<StyledFaqs>
			<ul>
				{faqs.map((faq) => {
					return (
						<li>
							<h3>Q. {faq.question}</h3>
							<p>A. {faq.answer}</p>
						</li>
					);
				})}
			</ul>
		</StyledFaqs>
	);
};

export default FAQ;
