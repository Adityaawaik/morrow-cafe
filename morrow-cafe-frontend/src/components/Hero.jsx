import React from "react";

const Hero = () => {
  const scrollToClaim = () => {
    document.getElementById("claim")?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section className="px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Content */}
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6247] sm:text-sm">
            A little something for your next visit
          </p>

          <h1 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.03em] sm:text-6xl lg:text-7xl">
            Your next coffee
            <span className="block text-[#9A6247]">just got ₹150 better.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-[#241C17]/65 sm:text-lg">
            Claim ₹150 OFF your next visit to Morrow Café, Sector 104, Noida.
          </p>

          <button
            onClick={scrollToClaim}
            className="group cursor-pointer mt-8 inline-flex min-h-13.5 w-full items-center justify-center gap-3 rounded-full bg-[#241C17] px-7 text-sm font-semibold text-white transition duration-300 hover:bg-[#3A2D25] focus:outline-none focus:ring-2 focus:ring-[#9A6247] focus:ring-offset-4 sm:w-auto"
          >
            Claim ₹150 OFF
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>

          <p className="mt-4 text-xs text-[#241C17]/45">
            No OTP. No complicated steps.
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src="/images/morrow-cafe-hero.webp"
              alt="Warm interior of Morrow Café"
              className="h-97.5 w-full object-cover sm:h-125 lg:h-155"
            />

            <div className="absolute bottom-5 left-5 rounded-full bg-[#F6F1E8]/95 px-4 py-2 backdrop-blur-sm">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Sector 104 · Noida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
