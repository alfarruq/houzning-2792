import React from 'react'
import Register from './pages/Register' 

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">

      <nav className="bg-[#0D263B] text-white py-4 px-[10%] flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="text-2xl">⌂</span> Houzing
        </div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#" className="hover:text-blue-400">Home</a>
          <a href="#" className="hover:text-blue-400">Properties</a>
          <a href="#" className="hover:text-blue-400">Contacts</a>
        </div>
        <button className="border border-white px-6 py-2 rounded-sm text-sm">Login</button>
      </nav>


      <main className="flex-grow flex items-center justify-center py-20">
        <Register />
      </main>

     
      <footer className="bg-[#0D263B] text-white py-12 px-[10%] mt-auto">
        <div className="grid grid-cols-4 gap-8 border-b border-gray-700 pb-10">
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400">329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Discover</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Chicago</li>
              <li>Los Angeles</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Lists by Category</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>Apartments</li>
              <li>Condos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Lists by Category</h4>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>About Us</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App