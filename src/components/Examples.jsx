import { useState } from 'react';
import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import Tabs from './Tabs';

function Examples() {
	const [selectedTopic, setSelectedTopic] = useState();

	const tabContent = !selectedTopic ? (
		<p>Please select a topic.</p>
	) : (
		<div id='tab-content'>
			<h3>{EXAMPLES[selectedTopic].title}</h3>
			<p>{EXAMPLES[selectedTopic].description}</p>
			<pre>
				<code>{EXAMPLES[selectedTopic].code}</code>
			</pre>
		</div>
	);

	function handleSelect(selectedButton) {
		// console.log(selectedButton + ' was pressed!');
		setSelectedTopic(selectedButton);
	}
	return (
		<>
			<Section title='examples' id='examples'>
				<Tabs
					buttons={
						<>
							<TabButton
								isSelected={selectedTopic === 'components'}
								onClick={() => handleSelect('components')}
							>
								Components
							</TabButton>
							<TabButton
								isSelected={selectedTopic === 'jsx'}
								onClick={() => handleSelect('jsx')}
							>
								JSX
							</TabButton>
							<TabButton
								isSelected={selectedTopic === 'props'}
								onClick={() => handleSelect('props')}
							>
								Props
							</TabButton>
							<TabButton
								isSelected={selectedTopic === 'state'}
								onClick={() => handleSelect('state')}
							>
								State
							</TabButton>
						</>
					}
				>
					{tabContent}
				</Tabs>
			</Section>
		</>
	);
}

export default Examples;
