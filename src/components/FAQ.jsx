import React from 'react';
import { faqs } from '../data/faqs';
import { StyledFaqs } from '../styles/FAQ.styles';

const FAQ = () => {
	return (
		<StyledFaqs>
			<h1>FAQ's</h1>
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
