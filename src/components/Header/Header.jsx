import ReactCoreIMG from '../../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomDesc(description) {
	return description[Math.floor(Math.random() * (description.length + 1))];
}

function Header() {
	const description = genRandomDesc(reactDescriptions);
	return (
		<header>
			<img src={ReactCoreIMG} alt='Stylized atom' />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}

export default Header;
