import "./index.css"
import { motion } from "framer-motion";

// Logo.jsx
export const SymphoniaLogo = ({ opacity }) => (
  <motion.div 
    style={{ opacity }} 
    className="relative w-[120px] h-[80px]"
  >
    {/* Bottom Left */}
    <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#F5E6D3]" />
    {/* Middle Bottom */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F5E6D3]" />
    {/* Bottom Right */}
    <div className="absolute bottom-0 right-0 w-6 h-6 bg-[#F5E6D3]" />
    {/* Arch Left */}
    <div className="absolute bottom-8 left-4 rotate-45 w-6 h-6 bg-[#F5E6D3]" />
    {/* Top Center */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#F5E6D3]" />
    {/* Arch Right */}
    <div className="absolute bottom-8 right-4 -rotate-45 w-6 h-6 bg-[#F5E6D3]" />
  </motion.div>
);