const Education = () => {
  return (
    <div className="flex flex-col items-center px-4 py-12" id="education">
      <h2 className="text-white text-3xl font-extrabold leading-tight tracking-[-0.015em] mb-10">
        EDUCATION   
      </h2>

      <div className="grid grid-cols-[40px_1fr] gap-x-4 w-full max-w-3xl">
        {/* ITEM 1 */}
        <div className="flex flex-col items-center">
          <div className="size-2 rounded-full bg-white"></div>
          <div className="w-[1.5px] bg-[#474747] flex-1"></div>
        </div>

        <div className="flex flex-col gap-1 py-4 px-5 mb-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <p className="text-white text-lg font-semibold leading-snug">
            Bachelor of Science in Computer Science
          </p>
          <p className="text-[#ababab] text-sm leading-relaxed">
            DIT University, Dehradun (2022 - 2026)
          </p>
          <p className="text-[#ababab] text-sm leading-relaxed">
            Grade: 8.02 CGPA
          </p>
        </div>

        {/* ITEM 2 */}
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] bg-[#474747] flex-1"></div>
          <div className="size-2 rounded-full bg-white"></div>
        </div>

        <div className="flex flex-col gap-1 py-4 px-5 mt-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
          <p className="text-white text-lg font-semibold leading-snug">
            Senior Secondary
          </p>
          <p className="text-[#ababab] text-sm leading-relaxed">
            Rainbow Academy Se. Sec. School, Haldwani (2020 - 2022)
          </p>
          <p className="text-[#ababab] text-sm leading-relaxed">
            Grade: 80.75%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
