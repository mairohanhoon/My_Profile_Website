const Project = () => {
  return (
    <div className="flex flex-col justify-evenly px-4 py-8" id="projects">
      <h1 className="text-white text-center text-3xl font-extrabold mb-8">
        PROJECT
      </h1>
      <div className="flex flex-col self-center justify-between md:flex-row flex-wrap gap-6">
        {/* CARD: COMMUNITY FRIDGE */}


        <div className="group w-96 h-[430px] mx-4 my-2 relative overflow-hidden">
          {/* Front Side */}
          <div className="absolute w-full h-full transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 z-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-start">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/community-fridge-image.png"
                alt="Community-Fridge"
              />
              <h1 className="text-center text-white font-extrabold mt-3">
                COMMUNITY FRIDGE
              </h1>
              <p className="text-sm text-center text-white font-semibold mt-2">
                A sustainable food-sharing platform where donors can offer
                excess food and NGOs can collect it to help those in need.
              </p>
            </div>
          {/* Back Side */}
          <div className="absolute w-full h-full transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 z-20 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl flex flex-col items-center justify-center">
              <div className="w-full max-w-xs mx-auto rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg font-mono text-base text-gray-200">
                <div className="flex items-center px-4 py-2 border-b border-white/20 bg-white/20 rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400 select-none">
                    terminal
                  </div>
                </div>
                <pre className="py-6 px-4 whitespace-pre-wrap break-words bg-white/10 rounded-b-lg text-base">
                  <code>
                    <span className="text-[#7c3aed] font-bold">$</span> git
                    clone https://github.com/mairohanhoon/Community-Fridge
                    {"\n"}
                    <span className="text-[#7c3aed] font-bold">$</span>{" "}
                    <a
                      href="https://community-fridge-z7xx.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 underline"
                    >
                      Live Project
                    </a>
                  </code>
                </pre>
              </div>
            </div>
        </div>

        {/* CARD: ONETEAM */}
        <div className="group w-96 h-[430px] mx-4 my-2 relative overflow-hidden">
          {/* Front Side */}
          <div className="absolute w-full h-full transition-all duration-700 ease-in-out opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-95 z-10 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-start">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/git-lens-image.png"
                alt="Git-Lens"
              />
              <h1 className="text-center text-white font-extrabold mt-3">
                OneTeam
              </h1>
              <p className="text-sm text-center text-white font-semibold mt-2">
                OneTeam is a modern, full-stack employee management platform
                that empowers organizations to manage their teams, optimize HR
                operations, and foster collaboration through a single unified
                interface.
              </p>
            </div>
          {/* Back Side */}
          <div className="absolute w-full h-full transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100 z-20 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl flex flex-col items-center justify-center">
              <div className="w-full max-w-xs mx-auto rounded-lg border border-white/20 bg-white/10 backdrop-blur-md shadow-lg font-mono text-base text-gray-200">
                <div className="flex items-center px-4 py-2 border-b border-white/20 bg-white/20 rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400 select-none">
                    terminal
                  </div>
                </div>
                <pre className="py-6 px-4 whitespace-pre-wrap break-words bg-white/10 rounded-b-lg text-base">
                  <code>
                    <span className="text-[#7c3aed] font-bold">$</span> git
                    clone https://github.com/Daily-Coder/OneTeam{"\n"}
                    <span className="text-[#7c3aed] font-bold">$</span>{" "}
                    <a
                      href="https://one-team-deploy.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 underline"
                    >
                      Live Project
                    </a>
                  </code>
                </pre>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
