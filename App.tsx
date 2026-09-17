import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import StatsStrip from './components/StatsStrip'
import ProblemSection from './components/ProblemSection'
import SolutionSection from './components/SolutionSection'
import PrototypeSection from './components/PrototypeSection'
import FeaturesSection from './components/FeaturesSection'
import WorkflowSection from './components/WorkflowSection'
import CaseStudySection from './components/CaseStudySection'
import TechnologySection from './components/TechnologySection'
import LanguageSection from './components/LanguageSection'
import ImpactSection from './components/ImpactSection'
import ChallengesSection from './components/ChallengesSection'
import DataSection from './components/DataSection'
import TeamSection from './components/TeamSection'
import ReferencesSection from './components/ReferencesSection'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <StatsStrip />
        <ProblemSection />
        <SolutionSection />
        <PrototypeSection />
        <FeaturesSection />
        <WorkflowSection />
        <CaseStudySection />
        <TechnologySection />
        <LanguageSection />
        <ImpactSection />
        <ChallengesSection />
        <DataSection />
        <TeamSection />
        <ReferencesSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
