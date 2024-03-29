import { useRef } from "react";
import SideMenu from "../SideNavbar/SideMenu";
import About from "./About";
import EventCarosel from "./EventCarosel";
import Header from "./Header";

const Landing = () => {
  const blobRef = useRef<any>();
  return (
    <div className="bg-[#231F20] w-full min-h-[100vh] relative">
      <Header />
      <About />
      <EventCarosel />
      {/*<Camilleon />*/}
      <SideMenu />
    </div>
  );
};

export default Landing;
