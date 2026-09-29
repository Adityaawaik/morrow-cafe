import { useContext } from "react";
import UserContext from "../store/UserContext";

const ClaimForm = () => {
  const { formData, errors, status, claimCode, handleSubmit, handleChange } =
    useContext(UserContext);

  if (status === "success") {
    return (
      <section
        id="claim"
        className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
      >
        <div className="mx-auto max-w-xl">
          <div className="rounded-4xl bg-[#241C17] p-7 text-white sm:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D6A98B] text-xl text-[#241C17]">
              ✓
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#D6A98B]">
              Claim successful
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">
              ₹150 OFF claimed.
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/60">
              Show this code when you visit Morrow Café.
            </p>

            {/* Claim Code */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                Your claim code
              </p>

              <p className="mt-2 font-mono text-2xl font-semibold tracking-wider">
                {claimCode}
              </p>
            </div>

            {/* Copy Button */}
            <button
              type="button"
              onClick={() => {
                navigator.clipboard?.writeText(claimCode);
              }}
              className="mt-5 min-h-13 w-full rounded-full bg-[#F6F1E8] px-6 text-sm font-semibold text-[#241C17] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#D6A98B] focus:ring-offset-2 focus:ring-offset-[#241C17]"
            >
              Copy code
            </button>

            <p className="mt-5 text-center text-xs text-white/40">
              Morrow Café · Sector 104, Noida
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="claim"
      className="bg-[#EEE5D8] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-24">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9A6247]">
            Claim your offer
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight tracking-[-0.02em] sm:text-5xl lg:text-6xl">
            Your coffee
            <span className="block text-[#9A6247]">is waiting.</span>
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-[#241C17]/65">
            Enter your details and we'll create your unique ₹150 OFF claim code.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-4xl bg-[#F6F1E8] p-6 shadow-sm sm:p-8"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              autoComplete="name"
              aria-describedby="name-error"
              aria-invalid={Boolean(errors.name)}
              className="mt-2 min-h-13.5 w-full rounded-xl border border-[#241C17]/15 bg-transparent px-4 text-sm outline-none transition placeholder:text-[#241C17]/30 focus:border-[#9A6247] focus:ring-2 focus:ring-[#9A6247]/20"
              placeholder="Rahul Sharma"
            />

            <p
              id="name-error"
              aria-live="polite"
              className="mt-2 min-h-5 text-xs text-red-700"
            >
              {errors.name}
            </p>
          </div>

          {/* Phone */}
          <div className="mt-4">
            <label htmlFor="phone" className="text-sm font-semibold">
              Phone number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="numeric"
              value={formData.phone}
              onChange={handleChange}
              autoComplete="tel"
              maxLength={10}
              aria-describedby="phone-error"
              aria-invalid={Boolean(errors.phone)}
              className="mt-2 min-h-13.5 w-full rounded-xl border border-[#241C17]/15 bg-transparent px-4 text-sm outline-none transition placeholder:text-[#241C17]/30 focus:border-[#9A6247] focus:ring-2 focus:ring-[#9A6247]/20"
              placeholder="9876543210"
            />

            <p
              id="phone-error"
              aria-live="polite"
              className="mt-2 min-h-5 text-xs text-red-700"
            >
              {errors.phone}
            </p>
          </div>

          {errors.submit && (
            <div
              role="alert"
              className="mt-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              {errors.submit}
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-4 min-h-13.5 w-full rounded-full bg-[#241C17] px-6 text-sm font-semibold text-white transition duration-300 hover:bg-[#3A2D25] disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus:ring-2 focus:ring-[#9A6247] focus:ring-offset-4"
          >
            {status === "loading" ? "Claiming your offer..." : "Claim ₹150 OFF"}
          </button>

          <p className="mt-4 text-center text-xs leading-5 text-[#241C17]/45">
            By claiming, you'll receive a unique code for your next visit to
            Morrow Café.
          </p>
        </form>
      </div>
    </section>
  );
};

export default ClaimForm;
