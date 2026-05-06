import React from 'react'
import '../../index.css'
import bgHome from '../../assets/bgHome.png'
import bed from '../../assets/bed.svg'
import car from '../../assets/car.svg'
import bath from '../../assets/bath.svg'
import ruler from '../../assets/ruler.svg'
import images from '../../assets/images.png'
import images2 from '../../assets/images2.png'
import images3 from '../../assets/images3.png'
import discord from '../../assets/discord.svg'
import house from '../../assets/house.svg' 
import calculator from '../../assets/calculator.svg'
import maps from '../../assets/maps.svg'

const Home = () => {
    return (
        <div>
            <section
                style={{ backgroundImage: `url(${bgHome})` }}
                className='flex flex-col bg-cover justify-center items-center pt-33.5'
            >
                <h1 className='text-[#FFFFFF] text-[44px]'>Skyper Pool Partment</h1>
                <p className='text-[#FFFFFF] pt-2 pb-6 text-[16px]'>112 Glenwood Ave Hyde Park, Boston, MA</p>
                <div className='flex gap-6'>
                    <div className='flex-col flex items-center justify-center'>
                        <img src={bed} alt="bed" />
                        <p className='text-[#FFFFFF] text-[16px]'>4 beds</p>
                    </div>
                    <div className='flex-col flex items-center justify-center'>
                        <img src={bath} alt="bath" />
                        <p className='text-[#FFFFFF] text-[16px]'>5 Baths</p>
                    </div>
                    <div className='flex-col flex items-center justify-center'>
                        <img src={car} alt="car" />
                        <p className='text-[#FFFFFF] text-[16px]'>1 Garage</p>
                    </div>
                    <div className='flex-col flex items-center justify-center'>
                        <img src={ruler} alt="ruler" />
                        <p className='text-[#FFFFFF] text-[16px]'>1200 Sq Ft</p>
                    </div>
                </div>
                <p className='text-[#FFFFFF] text-[28px] pt-6 pb-12'>$5,250/mo</p>
                <button className='border border-[#FFFFFF] w-45 text-[#FFFFFF] text-[14px] py-3 mb-36.5'>
                    Read more
                </button>
            </section>

            <section>
                <div className='flex flex-col justify-center items-center pt-12 pb-10'>
                    <p className=' text-[#0D263B] text-[28px]'>Recommended</p>
                    <p className='text-[#696969] text-[16px]'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
                </div>
                <div className='pb-22 flex justify-center items-center'>
                    <div className="p-3">
                        <div
                            className="bg-white overflow-hidden shadow-lg max-w-sm mx-auto"
                            style={{ border: '0.5px solid #e5e7eb' }}
                        >
                            <div className="relative">
                                <img src={images} alt="property" className="w-full object-cover" />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Featured
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        For Sale
                                    </span>
                                </div>
                                <div className="absolute -bottom-5 right-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
                                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                                            AG
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-7 px-4 pb-4">
                                <h2 className="text-gray-900 font-bold text-lg leading-tight">
                                    New Apartment Nice View
                                </h2>
                                <p className="text-gray-400 text-sm mt-0.5">Quincy St, Brooklyn, NY, USA</p>

                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">4 Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">5 Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1 Garage</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1200 Sq Ft</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <span className="text-gray-400 text-sm line-through">$2,800/mo</span>
                                        <div className="text-gray-900 text-2xl font-extrabold">
                                            $7,500<span className="text-sm font-medium text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                            </svg>
                                        </button>
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-red-400 hover:bg-red-50">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div
                            className="bg-white overflow-hidden shadow-lg max-w-sm mx-auto"
                            style={{ border: '0.5px solid #e5e7eb' }}
                        >
                            <div className="relative">
                                <img src={images2} alt="property" className="w-full object-cover" />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Featured
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        For Sale
                                    </span>
                                </div>
                                <div className="absolute -bottom-5 right-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
                                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                                            AG
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-7 px-4 pb-4">
                                <h2 className="text-gray-900 font-bold text-lg leading-tight">
                                    New Apartment Nice View
                                </h2>
                                <p className="text-gray-400 text-sm mt-0.5">Quincy St, Brooklyn, NY, USA</p>

                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">4 Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">5 Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1 Garage</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1200 Sq Ft</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <span className="text-gray-400 text-sm line-through">$2,800/mo</span>
                                        <div className="text-gray-900 text-2xl font-extrabold">
                                            $7,500<span className="text-sm font-medium text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                            </svg>
                                        </button>
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-red-400 hover:bg-red-50">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-3">
                        <div
                            className="bg-white overflow-hidden shadow-lg max-w-sm mx-auto"
                            style={{ border: '0.5px solid #e5e7eb' }}
                        >
                            <div className="relative">
                                <img src={images3} alt="property" className="w-full object-cover" />
                                <div className="absolute top-3 left-3">
                                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        Featured
                                    </span>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <span className="bg-gray-900 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                                        For Sale
                                    </span>
                                </div>
                                <div className="absolute -bottom-5 right-4">
                                    <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow">
                                        <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white text-xs font-bold">
                                            AG
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-7 px-4 pb-4">
                                <h2 className="text-gray-900 font-bold text-lg leading-tight">
                                    New Apartment Nice View
                                </h2>
                                <p className="text-gray-400 text-sm mt-0.5">Quincy St, Brooklyn, NY, USA</p>

                                <div className="grid grid-cols-4 gap-2 mt-4">
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">4 Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M4 12a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2M4 12v6a2 2 0 002 2h12a2 2 0 002-2v-6" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">5 Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1 Garage</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                        </svg>
                                        <span className="text-gray-800 text-xs font-semibold mt-1">1200 Sq Ft</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <span className="text-gray-400 text-sm line-through">$2,800/mo</span>
                                        <div className="text-gray-900 text-2xl font-extrabold">
                                            $7,500<span className="text-sm font-medium text-gray-500">/mo</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-gray-50">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-16h2a2 2 0 012 2v2m0 8v2a2 2 0 01-2 2h-2" />
                                            </svg>
                                        </button>
                                        <button className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-red-400 hover:bg-red-50">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            < section className='bg-[#F5F7FC]' >
                <div className=' flex flex-col justify-center items-center pt-12 pb-10'>
                    <p className='text-[#0D263B] text-[28px]'>
                        Why Choose Us?
                    </p>
                    <p className=' text-[#696969] text-[16px]'>
                        Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
                    </p>
                </div>
                <div className='flex gap-19.25 justify-center items-center pb-12'>
                    <div>
                        <div className=' flex justify-center text-center w-50 items-center '>
                            <img src={discord} alt="logo" />
                        </div>
                        <p className='text-[#0D263B] text-[18px] text-center pt-6 pb-2 w-50'>Trusted By Thousands</p>
                        <p className='text-[#696969] text-[16px] w-58.75 text-center'>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </p>
                    </div>
                    <div>
                        <div className=' flex justify-center text-center w-50 items-center '>
                            <img src={house} alt="logo" />
                        </div>
                        <p className='text-[#0D263B] text-[18px] text-center pt-6 pb-2 w-70'>Wide Renge Of Properties</p>
                        <p className='text-[#696969] text-[16px] w-58.75 text-center'>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </p>
                    </div>
                    <div>
                        <div className=' flex justify-center text-center w-50 items-center '>
                            <img src={calculator} alt="logo" />
                        </div>
                        <p className='text-[#0D263B] text-[18px] text-center pt-6 pb-2 w-50'>Financing Made Easy</p>
                        <p className='text-[#696969] text-[16px] w-58.75 text-center'>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </p>
                    </div>
                    <div>
                        <div className=' flex justify-center text-center w-50 items-center '>
                            <img src={maps} alt="logo" />
                        </div>
                        <p className='text-[#0D263B] text-[18px] text-center pt-6 pb-2 w-50'>See Neighborhoods</p>
                        <p className='text-[#696969] text-[16px] w-58.75 text-center'>
                            With over 1 million+ homes for sale available on the website, Trulia can match you with a house you will want to call home.
                        </p>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Home