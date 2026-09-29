const Footer = () => {
  return (
    <footer className="bg-[#241C17] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-2xl tracking-[0.15em]">MORROW</p>

          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/40">
            Café · Sector 104 · Noida
          </p>
        </div>

        <p className="text-xs text-white/40">
          Good coffee. Better reasons to stay.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
