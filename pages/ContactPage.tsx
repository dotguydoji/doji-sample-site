import React from 'react';
import Button from '../components/Button';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { pageData } from '../data/pageData';

const ContactPage: React.FC = () => {
  const content = pageData.contact;
  const inputStyles = "w-full p-3 bg-theme-bg-light text-theme-text-primary rounded-md placeholder-theme-text-secondary focus:outline-none focus:ring-2 focus:ring-theme-accent";

  return (
    <div className="animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-theme-text-primary font-serif">{content.title}</h1>
          <p className="text-lg text-theme-text-secondary mt-2 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-theme-bg-med p-6 sm:p-8 md:p-12 rounded-lg">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary font-serif">Send an Inquiry</h2>
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="first-name" className="sr-only">First Name</label>
                  <input type="text" id="first-name" name="first-name" placeholder="First Name" className={inputStyles} autoComplete="given-name" required />
                </div>
                <div>
                  <label htmlFor="last-name" className="sr-only">Last Name</label>
                  <input type="text" id="last-name" name="last-name" placeholder="Last Name" className={inputStyles} autoComplete="family-name" required />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" className={inputStyles} autoComplete="email" required />
              </div>
              <div className="mb-4">
                <label htmlFor="phone" className="sr-only">Your Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" className={inputStyles} autoComplete="tel" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea id="message" name="message" placeholder="Your Message" rows={5} className={inputStyles} required></textarea>
              </div>
              <Button type="submit" variant="primary" className="w-full inline-flex items-center justify-center">
                <PaperAirplaneIcon className="h-5 w-5 mr-2"/>
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Details */}
          <div className="bg-theme-bg-dark p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-theme-text-primary font-serif">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 mr-4 text-theme-text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary font-serif">Email</h3>
                  <a href="mailto:inquire@compd.com" className="text-theme-text-secondary hover:text-theme-accent">inquire@compd.com</a>
                </div>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 mr-4 text-theme-text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary font-serif">Phone</h3>
                  <a href="tel:+1234567890" className="text-theme-text-secondary hover:text-theme-accent">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-center">
                <MapPinIcon className="h-6 w-6 mr-4 text-theme-text-secondary" />
                <div>
                  <h3 className="text-lg font-semibold text-theme-text-primary font-serif">Office</h3>
                  <p className="text-theme-text-secondary">123 Property Ave, Metro City</p>
                </div>
              </div>
            </div>
              <div className="mt-8 pt-6 border-t border-theme-bg-light">
                  <h3 className="text-lg font-semibold text-theme-text-primary mb-4 font-serif">Follow Us</h3>
                   <div className="flex mt-4 space-x-6">
                      <a href="#" className="text-theme-text-secondary hover:text-theme-accent" aria-label="Follow us on Facebook">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.001 10.001 0 0022 12z" clipRule="evenodd" />
                          </svg>
                      </a>
                      <a href="#" className="text-theme-text-secondary hover:text-theme-accent" aria-label="Follow us on Instagram">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 3.52c.636-.247 1.363.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm5.25-8.25a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
                          </svg>
                      </a>
                      <a href="#" className="text-theme-text-secondary hover:text-theme-accent" aria-label="Follow us on LinkedIn">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                          </svg>
                      </a>
                      <a href="#" className="text-theme-text-secondary hover:text-theme-accent" aria-label="Follow us on Twitter">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;