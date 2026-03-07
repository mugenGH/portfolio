import { HelmetProvider } from 'react-helmet-async';
import TerminalNavigation from './components/TerminalNavigation';
import TerminalHero from './components/TerminalHero';
import TechArsenal from './components/TechArsenal';
import ProjectShowcase from './components/ProjectShowcase';
import ExperienceTimeline from './components/ExperienceTimeline';
import TransmissionContact from './components/TransmissionContact';
import './styles_electric.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app-electric">
        <TerminalNavigation />
        <main>
          <TerminalHero />
          <TechArsenal />
          <ProjectShowcase />
          <ExperienceTimeline />
          <TransmissionContact />
        </main>
      </div>
    </HelmetProvider>
  );
}

export default App;
