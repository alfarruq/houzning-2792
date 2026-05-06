import React from 'react'

const Register = () => {
  const inputStyle = "w-full border-b border-gray-300 py-2 outline-none focus:border-blue-500 text-sm transition-all mb-6";

  return (
    <div className="bg-white p-8 rounded-md shadow-lg w-full max-w-[580px] border border-gray-100">
      <h2 className="text-xl font-bold mb-8 text-[#0D263B]">Registration</h2>
      
      <form>
        <input type="text" placeholder="Login" className={inputStyle} />
        <input type="text" placeholder="First name" className={inputStyle} />
        <input type="text" placeholder="Last name" className={inputStyle} />
        <input type="email" placeholder="Email" className={inputStyle} />
        
        <select className={inputStyle}>
          <option value="">User role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
        
        <input type="password" placeholder="Password" className={inputStyle} />
        <input type="password" placeholder="Re-enter password" className={inputStyle} />

        <button 
          type="submit" 
          className="w-full bg-[#0061DF] text-white py-3 rounded-md font-medium hover:bg-blue-700 transition-colors mt-4"
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Register