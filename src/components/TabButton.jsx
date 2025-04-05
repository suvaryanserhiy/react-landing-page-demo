function TabButton({ children, isSelected, ...rest }) { // THIS ...rest is custom name
	return (
		<li>
			<button className={isSelected ? 'active' : undefined} {...rest}>
				{children}
			</button>
		</li>
	);
}
export default TabButton;
