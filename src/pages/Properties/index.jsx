import React from 'react'
import search from '/src/assets/search.svg'
import rulershovi from '/src/assets/rulershovi.svg'
import serdseshovi from '/src/assets/serdseshovi.svg'
import shovibath from '/src/assets/shovibath.svg'
import shovibed from '/src/assets/shovibed.svg'
import shovihouse1 from '/src/assets/shovihouse1.png'
import shovicar from '/src/assets/shovicar.svg'
import shovihouse2 from '/src/assets/shovihouse2.png'
import shovihouse3 from '/src/assets/shovihouse3.png'
import shoviperson1 from '/src/assets/shoviperson1.png'
import shoviperson2 from '/src/assets/shoviperson2.png'
import shoviperson3 from '/src/assets/shoviperson3.png'
import strelkashovi from '/src/assets/strelkashovi.svg'

const Properties = () => {
    return (
        <div className='max-w-295 mx-auto'>
            <div>
                <h1 className='text-[#0D263B] text-[28px] mt-16 text-center'>Properties</h1>
                <p className='mt-2 text-[#696969] text-[16px] text-center'>Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</p>
            </div>


            <div className='flex mt-16 items-center justify-between'>
                <p className='text-[#696969] text-[14px] '>13,474 results</p>
                <p className='text-[#696969] border-b border-[#8c8c8c] text-[14px] '><span className='font-bold'>Sort by:</span> Newest Listing</p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-5'>
                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse1} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson1} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className='relative'>
                            <img src={shovihouse2} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson2} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse3} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson3} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse1} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson1} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className='relative'>
                            <img src={shovihouse2} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson2} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse3} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson3} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse1} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson1} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className='relative'>
                            <img src={shovihouse2} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson2} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse3} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson3} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse1} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson1} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className='relative'>
                            <img src={shovihouse2} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson2} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse3} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson3} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse1} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson1} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className='relative'>
                            <img src={shovihouse2} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson2} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-95 mt-4 border-[#E6E9EC] border'>
                    <div>
                        <div className=' relative'>
                            <img src={shovihouse3} alt="House 1" />
                            <p className='bg-[#0061DF] absolute top-5 left-9 text-white w-18.25 py-1.25 px-3.25 text-[12px] font-semibold'>Featured</p>
                            <p className='absolute top-5 right-9 bg-[#0D263B] text-white px-3.25 py-1.25 text-[14px] font-semibold'>For Sale</p>
                            <img className='absolute bg-white rounded-full p-0.5 -bottom-5 right-7' src={shoviperson3} alt="Person 1" />
                        </div>
                        <div className='px-5 pt-6 pb-4 border-[#E6E9EC] border-b'>
                            <h2 className='text-[#0D263B] text-[16px] font-semibold'>New Apartment Nice View</h2>
                            <p className='text-[#696969] text-[14px] font-normal mb-4'>Quincy St, Brooklyn, NY, USA</p>
                            <div className='flex justify-between mx-auto text-center'>
                                <div className=''>
                                    <img className='m-auto' src={shovibed} alt="" />
                                    <p className='text-[#696969] text-[14px]'>4 beds</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovibath} alt="" />
                                    <p className='text-[#696969] text-[14px]'>5 baths</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={shovicar} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1 garage</p>
                                </div>
                                <div>
                                    <img className='m-auto' src={rulershovi} alt="" />
                                    <p className='text-[#696969] text-[14px]'>1,200 sqft</p>
                                </div>
                            </div>
                        </div>

                        <div className='px-5 pt-2 pb-4 flex items-center justify-between'>
                            <div>
                                <p className='text-[#696969] text-[12px] line-through'>$2,800/mo</p>
                                <h3 className='text-[#0D263B] text-[16px] font-bold'> $7,500/mo</h3>
                            </div>
                            <div className='flex items-center gap-5'>
                                <img src={strelkashovi} alt="" />
                                <img className='bg-[#F6F8F9] rounded-full p-3' src={serdseshovi} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className='bg-[#0061DF] mx-auto w-62.5 mt-12 mb-24 flex justify-center items-center  text-white py-3 px-[84.5px] rounded-md hover:bg-[#0052c7]'>Show more</button>
        </div>
    )
}

export default Properties