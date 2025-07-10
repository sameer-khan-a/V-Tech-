import React from 'react';
import Home from './main';
import Navbar from './components/Navbar';
import Leadership from './components/Leadership';
import PlacementSection from './components/PlacementSection';
import AffiliationsSection from './components/AffiliationSection';
import SuccessStories from './components/SuccessStories';
import { Routes, Route } from 'react-router-dom';
import CourseSection from './components/CourseSection';
import MissionVision from './components/MissionVision';
import ContactSection from './components/ContactSection';
import InstituteDetails from './components/InstituteDetails';
import JainOnline from './components/Affiliations/JainOnline';
import BangaloreOnline from './components/Affiliations/BangloreUniversity';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MizoramOnline from './components/Affiliations/MizoramOnline';
import KSOUOnline from './components/Affiliations/KSOUOnline';
import AndhraOnline from './components/Affiliations/AndhraOnline';
import JainWLPOnline from './components/Affiliations/JainWLP';
import VignanOnline from './components/Affiliations/VignanOnline';
import UttaranchalOnline from './components/Affiliations/UttaranchalOnline';
function App() {
  return (
    <>
    
   <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Courses' element={<CourseSection />} />
        <Route path='/MissionVision' element={<MissionVision />} />
        <Route path='/Placements' element={<PlacementSection />} />
        <Route path='/SuccessStories' element={<SuccessStories />} />
        <Route path='/ContactSection' element={<ContactSection />} />
        <Route path='/AffiliationSection' element={<AffiliationsSection />} />
        <Route path='/LeadershipSection' element={<Leadership />} />
        <Route path='/JainOnline' element={<JainOnline />} />
        <Route path='/BangloreUniversity' element={<BangaloreOnline />} />
        <Route path='/MizoramUniversity' element={<MizoramOnline />} />
        <Route path='/KSOUUniversity' element={<KSOUOnline />} />
        <Route path='/AndhraUniversity' element={<AndhraOnline />} />
        <Route path='/JainWLP' element={<JainWLPOnline />} />
        <Route path='/VignanUniversity' element={<VignanOnline />} />
        <Route path='/UttaranchalUniversity' element={<UttaranchalOnline />} />

   
      
      </Routes>
    </>
  )
}

export default App;
