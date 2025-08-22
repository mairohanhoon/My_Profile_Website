const NavBar = () => {
  return (
    <div className="flex items-center justify-between whitespace-nowrap px-10 py-3">
      <div className="flex items-center gap-4 text-white">
        <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">
          Portfolio
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9">
          <a className="text-white text-lg font-bold leading-normal" href="#about" onClick={() => {
            window.location.href = "#about";
          }}>
            About
          </a>
          <a className="text-white text-lg font-bold leading-normal" href="#education" onClick={() => {
            window.location.href = "#education";
          }}>
            Education
          </a>
          <a className="text-white text-lg font-bold leading-normal" href="#projects" onClick={() => {
            window.location.href = "#projects";
          }}>
            Projects
          </a>
          <a className="text-white text-lg font-bold leading-normal" href="#experience" onClick={() => {
            window.location.href = "#experience";
          }}>
            Experience
          </a>
          <a className="text-white text-lg font-bold leading-normal" href="#techstack" onClick={() => {
            window.location.href = "#techstack";
          }}>
            Tech Stack
          </a>
          <a className="text-white text-lg font-bold leading-normal" href="#contact" onClick={() => {
            window.location.href = "#contact";
          }}>
            Contact
          </a>
        </div>
        <button
          onClick={() => {
            window.open(
              "https://docs.google.com/document/d/15-mC43IeFO7kNpMVY7gmT66NJwKEDURiac9cNDi1EdA/edit?usp=sharing",
              "_blank"
            );
          }}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-purple-700 text-white text-sm font-bold leading-normal tracking-[0.015em]">
          <span className="truncate">Resume</span>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
