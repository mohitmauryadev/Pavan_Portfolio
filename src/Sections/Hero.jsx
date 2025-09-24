import React, { useEffect, useRef } from "react";
import './Hero.css'


const SEStyle = {
     backgroundImage: `url(https://img.freepik.com/premium-photo/empty-inside-modern-interior-city-indoor-urban-background-hall-architecture-office-skyline-nobody-view-business-skyscraper-panoramic-window-floor-luxury-cityscape-building-new-glass_163305-243878.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  //  opacity:'0.5'
};

const Hero = () => {
    
  const typewriterRef = useRef(null);

  useEffect(() => {
    const text = "Welcome to My Portfolio !";
    let index = 0;

    function typeWriter() {
      if (index < text.length) {
        typewriterRef.current.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
      } else {
        setTimeout(() => {
          typewriterRef.current.innerHTML = "";
          index = 0;
          typeWriter();
        }, 4000);
      }
    }

    typeWriter();
  }, []);


  return (
    <div id="home" className='hero' style={SEStyle}>
      <div className='section flex  h-[500px] '>


        <div className='textar flex flex-col text-center items-center justify-center w-[60%]  p-6'>

            {/* Aoutowritter */}
            <h1 className="text-green-600 text-2xl font-bold mb-5" ref={typewriterRef}></h1>

            <h3 className='font-bold text-xl text-white'>Hello</h3>
            <h2 className='text-2xl font-bold mb-3 text-white'>I'm <span className='text-green-600 '>Pavan Kushwaha</span></h2>
            <h1 className='text-3xl font-bold text-blue-700'>Software developer</h1>
            <div></div>
            <p className='heroText m-3 mb-5'>Skilled in web and Android development, crafting responsive website and powerful mobile apps with modern technologies for seamless user experiences.</p>
            <div className=' bg-green-600 rounded-3xl p-1.5 mt-6'> <button className='bg-green-600 p-1.5 rounded-2xl w-[120px] font-bold text-white'>Get Started</button></div>
        </div>


        {/* <div className='heroIMG flex justify-center align-middle items-center w-[30%] h-[200px]'><img src={profille_img} className='h-[450px]'/></div> */}
      </div>
    </div>
  )
}

export default Hero
