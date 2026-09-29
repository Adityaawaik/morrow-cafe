import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Enter your details",
      description: "Tell us your name and mobile number to start your claim.",
    },
    {
      number: "02",
      title: "Get your code",
      description: "We'll generate a unique offer code for your ₹150 discount.",
    },
    {
      number: "03",
      title: "Show it at Morrow",
      description:
        "Present your code when you visit Morrow Café in Sector 104.",
    },
  ];

  return (
    <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6247]">
            How it works
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl">
            Three simple steps.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3 lg:mt-16">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl border border-[#241C17]/10 bg-[#F6F1E8] p-6 sm:p-8"
            >
              <p className="font-serif text-3xl text-[#9A6247]">
                {step.number}
              </p>

              <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#241C17]/60">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
