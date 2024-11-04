import React from "react";
import Navi from "./Navi";
export default function Home() {
  return (
    <>
        
        <div className="w-100 pt-4 bg-black rounded-md" >
        <Navi/>
            <div className="w-70 flex flex-col md:flex-row md:justify-start justify-between items-center md:items-center space-x-4">
                <div className="h-full  self-center p-4 mx-16">
                    <img className="w- h-auto items-center" src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/picofme3.png" alt="MyProfile"/>
                </div>
                <div className="h-full items-center p-10">
                    <h1 className="text-yellow-400 font-bold font-sans text-4xl text-center">Hello <span><img className="w-10 self-center items-center" src="../asset/handwaving.png" alt=""/></span> I am Rohan Tiwari</h1>
                    <p className="text-white font-bold font-sans text-xl text-center">
                        I'm a Passionate for Problem Solving and Learning Competitive Programming & Development from India 🇮🇳<br/></p>
                        <p className="text-white font-bold font-sans text-base text-center">
                        Contest Rating 4202(Top 0.1%)& 3 Times College Topper🏆@CodingNinja || 🔥180+ Coding Streak On Multiple Platforms || Problem Solving Enthusiast || 2⭐CodeChef(max.1417) || 2⭐Leetcode(max.1459) || 170+ Problems Solved on GFG & Leetcode || 110+WPM || B.Tech CSE@DITU'26 || Proficient in C, C++, HTML, CSS and JavaScript</p>
                </div>
            </div>
        </div>
    </>
  );
}

