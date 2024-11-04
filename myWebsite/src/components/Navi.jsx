import React from "react";

export default function Navi() {
    return(
    <>
    <div className="w-100 flex justify-between px-4 items-center bg-slate-700 p-5 rounded-md">
        <div className="flex">
            <div className="myscale1">
                <a href="https://www.linkedin.com/in/rohan-tiwarii/" target="_blank">
                    <img className="w-12 h-12 pr-4" src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/linkedin_logo.png" alt=""/>
                </a>
            </div>
            <div className="myscale1">
                <a href="https://github.com/mairohanhoon" target="_blank">
                    <img className="w-12 h-12 pr-4" src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/github_logo.png" alt=""/>
                </a>
            </div>
            <div className="myscale1">
                <a href="https://leetcode.com/rohantiwari2709/" target="_blank">
                    <img className="w-12 h-12 pr-4" src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/leetcode_logo.png" alt=""/>
                </a>
            </div>
            <div className="myscale1">
                <a href="https://codeforces.com/profile/tiwarirohan" target="_blank">
                    <img className="w-12 h-12 pr-4" src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/codeforces_log.png" alt=""/>
                </a>
            </div>
        </div>
        <ul className="md:flex hidden font-bold list-none text-xl font-sans">
            <li className="myscale1"><a href="#" className="cursor-pointer mx-[20px] text-white no-underline text-xl">Home</a></li>
            <li className="myscale1"><a href="#ABOUT" className="cursor-pointer mx-[20px] text-white no-underline">About</a></li>
            <li className="myscale1"><a href="#Exp" className="cursor-pointer mx-[20px] text-white no-underline">Experience</a></li>
        </ul>
        <div className="butresume ">
            <a className="bg-blue-600 p-3 rounded-xl text-white no-underline font-sans font-bold text-lg hover:bg-blue-800 hover:border-white" href="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/Resume.pdf" download="RohanTiwari">RESUME</a>
        </div>
    </div>
    </>
)};