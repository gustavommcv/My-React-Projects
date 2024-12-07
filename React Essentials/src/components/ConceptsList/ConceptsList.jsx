import CoreConcept from "../CoreConcept/CoreConcept";
import { CORE_CONCEPTS } from "../../data";

import './ConceptsList.css';

export default function ConceptsList() {
    return (
        <section>
            <div className="concepts-list">
                <h2 className="concepts-list__title">Core Concepts</h2>
                <ul className="concepts-list__ul">
                    {Object.entries(CORE_CONCEPTS).map(([key, concept]) => (
                        <CoreConcept key={key} {...concept} />
                    ))}
                </ul>
            </div>
        </section>
    );
}
