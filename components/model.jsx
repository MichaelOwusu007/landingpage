import React from 'react'
import "@/styles/model.css";

function layout() {
  return (
      <div>
          <div className='model_layout'>
              <div className='mx-4'>
                  <div className='model '>
                      <div>
                          <div className='relative min-h-[250px] md:min-h-[300px] lg:min-h-[420px] '>
                              <img className=' w-[350px] absolute -right-2 md:w-[500px] mx-auto lg:w-max scale-[0.6] lg:scale-[0.8] ' src="/img/hurray.webp" alt="hurray" />
                              <img className=' absolute top-4 w-[250px] md:top-0 -left-8 md:w-[400px] mx-auto lg:w-max scale-[0.6] lg:scale-[0.8]  ' src="/img/tick.webp" alt="tick" />
                          </div>
                          <div className='space-y-3'>
                              <h3 className='font-semibold text-center text-[20px] lg:text-[25px]  '>Congratulation <br /> you have sucessfully registered!</h3>
                              <div className='text-center text-[16px] lg:text-[18px] '>
                                  <p>
                                      Yes, it was easy and you did it!
                                      <br />
                                      check your email box for next step
                                  </p>
                              </div>
                             <a href="/Register" className=' justify-center flex '><button className='bg-primary-gradient w-[200px] justify-center items-center  rounded-md  flex active:scale-95 h-[50px]  mt-4 '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Back</div></button></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default layout