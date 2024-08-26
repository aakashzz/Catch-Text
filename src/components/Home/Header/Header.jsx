import React from "react";
import GithubBtn from "../../Mini-components/GithubBtn";

function Header() {
    
   return (
      <header className="h-24 w-full bg-transparent text-white">
         <nav className="h-full flex justify-between items-center px-6 border-b-2  ">
            <div className=" ">
               <h2 className="text-4xl font-bold text-center">Catch-Text</h2>
            </div>
            <div className="">
               <GithubBtn />
            </div>
         </nav>
      </header>
   );
}

export default Header;
