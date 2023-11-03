"use client"


import React, {useState} from 'react';
import "./Home.css";
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';


function homepage() {

    const [isAnswerVisible1, setIsAnswerVisible1] = useState(false);
  const [isAnswerVisible2, setIsAnswerVisible2] = useState(false);
  const [isAnswerVisible3, setIsAnswerVisible3] = useState(false);
  const [isAnswerVisible4, setIsAnswerVisible4] = useState(false);
  const [isAnswerVisible5, setIsAnswerVisible5] = useState(false);

  const toggleAnswer1 = () => {
    setIsAnswerVisible1(!isAnswerVisible1);
  };

  const toggleAnswer2 = () => {
    setIsAnswerVisible2(!isAnswerVisible2);
  };

  const toggleAnswer3 = () => {
    setIsAnswerVisible3(!isAnswerVisible3);
  };

  const toggleAnswer4 = () => {
    setIsAnswerVisible4(!isAnswerVisible4);
  };

  const toggleAnswer5 = () => {
    setIsAnswerVisible5(!isAnswerVisible5);
  };
  

  return (
    <main className='w-full flex-1 mx-auto p-2 -z-10 overflow-hidden'>
      <section className='relative h-max xl:min-h-screen 2xl:min-h-[90vh] flex flex-col xl:flex-row space-y-4 lg:items-center z-0'>
        <section className=' flex flex-col  items-center justify-center w-full mx-auto h-full z-0  xl:items-start'>
          <span className='relative'>
             <p className='font-bold italic tracking-wide text-[22px] md:text-2xl lg:text-3xl mt-20'>Igniting a Revolution in HR Inovation</p>
            <img src='/img/vector-4.svg' className='absolute right-[10px]  '/>
          </span>
          <div>
          <img
        className="relative w-[1086px] h-[836px] -top-24 left-[-80px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
         />
          </div>
          <h1 className='absolute top-[180px] font-extrabold text-[48px] xl:text-[70px]  z-0 xl:pl-16 '>
            
            <span className='relative flex items-center justify-center'>getlinkedTech
             <img className="w-[18px] h-[26px] top-0 right-[70px] object-cover absolute" alt="Creative" src="/img/creative-1.png" />
            </span>
            <span className=' mx-auto flex items-center w-max'>Hackathon <span className='text-pink-600'>1.0</span>
              <span>
                <img src='/img/chain-9365116-7621444.png' width="500"  height="500" className=' w-[40px] h-[40px]'/>
              </span>
               <span>
                <img src='/img/1f-4a-5.png' width="500"  height="500" className=' w-[40px] h-[40px]'/>
              </span>
            </span>
          </h1>
          <p className=' text-[22px] font-semibold top-[400px] mt-[px] absolute text-center xl:pl-16 xl:text-start xl:w-[600px] lg:text-[28x] '>Participate in getlinked tech Hackathon 2023 stand a chance to win  big prize</p>
          <div className=' absolute mt-[300px] xl:mt-[300px] flex items-center flex-col justify-center xl:items-start xl:pl-16'>
          <a href=""><button className='bg-primary-gradient w-[200px] items-center rounded-md justify-center active:scale-95 h-[50px] flex'><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md mx-auto'>Register</div></button></a>
          <div className=' pt-10 flex gap-6 justify-center items-center  text-[40px] lg:text-[60px] text-center  '>
            <span>
              <span>16</span>
              <span className='uppercase text-[25px] '>d</span>
            </span>
            <span>
              <span>16</span>
              <span className='uppercase text-[25px] '>d</span>
            </span>
            <span>
              <span>16</span>
              <span className='uppercase text-[25px] '>d</span>
            </span>
            </div>
          </div>
           
        </section>
        <section className=''>
          <div className='relative flex lg:items-end xl:items-end justify-end lg:mr-[-700px] xl:mr-[0px] '>
           
            <img src='/img/purple-lens-flare-png-10.png' className='top-[-170px] w-[600px] h-[500px] absolute bg-blend-hard-light ' width="500" height="500" />
          </div>
          <div className='relative flex justify-center '>
            <img src='/img/man-wearing-smart-glasses-touching-virtual-screen-1.png' className='relative top-[-200px] xl:w-[1500px] xl:h-[680px] self-center  xl:top-[-70px] ' />
            <img src='/img/image-1.png' className='absolute top-[-250px] md:top-[-180px] xl:top-[-130px] sm:w-[667px] sm:h-[620px] flex items-center justify-center ' width="500" height="500"/>
          </div>
        </section>
      </section>
      <img src='/img/line-2.svg' className=' mt-[-200px] ' />
      <section className=' scroll-m-[150px] py-16'>
        <div className='scroll-m-[50px] overview'>
          <div className=' flex flex-col lg:flex-row items-center justify-between lg:gap-20 gap-14 false '>
            <div className=' relative w-full sm:w-[65%]  lg:w-[40%] '>
              <img src='/img/the-big-idea-1.png'/>
            </div>
            <div className=' w-full lg:w-[50%] relative lg:text-start text-center '>
              <h2 className=' font-bold text-[32px] sm:text-[38px]  '>
                Introduction to getlinked
                <br />
                <span className=' text-pink-600'>tech Hackathon 1.0</span>
              </h2>
              <img src='/img/sata-gra.png' className=' w-[30px] absolute top-4 right-2 ' />
              <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day,to shape the future.Whether you're a codding genius,a design maverick,or a concept wizard,you'ill have the chance to transfer your idea into reality.Solving real world problems pushing the boundaries of technology,and creating a solution that can change the world,that's what we're all about! 
              </p>
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png'/>
      <section className=' scroll-m-[150px] py-16 relative'>
        <img
        className="absolute w-[1086px] h-[800px] -top-24 left-[-80px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
        />
         <img src='/img/purple-lens-flare-png-4.png' className='top-[300px] w-[500px] h-[700px] absolute bg-blend-hard-light right-[-10px] ' width="500" height="500" />
        <div className='scroll-m-[50px] overview'>
          <div className=' flex flex-col lg:flex-row items-center justify-between lg:gap-20 gap-14 false '>
            <div className=' w-full lg:w-[50%] relative lg:text-start text-center '>
              <h2 className=' font-bold text-[32px] sm:text-[38px]  '>
                Rules an
                <br />
                <span className=' text-pink-600'>Guidelines</span>
              </h2>
              <img src='/img/sata-gra.png' className=' w-[30px] absolute top-4 right-2 ' />
              <p>
                Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day,to shape the future.Whether you're a codding genius,a design maverick,or a concept wizard,you'ill have the chance to transfer your idea into reality.Solving real world problems pushing the boundaries of technology,and creating a solution that can change the world,that's what we're all about! 
              </p>
            </div>
            <div className=' relative w-full sm:w-[65%] lg:w-[40%] '>
              <img src='/img/7450159-1.png' className='z-10 relative'/>
              {/*<img src='/img/Eclips.png' className='absolute top-12 z-[-1] right-[60px] md:right-[100px] xl:right-[30px] '/>*/}
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png' />
      <section className=' scroll-m-[150px] py-16'>
        <div className='scroll-m-[50px] overview'>
          <div className=' flex flex-col lg:flex-row items-center justify-between lg:gap-20 gap-14 false '>
            <div className=' relative w-full sm:w-[65%]  lg:w-[40%] '>
              <img src='/img/8046554-1.png'/>
            </div>
            <div className=' w-full lg:w-[50%] relative lg:text-start text-center '>
              <h2 className=' font-bold text-[32px] sm:text-[38px]  '>
                Judgining Criteria
                <br />
                <span className=' text-pink-600'>Key attribute</span>
              </h2>
              <img src='/img/sata-gra.png' className=' w-[30px] absolute top-4 right-2 ' />
              <ul className=' space-y-10'>
                <li>
                  <p>
                    <span className=' text-[#ff25B8] '>Innovation and Creativity:</span>
                    <span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative features.</span>
                  </p>
                </li>
                  <li>
                  <p>
                <span className=' text-[#ff25B8] '>Functionality:</span>
                <span> Assess how well the solution works. Does it perform its intended functions effectively and without
                major issues? Judges wouldconsider the completeness and robustness of the solution.</span>
                  </p>
                </li>
                <li>
                  <p>
                <span className=' text-[#ff25B8] '>Impact and relevance:</span>
                <span>Determine the potential impact of the solution in the real world. Does it address a significant
                problem, and is it relevant to the target audience? Judges would assess the potential social,economic, or environmental benefits.</span>
                  </p>
                </li>
                  <li>
                  <p>
                  <span className=' text-[#ff25B8] '>Technical Complexity:</span>
                <span>Evaluate the technical sophistication of the solution.Judges would consider the complexity of the code, the use of advanced technologies or algorithms, and the scalability of the
                solution.</span>
                  </p>
                </li>
                <li>
                  <p>
                <span className=' text-[#ff25B8] '>Innovation and Creativity:</span>
                <span>Evaluate the uniqueness and creativity of the solution. Consider whether it addresses a
                real-world problem in a novel way or introduces innovative features.</span>
                  </p>
                </li>
              </ul>
               <a href="" className=' justify-center items-center flex  xl:justify-start'><button className='bg-primary-gradient w-[200px] justify-center items-center  rounded-md text-center flex active:scale-95 h-[50px]  mt-12 '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Read More</div></button></a>
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png' />
      <section className='relative py-20 scroll-m-[150px] '>
        <div className=' lg:py-20 my-6 scroll-m-[50px] overview '>
          <div className=' flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20 '>
            <div className=' relative lg:w-[40%] space-y-10 lg:text-start text-center '>
              <img src='/img/sata-gra.png' className=' absolute -top-14 left-14 w-[30px] ' />
              <h2 className=' font-bold text-[40px] '>
                Frequently Asked
                <br />
                <span className=' text-pink-600'>Questions</span>
              </h2>
              <p>
                We  got answers to the questions that you might <br className='hidden lg:block'/>
                   want to ask about 
                <span className='font-bold text-lg'> getlinked Hackathon</span>
              </p>
              <ul className='space-y-10'>
             <div className='cursor-pointer Faq'>
                  <p
                    className='font-bold py-2 text-[16px] text-start md:text-[18px] flex items-center justify-between'
                    onClick={toggleAnswer1}
                  >
                    <span>Can I work on a project I started before the hackathon?</span>
                    <span>
                      {isAnswerVisible1 ? (
                        <MinimizeIcon className='text-pink-700' />
                      ) : (
                        <AddIcon className='text-pink-700' />
                      )}
                    </span>
                  </p>
                  {isAnswerVisible1 && (
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                      Yes, You can work on a project that you started before the hackathon. However, please make sure that
                      your project rules comply with the hackathon rules and guidelines.
                    </p>
                  )}
                </div>
                  <div className='cursor-pointer Faq'>
                  <p
                    className='font-bold py-2 text-[16px] text-start md:text-[18px] flex items-center justify-between'
                    onClick={toggleAnswer2}
                  >
                    <span>Can I work on a project I started before the hackathon?</span>
                    <span>
                      {isAnswerVisible2 ? (
                        <MinimizeIcon className='text-pink-700' />
                      ) : (
                        <AddIcon className='text-pink-700' />
                      )}
                    </span>
                  </p>
                  {isAnswerVisible2 && (
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                      Yes, You can work on a project that you started before the hackathon. However, please make sure that
                      your project rules comply with the hackathon rules and guidelines.
                    </p>
                  )}
                </div>
                  <div className='cursor-pointer Faq'>
                  <p
                    className='font-bold py-2 text-[16px] text-start md:text-[18px] flex items-center justify-between'
                    onClick={toggleAnswer3}
                  >
                    <span>Can I work on a project I started before the hackathon?</span>
                    <span>
                      {isAnswerVisible3 ? (
                        <MinimizeIcon className='text-pink-700' />
                      ) : (
                        <AddIcon className='text-pink-700' />
                      )}
                    </span>
                  </p>
                  {isAnswerVisible3 && (
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                      Yes, You can work on a project that you started before the hackathon. However, please make sure that
                      your project rules comply with the hackathon rules and guidelines.
                    </p>
                  )}
                </div>
                  <div className='cursor-pointer Faq'>
                  <p
                    className='font-bold py-2 text-[16px] text-start md:text-[18px] flex items-center justify-between'
                    onClick={toggleAnswer4}
                  >
                    <span>Can I work on a project I started before the hackathon?</span>
                    <span>
                      {isAnswerVisible4 ? (
                        <MinimizeIcon className='text-pink-700' />
                      ) : (
                        <AddIcon className='text-pink-700' />
                      )}
                    </span>
                  </p>
                  {isAnswerVisible4 && (
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                      Yes, You can work on a project that you started before the hackathon. However, please make sure that
                      your project rules comply with the hackathon rules and guidelines.
                    </p>
                  )}
                </div>
                  <div className='cursor-pointer Faq'>
                  <p
                    className='font-bold py-2 text-[16px] text-start md:text-[18px] flex items-center justify-between'
                    onClick={toggleAnswer5}
                  >
                    <span>Can I work on a project I started before the hackathon?</span>
                    <span>
                      {isAnswerVisible5 ? (
                        <MinimizeIcon className='text-pink-700' />
                      ) : (
                        <AddIcon className='text-pink-700' />
                      )}
                    </span>
                  </p>
                  {isAnswerVisible5 && (
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                      Yes, You can work on a project that you started before the hackathon. However, please make sure that
                      your project rules comply with the hackathon rules and guidelines.
                    </p>
                  )}
                </div>
              </ul>
            </div>
            <div className=' relative w-full sm:w-[65%] lg:w-[40%] '>
              <img src='/img/cwok-casual-21-1.png' className='z-10 relative'/>
              {/*<img src='/img/Eclips.png' className='absolute top-12 z-[-1] right-[60px] md:right-[100px] xl:right-[30px] '/>*/}
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png' />
      <section className='relative scroll-m-[150px] py-20  '>
        <div className='max-w-[1400px] mx-auto '>
          <div className='text-center space-y-4 lg:space-y-6 '>
            <h2 className=' text-[32px] font-bold '>Timeline</h2>
            <p className=' px-6'>Here is the breakdown of the time we anticipate
              <br className='hidden lg:block' />
              using for the upcoming event.
            </p>
          </div>
          <div className='py-2 lg:py-10 w-full mx-auto my-4 lg:my-6'>
            <div className=' space-y-4 px-6 md:px-10 lgpx-4 '>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end flex-1'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Hackathon Announcement</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=''></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default homepage
