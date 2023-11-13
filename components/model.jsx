import React from 'react'
import "@/styles/model.css";

function layout() {
  return (
      <div>
          <div className='model_layout'>
              <div className='mx-4'>
                  <div className='model '>
                      <div>
                          <div className='relative min-h-[250px] md:min-h-[300px] lg:min-h-[450px] '>
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
                              <button className='w-full text-xl'></button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default layout