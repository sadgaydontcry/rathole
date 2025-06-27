import React from "react";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <header className="fixed top-3 right-3 pt-3 text-pink-200 z-50 max-w-md">
      <div className="flex flex-col space-y-3"> 
        <div>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block text-right py-2"
          >
            Book a Tattoo
          </Link>
        </div>
        
        <div>
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block text-right py-2"
          >
            Visions
          </Link>
        </div>
        
        <div>
          <Link
            to="admin_ash"              // Changed from "my_heart" to "admin"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer block text-right py-2"
          >
            Enter test         
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;