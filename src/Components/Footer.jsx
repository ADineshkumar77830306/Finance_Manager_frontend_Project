import React from "react";
import img from '../Images/logo_.png'
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 ">
      
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-lg flex gap-1 font-semibold text-gray-800 dark:text-white">
             <img src={img} alt="No_img" className="w-[20px] h-[20px] " /> 
            FinanceFlow
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your money smarter 💰
          </p>
        </div>



        {/* Right */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          © {new Date().getFullYear()} FinanceFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;