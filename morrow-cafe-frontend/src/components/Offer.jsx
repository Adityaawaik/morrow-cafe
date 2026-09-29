import React from "react";

const Offer = () => {
  return (
    <section className="border-y border-[#241C17]/10 bg-[#EEE5D8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6247]">
            Your offer
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            ₹150 OFF
            <span className="block text-[#241C17]/50">your next visit.</span>
          </h2>
        </div>

        <div>
          <p className="text-base leading-7 text-[#241C17]/70 sm:text-lg">
            A little thank-you from Morrow Café. Claim your offer now and
            receive a unique code to show when you visit us.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-md">
            <div className="rounded-2xl border border-[#241C17]/10 bg-[#F6F1E8] p-5">
              <p className="font-serif text-2xl">₹150</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#241C17]/50">
                Discount
              </p>
            </div>

            <div className="rounded-2xl border border-[#241C17]/10 bg-[#F6F1E8] p-5">
              <p className="font-serif text-2xl">01</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-[#241C17]/50">
                Claim
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs text-[#241C17]/45">
            Valid for your next visit. One claim per customer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Offer;
