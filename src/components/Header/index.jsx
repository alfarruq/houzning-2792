import React from 'react';

const Header = () => {
    return (
        <header className="bg-[#0D263B] text-white py-4 px-6 md:px-12 lg:px-24 flex items-center justify-between">
            {/* Logo qismi */}
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 flex items-center justify-center">
                    {/* SVG Logo (Houzing ikonkasi) */}
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                </div>
                <span className="text-xl font-bold tracking-wider">Houzing</span>
            </div>

            {/* Navigatsiya linklari */}
            <nav className="hidden md:flex items-center gap-10">
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Home</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Properties</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-300">Contacts</a>
            </nav>

            {/* Login tugmasi */}
            <div>
                <button className="border border-white px-8 py-2 rounded-sm hover:bg-white hover:text-[#0D263B] transition-all duration-300 font-medium">
                    Login
                </button>
            </div>
        </header>
    );
};

export default Header;