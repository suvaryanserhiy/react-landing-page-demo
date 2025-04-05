import CoreConsepts from './components/CoreConcepts';
import Examples from './components/Examples';
import Header from './components/Header/Header';

function App() {
	return (
		// Using fragment instead of div
		<>
			<Header />
			<main>
				<CoreConsepts />
				<Examples />
			</main>
		</>
	);
}

export default App;
