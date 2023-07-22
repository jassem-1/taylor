import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import NavbarTry from './NavbarTry';
import Navbar from '../components/Navbar';

const MainComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed

  return (
    <div>
    <NavbarTry/>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
    </div>
  );
};

export default MainComponent;
