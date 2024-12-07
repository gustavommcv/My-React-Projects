import React from "react";
import ExampleButton from "../ExampleButton/ExampleButton";
import './ExamplesSection.css';
import { EXAMPLES } from '../../data.js';
import Tabs from "../Tabs/Tabs.jsx";

export default function ExamplesSection() {
    const [selectedTopic, setSelectedTopic] = React.useState();

    function handleClick(param) { setSelectedTopic(param); }

    let tabContent = <div>
        <p>Please select a topic</p>
    </div>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </div>
        );
    }

    return (
        <section>
            <div>
                <h2>Examples</h2>
                <Tabs 
                    // ButtonsContainer="menu" 
                    buttons={
                        <>
                        <ExampleButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</ExampleButton>

                        <ExampleButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</ExampleButton>

                        <ExampleButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</ExampleButton>

                        <ExampleButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>State</ExampleButton></>}
                    > {tabContent} </Tabs>
            </div>
        </section>
    );   
}
