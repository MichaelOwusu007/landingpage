import React from 'react';
import "./Register.css";

function registerpage() {
  return (
      <main className='flex-1 text-white'>
          <div></div>
          <section className=' relative overflow-clip lg:min-h-[100vh] '>
        <img
        className="absolute hidden lg:block w-[1086px] h-[800px] -top-10 left-[-80px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
              />
              <img src="/img/puple-contact.png" alt="" className='absolute hidden lg:block -bottom-[10px] w-[800px] bg-blend-hard-light right-0' />
              <div className=' mx-auto w-full px-4 '>
                  <h2 className=' font-semibold py-2 lg:hidden text-start block text-pink-500 mt-20 text-[22px] lg:text-[25px] '>Register</h2>
              </div>
              <div className=' mx-auto max-w-[1500px] relative justify-between items-center px-4 flex-col lg:flex-row flex '>
                  <div className=' w-full lg:w-[45%] relative '>
                      <img src="/img/sata-gra.png" alt="" className='absolute w-[30px] lg:w-[30px] top-[-50px] left-[80%] lg:top-[150px] ' />
                      <img src="/img/3d-graphic-designer-showing-thumbs-up-png-1.png " alt=""  className=' w-[250px] md:w-[400px] mx-auto lg:w-max scale-[0.8] lg:scale-100 xl:m-[80px] lg:mt-[150px] '/>
                  </div>
                  <div className='w-full relative lg:w-[50%] '>
                      {/*images */}
                      <section className=' lg:bg-zinc-300 pb-10 lg:bg-opacity-5 flex flex-col space-y-4 rounded-[5px] lg:py-16 register '>
                          <div className='w-[90%] md:w-[80%] lg:min-w[400px] xl:min-w-[500px] mx-auto '>
                              <div>
                                  <h2 className='font-semibold hidden lg:block text-pink-500 mb-6 text-[22px] lg:text-[25px] '>
                                      Register
                                  </h2>
                                  <div className='flex gap-2 items-baseline'>
                                      <p>Be part of this movement</p>
                                      <div className=' relative items-center justify-center flex border-dashed border-pink-500 min-w-[100px] md:min-w-[150px] '>
                                          <img src="/img/1f6b6-2640.png" alt="" />
                                          <img src="/img/image-processing20200511-10310-13mnlsx.png" alt="" />
                                      </div>
                                  </div>
                                  <h2 className=' text-[25px] tracking-wide '>CREATE YOUR ACCOUNT</h2>
                              </div>
                              <form action="#">
                                  <fieldset className=' grid grid-cols-1 lg:grid-cols-2 gap-8 my-4 '>
                                      <div className=' flex flex-col gap-2 '>
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
                                           <div className=' flex flex-col gap-2 '>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Email
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Enter Email' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                           <div className=' flex flex-col gap-2 '>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Project Topic
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Project topic here' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                           <div className=' flex flex-col gap-2 '>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Category
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Enter Category' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                           <div className=' flex flex-col gap-2 '>
                                          <label htmlFor="teamname" className='font-semibold'>
                                              Group Size
                                          </label>
                                          <input type="text" name='teamname' id='teamname' placeholder='Group Size(1-10)' className=' border p-4 bg-zinc-300 bg-opacity-5 rounded-md w-full' />
                                      </div>
                                  </fieldset>
                                  <fieldset className='space-y-3'>
                                      <span className=' text-[#FF25B8] '>Please review your registration details before submitting</span>
                                      <div className=' flex gap-3 '>
                                          <input type="checkbox" name='agree' className=' bg-transparent' />
                                          <label htmlFor="agree" className='text-red-500'> I agreed with the event terms and conditions privacy policy</label>
                                      </div>
                                        <a href="" className=' justify-center flex '><button className='bg-primary-gradient w-[250px] justify-center items-center  rounded-md  flex active:scale-95 h-[50px]  mt-4 '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Register Now</div></button></a>
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

export default registerpage