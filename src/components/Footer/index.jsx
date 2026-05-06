import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  ChevronUp 
} from "lucide-react";

// Agar yuqoridagilar xato bersa, buni ishlating:

const Footer = () => {
  return (
    <footer className="bg-[#0D263B] text-white pt-16 pb-8 px-6 md:px-12 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-8">Contact Us</h3>
          <div className="space-y-5 text-gray-300 text-sm">
            <div className="flex gap-3">
              <MapPin size={20} className="text-white shrink-0" />
              <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-white" />
              <p>123 456 7890</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-white" />
              <p>support@houzing.com</p>
            </div>
          </div>
          {/* Social Icons */}
          <div className="flex gap-4 mt-8 items-center">
            <a href="#" className="p-2 hover:bg-gray-700 rounded-md transition-all"></a>
            <a href="#" className="p-2 hover:bg-gray-700 rounded-md transition-all"></a>
            <a href="#" className="p-2 bg-gray-800 rounded-md transition-all"></a>
            <a href="#" className="p-2 hover:bg-gray-700 rounded-md transition-all"></a>
          </div>
        </div>

        {/* Discover */}
        <div>
          <h3 className="text-lg font-bold mb-8">Discover</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Chicago</li>
            <li className="hover:text-white cursor-pointer">Los Angeles</li>
            <li className="hover:text-white cursor-pointer">Miami</li>
            <li className="hover:text-white cursor-pointer">New York</li>
          </ul>
        </div>

        {/* Lists by Category 1 */}
        <div>
          <h3 className="text-lg font-bold mb-8">Lists by Category</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Apartments</li>
            <li className="hover:text-white cursor-pointer">Condos</li>
            <li className="hover:text-white cursor-pointer">Houses</li>
            <li className="hover:text-white cursor-pointer">Offices</li>
            <li className="hover:text-white cursor-pointer">Retail</li>
            <li className="hover:text-white cursor-pointer">Villas</li>
          </ul>
        </div>

        {/* Lists by Category 2 */}
        <div>
          <h3 className="text-lg font-bold mb-8">Lists by Category</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Support Center</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center">
             <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
               <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
               <polyline points="9 22 9 12 15 12 15 22"></polyline>
             </svg>
          </div>
          <span className="text-xl font-bold tracking-wider">Houzing</span>
        </div>
        
        <p className="text-gray-400 text-sm">
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </p>

        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#0061DF] p-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          <ChevronUp size={20} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;