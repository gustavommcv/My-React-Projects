import './App.css';
import ConceptsList from './components/ConceptsList/ConceptsList';
import ExamplesSection from './components/ExamplesSection/ExamplesSection';
import Header from './components/Header/Header';

export default function App() {
  return (
    <div className="body">
      <Header />
      
      <main>
        <ConceptsList />

        <ExamplesSection />
      </main>

    </div>
  );
}
