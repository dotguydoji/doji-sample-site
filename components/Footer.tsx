import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { BuildingOffice2Icon, ShieldCheckIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { COMPANY_NAME, NAV_LINKS, FOOTER_LINKS } from '../constants';

const socialLinks = [
  {
    href: "#",
    label: "Follow us on Facebook",
    viewBox: "0 0 24 24",
    path: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.001 10.001 0 0022 12z"
  },
  {
    href: "#",
    label: "Follow us on Instagram",
    viewBox: "0 0 24 24",
    path: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 3.52c.636-.247 1.363.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
  },
  {
    href: "#",
    label: "Follow us on LinkedIn",
    viewBox: "0 0 24 24",
    path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  }
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-theme-bg-med text-theme-text-secondary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <BuildingOffice2Icon className="h-8 w-8 text-theme-text-primary" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-theme-text-primary font-serif">{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm">Your trusted partner in finding the perfect property. We are committed to providing exceptional service and expertise.</p>
            <div className="flex mt-4 space-x-2">
                {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="p-2 rounded-full hover:bg-theme-bg-light hover:text-theme-accent transition-colors duration-300" aria-label={social.label}>
                        <svg className="w-6 h-6" fill="currentColor" viewBox={social.viewBox} aria-hidden="true">
                            <path fillRule="evenodd" d={social.path} clipRule="evenodd" />
                        </svg>
                    </a>
                ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-theme-text-primary uppercase tracking-wider font-serif">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {[...NAV_LINKS.slice(1), ...FOOTER_LINKS].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-theme-accent transition-colors duration-300 text-sm">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-theme-text-primary uppercase tracking-wider font-serif">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:inquire@compd.com" className="hover:text-theme-accent">inquire@compd.com</a></li>
              <li><a href="tel:+1234567890" className="hover:text-theme-accent">+1 (234) 567-890</a></li>
              <li>123 Property Ave, Metro City</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-theme-text-primary uppercase tracking-wider font-serif">Get Our Free Guide</h3>
            <p className="text-sm mb-4">Subscribe for our Free Condo Buying Guide and get the latest property listings.</p>
            <form>
              <label htmlFor="footer-email" className="sr-only">Email Address</label>
              <div className="flex items-center">
                <input 
                  type="email"
                  id="footer-email"
                  placeholder="Your Email" 
                  className="bg-theme-bg-light w-full p-2 rounded-l-md text-theme-text-primary placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent"
                  autoComplete="email"
                  required
                />
                <button 
                  type="submit" 
                  className="bg-theme-accent text-theme-text-primary p-2 rounded-r-md hover:bg-theme-accent-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-theme-bg-med focus:ring-theme-accent transition-colors duration-300"
                  aria-label="Subscribe to newsletter"
                >
                  <PaperAirplaneIcon className="h-6 w-6"/>
                </button>
              </div>
            </form>
          </div>
        </div>
         <div className="mt-12 pt-8 border-t border-theme-bg-light flex flex-col sm:flex-row justify-center items-center flex-wrap gap-x-8 gap-y-4 text-sm">
            <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 mr-2 text-theme-text-primary"/>
                <span>Top Sales Performer 2023</span>
            </div>
             <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 mr-2 text-theme-text-primary"/>
                <span>Licensed Real Estate Broker #12345</span>
            </div>
             <div className="flex items-center">
                <ShieldCheckIcon className="h-6 w-6 mr-2 text-theme-text-primary"/>
                <span>Member of National Realtors Board</span>
            </div>
        </div>
      </div>
      <div className="bg-theme-bg-dark py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} {COMPANY_NAME}. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default memo(Footer);