import React from "react";

export const IgPost = (): JSX.Element => {
  return (
    <div className="bg-[#2998e8] overflow-hidden w-full min-w-[1024px] h-[1024px] flex flex-col items-center justify-center relative">
      <img
        className="w-[27.22%] h-auto mb-8"
        alt="Compass icon"
        src="/figmaAssets/group.png"
      />

      <h1 className="[font-family:'Petrona',Helvetica] font-bold text-white text-[57.7px] text-center tracking-[0] leading-[84.0px] whitespace-nowrap mb-6">
        Integration
      </h1>

      <p className="w-[465px] [font-family:'Inter',Helvetica] font-normal text-white text-[27.2px] text-center tracking-[0] leading-[44.4px] mb-auto">
        Users are very involved in the development process so that they can see
        the progress of software development from an early age.
      </p>

      <img
        className="w-[22.46%] h-auto mt-auto mb-12"
        alt="Arkeocode logo"
        src="/figmaAssets/group-1.png"
      />
    </div>
  );
};
