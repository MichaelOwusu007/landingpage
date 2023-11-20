"use client"


import React, {useState, useEffect} from 'react';
import "./Home.css";
import AddIcon from '@mui/icons-material/Add';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineAddIcCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function homepage() {

    const [isAnswerVisible1, setIsAnswerVisible1] = useState(false);
  const [isAnswerVisible2, setIsAnswerVisible2] = useState(false);
  const [isAnswerVisible3, setIsAnswerVisible3] = useState(false);
  const [isAnswerVisible4, setIsAnswerVisible4] = useState(false);
  const [isAnswerVisible5, setIsAnswerVisible5] = useState(false);
  const [time, setTime] = useState(getCurrentTime());
  

    useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  function getCurrentTime() {
    const now = new Date();
    const hours = now.getUTCHours();
    const minutes = now.getUTCMinutes();
    const seconds = now.getUTCSeconds();

    return {
      hours: formatTimeComponent(hours),
      minutes: formatTimeComponent(minutes),
      seconds: formatTimeComponent(seconds),
    };
  }

  function formatTimeComponent(timeComponent) {
    return timeComponent < 10 ? `0${timeComponent}` : timeComponent;
  }

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
          <span className='relative xl:hidden '>
             <p className='font-bold ignite  italic tracking-wide text-[22px] md:text-2xl  xl:text-3xl mt-20 '>Igniting a Revolution in HR Inovation</p>
            <img src='/img/vector-4.svg' className='absolute right-[10px]  '/>
          </span>
          <div>
          <img
        className="relative w-[1086px] h-[836px] -top-24 left-[-90px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
         />
          </div>
          <h1 className='absolute main-text top-[180px] font-extrabold text-[48px] xl:text-[65px]  z-0 xl:pl-14  '>
            
            <span className='relative flex items-center  '>getlinkedTech
             <img className="w-[18px] h-[26px] top-0 right-[70px] object-cover absolute" alt="Creative" src="/img/creative-1.png" />
            </span>
            <span className=' mx-auto flex items-center w-max'>Hackathon <span className='text-pink-600'>1.0</span>
              <span>
                <img src='/img/chain-9365116-7621444.png' width="500"  height="500" className=' w-[35px] h-[35px]'/>
              </span>
               <span>
                <img src='/img/1f-4a-5.png' width="500"  height="500" className=' w-[35px] h-[35px]'/>
              </span>
            </span>
          </h1>
          <p className=' text-[22px] font-semibold top-[400px] mt-[px] absolute text-center xl:pl-16 xl:text-start xl:w-[600px] lg:text-[28x] '>Participate in getlinked tech Hackathon 2023 stand a chance to win  big prize</p>
          <div className=' absolute mt-[300px] xl:mt-[300px] flex items-center flex-col justify-center xl:items-start xl:pl-16'>
          <a href="/Register"><button className='bg-primary-gradient w-[200px] items-center rounded-md justify-center active:scale-95 h-[50px] flex'><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md mx-auto'>Register</div></button></a>
          <div className=' pt-10 flex gap-6 justify-center items-center  text-[40px] lg:text-[60px] text-center time-running '>
            <span>
              <span>{time.hours}</span>
              <span className='text-[25px] '>hrs</span>
            </span>
            <span>
              <span>{time.minutes}</span>
              <span className='text-[25px] '>m</span>
            </span>
            <span>
              <span>{time.seconds}</span>
              <span className=' text-[25px]'>s</span>
            </span>
            </div>
          </div>
           
        </section>
        <section className=''>
          <div className='relative flex lg:items-end xl:items-end justify-end lg:mr-[-700px] xl:mr-[0px] '>
           
            <img src='/img/purple-lens-flare-png-10.png' className='top-[-170px] w-[600px] h-[500px] absolute bg-blend-hard-light right-[-10px] ' width="500" height="500" />
          </div>
          <div className='relative flex justify-center '>
            <img src='/img/man-wearing-smart-glasses-touching-virtual-screen-1.png' className='relative top-[-135px] xl:w-[1500px] xl:h-[680px] self-center  xl:top-[-70px] ' />
            <img src='/img/image-1.png' className='absolute top-[-250px] md:top-[-180px] xl:top-[-130px] sm:w-[667px] sm:h-[620px] flex items-center justify-center ' width="500" height="500"/>
          </div>
        </section>
      </section>
      
      <img src='/img/line-2.svg' className=' mt-[-135px] ' />
      <section className=' scroll-m-[150px] py-16' id='Overview'>
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
        className="absolute w-[800px] h-[800px] -top-24 left-[-80px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
        />
         <img src='/img/purple-lens-flare-png-10.png' className='top-[300px] w-[700px] h-[700px] absolute bg-blend-hard-light right-[-15px] ' width="500" height="500" />
        <div className='scroll-m-[50px] overview'>
          <div className=' flex flex-col lg:flex-row items-center justify-between lg:gap-20 gap-14 false '>
            <div className=' w-full lg:w-[50%] relative lg:text-start text-center '>
              <h2 className=' font-bold text-[32px] sm:text-[38px]  '>
                Rules and
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
      <section className='relative py-20 scroll-m-[150px] ' id='FAQ' >
        <div className=' lg:py-20 my-6 scroll-m-[50px] overview '>
          <div className=' flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20 '>
            <div className=' relative lg:w-[40%] space-y-10 lg:text-start text-center max-w-[750px] '>
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
                    <p className='overflow-hidden text-[16px]  md:text-[16px] text-gray-300 pb-2 answer text-start'>
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
                    <p className='overflow-hidden  text-[16px] text-start md:text-[16px] text-gray-300 pb-2 answer'>
                     If you need help during the hackathon, you can reach out to mentors and organizers who will be available to assist you with any questions or challenges you encounter.
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
                    Not having an idea for a project is perfectly fine. You can join a team and collaborate with others on their projects, or brainstorm and come up with ideas during the hackathon.
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
                     You can join a team or participate individually, depending on the hackathon's rules. Some hackathons allow participants to form teams on the spot, while others may require you to come with a pre-formed team.
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
                    <p className='overflow-hidden text-[16px] text-start md:text-[16px]  text-gray-300 pb-2 answer'>
                      After the hackathon ends, you can showcase your project to judges and other participants. There are often awards and prizes for winning projects, and you can also continue to work on your project or explore opportunities to further develop it.
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
      <section className='relative scroll-m-[150px] py-20  ' id='Timeline'>
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
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Hackathon Official Announcement</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 18,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Hackathon Announcement</h3>
                    <p className="text-[14px] ">
                      The getlinked tech hackathon 1.0 is formalli announced
                      <br className="hidden xl:block " />
                      to the general public and teams begin to get ready to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 18,2023</h3>
                </div>
              </div>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Hackathon Announcement</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 20,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Teams Registration begins</h3>
                    <p className="text-[14px] ">
                      The getlinked tech hackathon 1.0 is formalli announced
                      <br className="hidden xl:block " />
                      to the general public and teams begin to get ready to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 20,2023</h3>
                </div>
              </div>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Teams Registration begins</h3>
                  <p>Interested teams can now show their interest in the
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                 </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center '>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 20,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Teams registration ends</h3>
                    <p className="text-[14px] ">
                      Interested teams can now show their interest in the
                      <br className="hidden xl:block " />
                      getlinked tech hackathon 1.0 2023 by proceeding to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 20,2023</h3>
                </div>
              </div>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Teams Registration ends</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 22,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Announcemenet of the accepted teams and ideas</h3>
                    <p className="text-[14px] ">
                      The getlinked tech hackathon 1.0 is formalli announced
                      <br className="hidden xl:block " />
                      to the general public and teams begin to get ready to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 22,2023</h3>
                </div>
              </div>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Announcement of the accepted teams</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 23,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Hackathon Announcement</h3>
                    <p className="text-[14px] ">
                      The getlinked tech hackathon 1.0 is formalli announced
                      <br className="hidden xl:block " />
                      to the general public and teams begin to get ready to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 23,2023</h3>
                </div>
              </div>
              <div className=' xl:flex hidden lg:gap-6 xl:gap-20 items-end flex-row'>
                <div className=' py-4 text-end'>
                  <h3 className=' text-pink-600 font-bold text-[22px] '>Demo day</h3>
                  <p>The getlinked tech hackathon 1.0 is formally annouced
                    <br className='hidden lg:block' />
                    to the general public and teams begin to get ready to register
                  </p>
                </div>
                <div className=' w-[100px] h-max gap-4 flex flex-col items-center justify-center'>
                  <div className=' min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[60px] bg-pink-500 text-black rounded-full h-[60px] justify-center flex items-center '><span className='font-bold text-white  text-[24px]'>1</span>
                  </div>
                </div>
                <div className=' py-4 flex-1  '>
                  <h3 className='text-pink-500 font-bold text-[22px] text-center '>November 24,2023</h3>
                </div>
              </div>
              <div className='flex xl:hidden gap-2 md:gap-4'>
                <div className='w-max lg:w-[100px] gap-2 lg:gap-4 flex flex-col justify-between items-center'>
                  <div className=' min-h-[60px] flex-1 lg:min-h-[100px] bg-pink-500 w-[3px] '></div>
                  <div className=' w-[30px] bg-pink-500 text-black rounded-full h-[30px] md:w-[40px] md:h-[40px] lg:h-[60px] lg:w-[60px] justify-center flex items-center '><span className='font-bold text-white  lg:text-[20px]'>1</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between py-1 md:py-2 flex-1'>
                  <div>
                    <h3 className='text-pink-500 font-bold text-[17px] lg:text-[22px]'>Demo day</h3>
                    <p className="text-[14px] ">
                      The getlinked tech hackathon 1.0 is formalli announced
                      <br className="hidden xl:block " />
                      to the general public and teams begin to get ready to register
                    </p>
                  </div>
                  <h3 className="text-pink-500 font-bold text-[17px] lg:text-[22px] ">november 24,2023</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png' className=' lg:hidden' />
      <section className="relative md:py-10 lg:py-20">
        <img src='/img/premium-photo-1664443577580-dd2674e9d359-1.png' className='absolute hidden lg:flex h-full -z-10 top-0 brightness-[18%] w-full bg-blend-color-burn'/>
        <div className="py-20 my-6 scroll-m-[50px] overview ">
          <div className="flex flex-col justify-end items-end">
            <div>
              <h2 className="text-[32px] font-bold  ">Prizes and
                <br />
                <span className="text-pink-500">Rewards</span>
              </h2>
              <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center false gap-14 lg:gap-20 justify-between ">
            <div className="relative w-full sm:w-[65%] lg:w-[40%] ">
              <img src='/img/9486889-1.png' className='w-full' />
              <img src='/img/star-6.png' className=' absolute w-[20px] -bottom-[50px] left-[30%] '/>
            </div>
            <div className=" awards flex justify-center items center w-full lg:w-[50%] ">
              <div className=' award flex mt-4 lg:mt-10 space-x-2 max-w-[550px] '>
                <div className='welldone rounded bg-[rgba(212,52,254,0.12)] w-[130px] h-[230px] xl:w-[150px] xl:h-[250px] flex items-center flex-col space-y-3 border-[1px] border-[#D434FE]'>
                  <img src='/img/bronze-medal-1.png' className='w-[120px] h-[120px] ' />
                  <h3>2nd</h3>
                  <h2>N400,000</h2>
                </div>
                    <div className='winner rounded bg-[rgba(212,52,254,0.12)] w-[155px] h-[260px]  xl:w-[180px] xl:h-[280px] flex items-center flex-col space-y-3 border-[1px] border-[#903AFF] '>
                  <img src='/img/gold-medal-1.png' className='w-[160px] h-[160px] xl:w-[180px] xl:h-[180px]  ' />
                  <h3 className='font-bold text-[25px] '>1st
                    <span></span>
                  </h3>
                  <h2>N400,000</h2>
                </div>
                   <div className=' welldone rounded bg-[rgba(212,52,254,0.12)] w-[130px] h-[230px] xl:w-[150px] xl:h-[250px] flex items-center flex-col space-y-3 border-[1px] border-[#D434FE]'>
                  <img src='/img/bronze-medal-1.png' className='w-[120px] h-[120px] xl:w-[140px] xl:h-[140px] ' />
                  <h3>3rd</h3>
                  <h2>N200,000</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <img src='/img/line-1.png' className=' lg:hidden' />
      <section className=' relative py-20'>
         <img
        className="absolute w-[700px] h-[800px] -top-24 -left-[10px] bg-blend-hard-light z-[-1]"
        alt="Purple lens flare"
        src="/img/purple-lens-flare-png-1.png"
        />
        <img src='/img/purple-lens-flare-png-10.png' className='top-[300px] w-[700px] h-[700px] absolute bg-blend-hard-light left-[900px] ' width="500" height="500" />
        <div className=' scroll-m-[50px] overview'>
          <div className=' text-center space-y-4 '>
            <h2 className='text-[32px] font-bold '>Partners and Sponsers </h2>
            <p>
              Getlinked Hackathon 1.0 is honored to havve the following 
              <br className='hidden lg:block' />
              major companies as its partners and sponsers
            </p>
          </div>
          <div className=' flex relative items-center justify-center my-20'>
            <img src='/img/Partner and Sponsors.png' className=' partners z-[20] w-full object-contain lg:w-[80%] '/>
          </div>
        </div>
      </section>
      <section className='relative py-10 lg:py-20'>
        <div className='py-10 lg:py-20 scroll-m-[50px] overview '>
          <div className=' flex flex-col lg:flex-row items-center false gap-14 lg:gap-20 justify-between'>
            <div className='relative w-full lg:w-[45%] '>
              <div className='space-y-6 pb-6'>
                <h2 className='text-[32px] font-bold '>Privacy Policy and
                   <br />
                <span className=' text-pink-500'>Terms</span>
                </h2>
                <span>Last updated on September 12,2023</span>
                <p>
                  Below are our privacy & policy, which outline a lot of goodies. its our aim to always take of our participant
                </p>
              </div>
              <div className=' bg-zinc-300 bg-opacity-5 flex flex-col space-y-4 items-center rounded-[5px] py-10 px-4 lg:p-10 '>
                <p className=' pb-6'>
                  At getlinked tech hackathon 1.0, we value your privacy and are commited to protecting your personal information. this privacy Policy outlines how we collect,use,disclose, and safeguared your data when you participate in our tech hackathon event. By participating in our event, you consent to the practices described in this policy
                </p>
                <h3 className=' text-pink-500   font-bold w-full'>Licensing Policy</h3>
                <p className='font-bold w-full'>
                  Here are terms of our standard License:
                </p>
                <ul className=' space-y-6'>
                  <li className='flex gap-3 items-start'>
                    {/*svg */}
                    <p className=' break-words'>
                      The Standard License grants you a non-exclusive rights to navigate and register for our event
                    </p>
                  </li>
                    <li className='flex gap-3 items-start'>
                    {/*svg */}
                    <p className=' break-words'>
                      You are licensed to use the item available at any free source sites, for your project development
                    </p>
                  </li>
                </ul>
                <div>
                  <a href="" className=' justify-center items-center flex  xl:justify-start'><button className='bg-primary-gradient w-[200px] justify-center items-center  rounded-md text-center flex active:scale-95 h-[50px]  mt-12 '><div className='px-8 w-[98%] h-[95%] text-xl flex items-center justify-center transition-all hover:bg-[#150e28] rounded-md'>Read More</div></button></a>
                </div>
              </div>
            </div>
            <div className=' relative w-full px-6 pt-10 lg:w-[40%] sm:w-[65%] '>
              <img className=' w-[90%] md:w-full absolute right-1 -top-10 lg:-top-20 -z-10 ' src='/img/Vector.png'/>
              <img className=' w-full mt-24' src='/img/08-1.png'/>
            </div>
          </div>
        </div>
      </section>
      <footer className='relative pt-20'>
         <img src='/img/premium-photo-1664443577580-dd2674e9d359-1.png' className='absolute hidden lg:flex h-full -z-10 top-0 brightness-[18%] w-full bg-blend-color-burn'/>
        <div className='footer-container grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:justify-items-center gap-10 scroll-m-[50px]  '>
          <div>
            <a href='/'>
              <h1 className='font-bold text-[24px] lg:text-[36px] '>get
                <span className='text-pink-500'>linked</span>
              </h1>
            </a>
            <p className='pb-10'>
              Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology
            </p>
            <ul className='flex gap-3 font-bold'>
              <li><a href='/'>Terms of Use</a></li>
              <span className='text-pink-500'>|</span>
               <li><a href='/'>Terms of Use</a></li>
            </ul>
          </div>
          <div className='flex flex-col justify-between'>
            <h3 className='text-pink-500 text-[20px] font-bold '> Useful Links</h3>
            <ul>
              <li><a href='/#Timeline'>Timeline</a></li>
              <li><a href='/#Overview'>Overview</a></li>
              <li><a href='/#FAQ'>FAQs</a></li>
               <li><a href='/Register'>Register</a></li>
            </ul>
            <div className='flex gap-4'>
              <h3 className='text-pink-500 text-[20px] font-bold '>Follow us</h3>
              <ul className='flex gap-3'>
                <li><a href='/'><i className='text-xl'><FaXTwitter /></i></a></li>
                <li><a href='/'><i className='font-bold text-xl'><FaFacebookF /></i></a></li>
                <li><a href='/'><i className='text-xl font-bold'><FaInstagram /></i></a></li>
                 <li><a href='/'><i className='text-xl font-bold'><FaLinkedinIn/></i></a></li>
              </ul>
            </div>
          </div>
          <div>
            <h3 className='text-pink-500 text-[20px] font-bold '>Contact Us</h3>
            <ul className='space-y-4 mt-4'>
              <li className='flex gap-3'><i className='text-xl'><MdOutlineAddIcCall /></i>
                 <p>+234 6707653444</p>
              </li>
               <li className='flex gap-3 items-start'><i className='text-xl'><FaLocationDot /></i>
              <p>27,Alara Street
                <br />
                Yaba 100012
                <br />
                Lagos State
                </p>
                </li>
            </ul>
          </div>
        </div>
        <div className='mx-auto text-center py-12 font-bold'>All rights reserved. &copy; getlinked Ltd</div>
      </footer>
    </main>
  )
}

export default homepage
