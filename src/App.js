import React from 'react';
import { AdminProvider } from './context/AdminContext';
import { TopBar } from './components/TopBar';
import { HeaderNav } from './components/HeaderNav';
import { Hero } from './components/Hero';
import { StatsCounter } from './components/StatsCounter';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { PublicTabsSection } from './components/PublicTabsSection';
import { IPRSection } from './components/IPRSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InnovationSection } from './components/InnovationSection';
import { CollabSection } from './components/CollabSection';
import { ResourcesSection } from './components/ResourcesSection';
import { ContactFooter } from './components/ContactFooter';
import { AdminLoginModal } from './components/AdminLoginModal';
import { AddDocumentModal } from './components/AddDocumentModal';
import { DocumentViewerModal } from './components/DocumentViewerModal';

function App() {
  return (
    <AdminProvider>
      <div className="app-container">
        <TopBar />
        <HeaderNav />
        <main>
          <Hero />
          <StatsCounter />
          <AboutSection />
          <ResearchSection />
          <PublicTabsSection />
          <IPRSection />
          <ProjectsSection />
          <InnovationSection />
          <CollabSection />
          <ResourcesSection />
          <ContactFooter />
        </main>

        {/* Modals */}
        <AdminLoginModal />
        <AddDocumentModal />
        <DocumentViewerModal />
      </div>
    </AdminProvider>
  );
}

export default App;
