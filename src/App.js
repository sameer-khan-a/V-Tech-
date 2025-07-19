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
import TechCourses from './components/courses/TechCourses';
import NonTechCourses from './components/courses/NonTechCourses';
import CoursesOffered from './components/courses/CoursesOffered';
import BookAppointment from './components/BookAppointment';
import SuccessDetails from './components/SuccessDetails';
import HiringDetails from './components/HiringDetails';
import VTechGallery from './components/VTechGallery';
import VTechActivities from './components/VTechActivities';
import Support from './components/Support';
import VtechCACS from './components/VtechCACS';

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
        <Route path='/TechCourses' element={<TechCourses />} />
        <Route path='/NonTechCourses' element={<NonTechCourses />} />
        <Route path='/CoursesOffered' element={<CoursesOffered />} />
        <Route path='/BookAppointment' element={<BookAppointment />} />
        <Route path='/SuccessDetails' element={<SuccessDetails />} />
        <Route path='/HiringDetails' element={<HiringDetails />} />
        <Route path='/VTechGallery' element={<VTechGallery />} />
        <Route path='/VTechActivities' element={<VTechActivities />} />
        <Route path='/Support' element={<Support />} />
        <Route path='/VtechCACS' element={<VtechCACS />} />

   
      
      </Routes>
    </>
  )
}

export default App;
