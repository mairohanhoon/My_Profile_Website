const Project = () => {
  return (
    <div className="flex flex-col justify-evenly px-4 py-8" id="projects">
      <h1 className="text-white text-center text-3xl font-extrabold mb-8">
        PROJECT
      </h1>
      <div className="flex flex-col self-center justify-between md:flex-row flex-wrap gap-6">
        {/* CARD: CHILDHOOD */}
        <div className="group w-96 h-[430px] [perspective:1000px] mx-4 my-2">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-start [backface-visibility:hidden]">
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
            <div className="absolute w-full h-full bg-[#181a29] border border-[#23263a] rounded-2xl flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="w-full max-w-xs mx-auto rounded-lg border border-[#23263a] bg-[#181a29] shadow-lg font-mono text-base text-gray-200">
                <div className="flex items-center px-4 py-2 border-b border-[#23263a] bg-[#23263a] rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400 select-none">
                    terminal
                  </div>
                </div>
                <pre className="py-6 px-4 whitespace-pre-wrap break-words bg-[#181a29] rounded-b-lg text-base">
                  <code>
                    <span className="text-[#7c3aed] font-bold">$</span> git
                    clone https://github.com/mairohanhoon/community-fridge.git
                    {"\n"}
                    <span className="text-[#7c3aed] font-bold">$</span>{" "}
                    <a
                      href="https://community-fridge-live-link.com"
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

        {/* CARD: SCHOOLING */}
        <div className="group w-96 h-[430px] [perspective:1000px] mx-4 my-2">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-start [backface-visibility:hidden]">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/bookstore-image.png"
                alt="Bookify"
              />
              <h1 className="text-center text-white font-extrabold mt-3">
                Bookify
              </h1>
              <p className="text-sm text-center text-white font-semibold mt-2">
                A platform to easily buy or sell your unused or unwanted books.
              </p>
            </div>
            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#181a29] border border-[#23263a] rounded-2xl flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="w-full max-w-xs mx-auto rounded-lg border border-[#23263a] bg-[#181a29] shadow-lg font-mono text-base text-gray-200">
                <div className="flex items-center px-4 py-2 border-b border-[#23263a] bg-[#23263a] rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400 select-none">
                    terminal
                  </div>
                </div>
                <pre className="py-6 px-4 whitespace-pre-wrap break-words bg-[#181a29] rounded-b-lg text-base">
                  <code>
                    <span className="text-[#7c3aed] font-bold">$</span> git
                    clone https://github.com/mairohanhoon/bookify.git{"\n"}
                    <span className="text-[#7c3aed] font-bold">$</span>{" "}
                    <a
                      href="https://bookify-live-link.com"
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

        {/* CARD: COLLEGE */}
        <div className="group w-96 h-[430px] [perspective:1000px] mx-4 my-2">
          <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
            {/* Front Side */}
            <div className="absolute w-full h-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-6 rounded-2xl flex flex-col items-center justify-start [backface-visibility:hidden]">
              <img
                className="w-full h-64 object-cover rounded-xl"
                src="https://raw.githubusercontent.com/mairohanhoon/Portfolio/refs/heads/main/src/assets/git-lens-image.png"
                alt="Git-Lens"
              />
              <h1 className="text-center text-white font-extrabold mt-3">
                Git-Lens
              </h1>
              <p className="text-sm text-center text-white font-semibold mt-2">
                An app to fetch and display GitHub user details using the GitHub
                API.
              </p>
            </div>
            {/* Back Side */}
            <div className="absolute w-full h-full bg-[#181a29] border border-[#23263a] rounded-2xl flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
              <div className="w-full max-w-xs mx-auto rounded-lg border border-[#23263a] bg-[#181a29] shadow-lg font-mono text-base text-gray-200">
                <div className="flex items-center px-4 py-2 border-b border-[#23263a] bg-[#23263a] rounded-t-lg">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-auto text-xs text-gray-400 select-none">
                    terminal
                  </div>
                </div>
                <pre className="py-6 px-4 whitespace-pre-wrap break-words bg-[#181a29] rounded-b-lg text-base">
                  <code>
                    <span className="text-[#7c3aed] font-bold">$</span> git
                    clone https://github.com/mairohanhoon/git-lens.git{"\n"}
                    <span className="text-[#7c3aed] font-bold">$</span>{" "}
                    <a
                      href="https://git-lens-live-link.com"
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
    </div>
  );
};

export default Project;
