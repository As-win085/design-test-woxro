import "./index.css"
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

import Img11 from "../images/img-1.1.jpg"
import Img12 from "../images/img-1.2.jpg"
import Img13 from "../images/img-1.3.jpg"
import Img14 from "../images/img-1.4.jpg"
import Img15 from "../images/img-1.5.jpg"
import Img16 from "../images/img-1.6.jpg"

import Img21 from "../images/img-2.1.jpg"
import Img22 from "../images/img-2.2.jpg"
import Img23 from "../images/img-2.3.jpg"
import Img24 from "../images/img-2.4.jpg"
import Img25 from "../images/img-2.5.jpg"
import Img26 from "../images/img-2.6.jpg"

import Img31 from "../images/img-3.1.jpg"
import Img32 from "../images/img-3.2.jpg"
import Img33 from "../images/img-3.3.jpg"
import Img34 from "../images/img-3.4.jpg"
import Img35 from "../images/img-3.5.jpg"
import Img36 from "../images/img-3.6.jpg"

import Img41 from "../images/img-4.1.jpg"
import Img42 from "../images/img-4.2.jpg"
import Img43 from "../images/img-4.3.jpg"
import Img44 from "../images/img-4.4.jpg"
import Img45 from "../images/img-4.5.jpg"
import Img46 from "../images/img-4.6.jpg"

import Img51 from "../images/img-5.1.jpg"
import Img52 from "../images/img-5.2.jpg"
import Img53 from "../images/img-5.3.jpg"
import Img54 from "../images/img-5.4.jpg"
import Img55 from "../images/img-5.5.jpg"
import Img56 from "../images/img-5.6.jpg"

import Img61 from "../images/img-6.1.jpg"
import Img62 from "../images/img-6.2.jpg"
import Img63 from "../images/img-6.3.jpg"
import Img64 from "../images/img-6.4.jpg"
import Img65 from "../images/img-6.5.jpg"
import Img66 from "../images/img-6.6.jpg"



const CubicBlock = ({ index, total, scrollYProgress, imageUrls, isMobile }) => {
  const angle = (index / total) * Math.PI * 2;
  
  const radius = isMobile ? 160 : 450; 
  
  const x = useTransform(scrollYProgress, [0.1, 0.4], [0, Math.cos(angle) * radius]);
  const y = useTransform(scrollYProgress, [0.1, 0.4], [0, Math.sin(angle) * radius]);
  const z = useTransform(scrollYProgress, [0.1, 0.4], [-150, 0]);
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.4], [0.1, 1]);

  const cubeSpin = useTransform(scrollYProgress, [0.4, 1.0], [0, 720]);
  const orbitRotation = useTransform(scrollYProgress, [0.4, 1.0], [0, 360]);


  const offset = isMobile ? '32px' : '80px';
  const faceSize = isMobile ? 'w-16 h-16' : 'w-40 h-40';

  const faceStyle = `absolute inset-0 bg-[#3d261b] border border-white/20 overflow-hidden shadow-2xl ${faceSize}`;

  return (
    <motion.div
      style={{ x, y, z, opacity, scale, rotateZ: orbitRotation }}
      className={`absolute ${faceSize} preserve-3d`}
    >
      <motion.div 
        style={{ rotateX: cubeSpin, rotateY: cubeSpin }} 
        className="relative w-full h-full preserve-3d"
      >
        <div className={faceStyle} style={{ transform: `translateZ(${offset})` }}>
          <img src={imageUrls[0]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={faceStyle} style={{ transform: `rotateY(180deg) translateZ(${offset})` }}>
          <img src={imageUrls[1]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={faceStyle} style={{ transform: `rotateY(-90deg) translateZ(${offset})` }}>
          <img src={imageUrls[2]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={faceStyle} style={{ transform: `rotateY(90deg) translateZ(${offset})` }}>
          <img src={imageUrls[3]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={faceStyle} style={{ transform: `rotateX(90deg) translateZ(${offset})` }}>
          <img src={imageUrls[4]} alt="" className="w-full h-full object-cover" />
        </div>
        <div className={faceStyle} style={{ transform: `rotateX(-90deg) translateZ(${offset})` }}>
          <img src={imageUrls[5]} alt="" className="w-full h-full object-cover" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SymphoniaLanding = () => {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 40, damping: 20 });

  const introOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const finalTextOpacity = useTransform(smoothProgress, [0.8, 0.95], [0, 1]);

    const allImages = [
    [Img11, Img12, Img13,Img14, Img15, Img16], 
    [Img21, Img22, Img23,Img24, Img25, Img26], 
    [Img31, Img32, Img33,Img34, Img35, Img36], 
    [Img41, Img42, Img43,Img44, Img45, Img46], 
    [Img51, Img52, Img53,Img54, Img55, Img56], 
    [Img61, Img62, Img63,Img64, Img65, Img66], 
  ];

  return (
    <div ref={containerRef} className="bg-[#2B180F] text-[#E5D3C5] h-[600vh]">
      <style>{`.preserve-3d { transform-style: preserve-3d; }`}</style>
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden [perspective:1500px]">
        
        <motion.div style={{ opacity: introOpacity, scale: isMobile ? 0.7 : 1 }} className="absolute z-50 flex flex-col items-center">
            <div className="relative w-[120px] h-[80px] mb-8">
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#F5E6D3]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F5E6D3]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#F5E6D3]" />
                <div className="absolute bottom-8 left-4 rotate-45 w-6 h-6 bg-[#F5E6D3]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F5E6D3]" />
                <div className="absolute bottom-8 right-4 -rotate-45 w-6 h-6 bg-[#F5E6D3]" />
            </div>
            <h1 className="text-center text-4xl md:text-6xl font-serif max-w-6xl px-6 leading-tight">
                The first media company crafted for the digital first generation.
            </h1>
        </motion.div>


        <div className="relative w-full h-full flex items-center justify-center preserve-3d">
          {allImages.map((faceImages, i) => (
            <CubicBlock 
              key={i} index={i} total={6} 
              scrollYProgress={smoothProgress} 
              imageUrls={faceImages} 
              isMobile={isMobile}
            />
          ))}
        </div>

        <motion.div 
          style={{ opacity: finalTextOpacity, scale: isMobile ? 0.85 : 1 }} 
          className="absolute max-w-xl text-center px-10 z-50 pointer-events-none"
        >
          <h2 className="text-xl md:text-4xl font-bold mb-4 font-serif">
            Where innovation meets precision
          </h2>
          <p className="text-sm md:text-lg opacity-90 leading-relaxed">
            Symphonia unites visionary thinkers... transform challenges into opportunities.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default SymphoniaLanding