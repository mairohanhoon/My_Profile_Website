import { useState } from "react";

const Experience = () => {


  return (
    <div className="flex flex-col justify-evenly px-4 py-8" id="experience">
      <h1 className="text-white text-center text-3xl font-extrabold mb-8">
        EXPERIENCE
      </h1>
      <div className="flex flex-col self-center justify-between md:flex-row flex-wrap gap-6">
        {/* CARD: CHILDHOOD */}
        <div className="group w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-4 p-4 rounded-2xl my-2 transition-transform duration-300 hover:scale-[1.03]">
          <img
            className="w-full rounded-xl"
            src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/onCampus.png"
          />
          <h1 className="text-center text-white font-extrabold mt-3">
            CORE MEMBER
          </h1>
          <p className="text-sm text-center text-white font-semibold mt-2">
            I signed up for onCampus to learn about open source and development.
            I met like-minded people and picked up a lot about Git and GitHub.
            During HacktoberFest-2023, I contributed to their projects and
            learned even more.
          </p>
        </div>

        {/* CARD: SCHOOLING */}
        <div className="w-80 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg mx-4 p-4 rounded-2xl my-2 transition-transform duration-300 hover:scale-[1.03]">
          <img
            className="w-full rounded-xl"
            src="https://raw.githubusercontent.com/mairohanhoon/My_Profile_Website/main/asset/GDSC.jpg"
          />
          <h1 className="text-center text-white font-extrabold mt-3">MEMBER</h1>
          <p className="text-sm text-center text-white font-semibold mt-2">
            I joined GDSC to contribute to projects while learning, and I
            connected with people to discuss various projects. I secured the top
            rank in the GDSC-organized contest and actively participated in the
            various events they hosted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
