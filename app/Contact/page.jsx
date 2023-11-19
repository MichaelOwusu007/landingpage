import React from 'react';
import "./Contact.css";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function contactpage() {
  return (
        <main className='flex-1 text-white'>
          <div></div>
      <section className=' relative overflow-clip lg:min-h-[100vh] '>
        
        <img
        className="absolute hidden lg:block w-[800px] h-[800px] -top-10 left-[-80px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
              />
              <img src="/img/purple-lens-flare-png-10.png" alt="" className='absolute hidden lg:block -bottom-[100px] w-[800px] bg-blend-hard-light right-0' />
              <div className=' mx-auto w-full px-4 '>
                  <h2 className=' font-semibold py-2 lg:hidden text-start block mt-16 text-[22px] lg:text-[25px] '>Contact</h2>
              </div>
        <div className=' mx-auto max-w-[1500px] relative justify-between items-center px-6 flex-col lg:flex-row flex '>
          {/* change */}
          <section className=' lg:w-[45%] relative hidden lg:block space-y-8 font-medium text-xl '>
            <img src="/img/sata-gra.png" alt="" className='absolute w-[30px] lg:w-[30px] top-[-50px] left-[80%] lg:top-[150px] ' />
            <h2 className=' text-[32px] text-pink font-semibold  '>Get in touch</h2>
            <p>
              Contact 
              <br />
              Information
            </p>
            <p>
              27,Alara Street 
              <br /> 
              Yaba 100012 
              <br /> 
              Lagos State 
            </p>
            <p> Call us: 07067981819</p>
            <p>we are open from Monday-Friday
              <br /> 
              08:00am - 05:00pm
            </p>
            <div className='flex flex-col gap-4'>
              <h3 className=' text-pink-500 text-[20px] font-bold '>Share on</h3>
             <ul className='flex gap-3'>
                <li><a href='/'><i className='text-xl'><FaXTwitter /></i></a></li>
                <li><a href='/'><i className='font-bold text-xl'><FaFacebookF /></i></a></li>
                <li><a href='/'><i className='text-xl font-bold'><FaInstagram /></i></a></li>
                 <li><a href='/'><i className='text-xl font-bold'><FaLinkedinIn/></i></a></li>
              </ul>
            </div>
                    </section>
                  <div className='w-full relative lg:w-[50%] '>
                      {/*images */}
                      <section className=' lg:bg-zinc-300 pb-10 lg:bg-opacity-5 flex flex-col space-y-4 rounded-[5px] lg:py-16 contact '>
                          <div className='w-[90%] md:w-[80%] lg:min-w[400px] xl:min-w-[500px] mx-auto '>
                              <div>
                                  
                                  <div className='font-bold text-[22px] text-pink-500 lg:mt-4 '>
                                      <p>Questions or need assistant?
                            <br />
                      Let us know about it
                                      </p>
                                  </div>
                              </div>
                              <form action="#">
                                  <fieldset className=' grid grid-cols-1  space-y-8 lg:space-y-10 '>
                                      <div className=' flex flex-col gap-2 mt-4'>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Team's Name
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Enter name ' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                           <div className=' flex flex-col gap-2 '>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Phone
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Enter number' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                             
                                  </fieldset>
                                  <fieldset className='space-y-8 lg:space-y-10 mt-10'>
                                      <textarea name="message" id="message" placeholder='Message' className=' border p-4 rounded-md bg-zinc-300 bg-opacity-5 w-full min-h-[200px] h-[200px] '></textarea>
                                        <a href="" className=' justify-center flex '><button className='bg-primary-gradient w-[250px] justify-center items-center  rounded-md  flex active:scale-95 h-[50px]  mt-2 '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Submit</div></button></a>
                                  </fieldset>
                              </form>
                          </div>
                      </section>
                  </div>
              </div>
          </section>
      </main>
  )
}

export default contactpage