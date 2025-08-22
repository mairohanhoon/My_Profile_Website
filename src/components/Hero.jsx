"use client";

import React from "react";
const DotIcon = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="4" cy="4" r="4" fill="currentColor" />
  </svg>
);
const coderData = {
  name: "Rohan Tiwari",
  role: "Frontend Developer",
  seniority: "Freshman",
  location: "Uttarakhand, India",
  skills: [
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "CSS",
    "Figma",
    "GitHub",
    "HTML",
    "Astro",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "Git",
  ],
};
const CoderProfileCard = () => {
  return (
    <div className="w-full max-w-xl mx-auto rounded-lg border border-[#23263a] bg-[#181a29] shadow-lg font-mono text-base text-gray-200" id="about">
      {/* Top bar with colored circles */}
      <div className="flex items-center px-4 py-2 border-b border-[#23263a] bg-[#23263a] rounded-t-lg">
        <div className="flex space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="ml-auto text-xs text-gray-400 select-none">
          coder.js
        </div>
      </div>
      {/* Code area */}
      <div className="flex">
        {/* Line numbers */}
        <div className="flex flex-col items-end pr-6 py-6 pl-6 bg-[#1a1d2e] rounded-bl-lg select-none text-[#4b526d] text-base">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className="leading-relaxed">
              {i + 1}
            </div>
          ))}
        </div>
        {/* Code content */}
        <pre className="py-6 pr-6 w-full whitespace-pre-wrap break-words bg-[#181a29] rounded-br-lg text-base">
          <code>
            <span className="text-[#7c3aed] font-bold">const</span>{" "}
            <span className="text-[#7c3aed] font-bold">coder</span>{" "}
            <span className="text-[#7c3aed] font-bold">=</span>{" "}
            <span className="text-white">{"{"}</span>
            {"\n"}
            <span className="pl-6 inline-block">
              <span className="text-[#c4b5fd]">name</span>:{" "}
              <span className="text-yellow-200">'{coderData.name}'</span>,
            </span>
            {"\n"}
            <span className="pl-6 inline-block">
              <span className="text-[#c4b5fd]">role</span>:{" "}
              <span className="text-yellow-200">'{coderData.role}'</span>,
            </span>
            {"\n"}
            <span className="pl-6 inline-block">
              <span className="text-[#c4b5fd]">seniority</span>:{" "}
              <span className="text-yellow-200">'{coderData.seniority}'</span>,
            </span>
            {"\n"}
            <span className="pl-6 inline-block">
              <span className="text-[#c4b5fd]">location</span>:{" "}
              <span className="text-yellow-200">'{coderData.location}'</span>,
            </span>
            {"\n"}
            <span className="pl-6 inline-block">
              <span className="text-[#c4b5fd]">skills</span>: [
              <span className="">
                {coderData.skills.map((skill, idx) => (
                  <span key={skill}>
                    <span className="text-cyan-300">'{skill}'</span>
                    {idx < coderData.skills.length - 1 ? (
                      <span className="text-gray-400">, </span>
                    ) : (
                      ""
                    )}
                  </span>
                ))}
              </span>
              ],
            </span>
            {"\n"}
            <span className="text-white">{"\u007D;"}</span>
          </code>
        </pre>
      </div>
      {/* Footer bar */}
      <div className="flex justify-between items-center px-4 py-2 border-t border-[#23263a] bg-[#23263a] rounded-b-lg text-xs text-gray-400">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};
const Hero = () => {
  return (
    <div className="min-h-screen w-full relative flex items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      {/* Removed background gradients for full transparency */}

      {}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">
          {}
          <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
              <DotIcon />
              Welcome to my universe
            </div>

            <div className="relative">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                Hello <br />
                I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  Rohan Tiwari
                </span>
              </h1>
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Learning MARN Stack
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Clean Code
              </span>
              <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default">
                Innovation
              </span>
            </div>

            <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
            Full-Stack JavaScript Developer | DSA Enthusiast | MERN Stack | Writing Code That Works ✨
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
              <button className="px-6 py-3 bg-purple-500 text-white hover:bg-purple-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
                Learn More
              </button>
              <button
              onClick={() => {
                window.open(
                  "https://docs.google.com/document/d/15-mC43IeFO7kNpMVY7gmT66NJwKEDURiac9cNDi1EdA/edit?usp=sharing",
                  "_blank"
                );
              }}
              className="px-6 py-3 bg-transparent hover:bg-purple-600 border border-gray-300 dark:border-gray-600 text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
                Get Resume
              </button>
            </div>
          </div>

          {}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <CoderProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
const styles = `
  @keyframes fade-in-up {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
  }

  .hover\\:shadow-3xl:hover {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
  }
`;
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
