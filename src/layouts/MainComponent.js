import React from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
import NavbarTry from './NavbarTry';
import Footer from './Footer';
import SubscribeForm from './SubscribeForm';






const MainComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 }); // Adjust the breakpoint as needed

  return (
    <div>
    <NavbarTry/>
      {isMobile ? <MobileLayout /> : <DesktopLayout />}
      <SubscribeForm/>
    <Footer/>
    </div>
  );
};

export default MainComponent;
