// Hooks
import { useState } from 'react';
// Components
import InternalLinks from '../components/InternalLinks';
import IconLinks from '../components/IconLinks';
import ExternalLinks from '../components/ExternalLinks';
// Images
import Logo from '../assets/logo.png';

const Header = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);
    return (
        <header className="mx-auto max-w-7xl flex justify-between items-center flex-wrap px-3 py-3 md:py-0">
            <img src={Logo} alt="Logo" className="w-56 md:w-46" />
            <button 
              onClick={() => {setIsNavExpanded(!isNavExpanded);}}
            className="hamburger hidden bg-darkViolet flex flex-col justify-around p-2 h-10 rounded-full">
                <span className="h-0.5 w-6 bg-white inline-block"></span>
                <span className="h-0.5 w-6 bg-white inline-block"></span>
                <span className="h-0.5 w-6 bg-white inline-block"></span>
            </button>
            <nav className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
                <div className="flex items-center mx-auto">
                    <InternalLinks className="flex "/>
                    <ExternalLinks />
                </div>
                <IconLinks className='social-icons' />
            </nav> 
        </header>
    )
}

export default Header;