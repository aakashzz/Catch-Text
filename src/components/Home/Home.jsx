import React from "react";
import ImageSelector from "../Mini-components/ImageSelector";
import Header from "./Header/Header";
import './Home.css'
import Footer from "./Footer/Footer";

function Home() {
   return (
      <>
         <Header />
         <main className=" h-screen  text-white">
            {/* This main Heading to attract user */}
            <div className="text-center py-1 ">
               <h2 id="heading" className=" pt-5">
                  Lets convert the document into text..
               </h2>
            </div>
            <div className="flex justify-center">
               <div className="h-60 w-full text-white p-10">
                  <ImageSelector />
               </div>
            </div>
         </main>
         <Footer />
      </>
   );
}

export default Home;
