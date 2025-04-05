import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from './Section';

function CoreConsepts() {
	return (
		<>
			<Section id='core-concepts' titile='Time to get started!'>
				<ul>
					{CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					))}
				</ul>
			</Section>
		</>
	);
}

export default CoreConsepts;
