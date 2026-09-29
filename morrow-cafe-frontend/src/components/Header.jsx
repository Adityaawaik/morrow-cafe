import React from "react";

const Header = () => {
  return (
    <header className="border-b border-[#241C17]/10">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <div>
          <p className="font-serif text-xl font-semibold tracking-[0.18em] sm:text-2xl">
            MORROW
          </p>

          <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.25em] text-[#241C17]/60 sm:text-[10px]">
            Café
          </p>
        </div>

        <div className="text-right">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#241C17]/50 sm:text-[10px]">
            Sector 104
          </p>

          <p className="text-xs font-medium text-[#241C17]/70">Noida</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
