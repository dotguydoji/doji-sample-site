import React, { useState, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS, COMPANY_NAME } from '../constants';
import { BuildingOffice2Icon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#4299E1',
    borderBottom: '2px solid #4299E1'
  };

  const linkStyle = "block py-2 px-3 text-theme-text-secondary rounded hover:bg-theme-bg-med md:hover:bg-transparent md:border-0 md:hover:text-theme-text-primary md:p-0 transition-colors duration-300";

  return (
    <header className="bg-theme-bg-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between mx-auto py-4">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <BuildingOffice2Icon className="h-8 w-8 text-theme-text-primary" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-theme-text-primary font-serif">{COMPANY_NAME}</span>
          </NavLink>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-theme-text-secondary rounded-lg md:hidden hover:bg-theme-bg-med focus:outline-none focus:ring-2 focus:ring-theme-text-primary"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-theme-bg-light rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) => linkStyle}
                    style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default memo(Header);