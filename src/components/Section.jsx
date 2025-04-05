function Section({ title, children, ...rest }) { // THIS ...rest is custom name
	return (
		<section {...rest}>
			<h2>{title}</h2>
			{children}
		</section>
	);
}

export default Section;
