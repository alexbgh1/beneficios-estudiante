const Hero = () => {
  return (
    <section className="relative after:bg-[url('/images/hero/bg-grid.png')] after:bg-accent/50 after:filter after:opacity-25 after:bg-[length:100px_100px] after:absolute after:inset-0 after:bg-top after:z-[-1]">
      <div className="md:drop-shadow-md-primary drop-shadow-primary flex items-center justify-center container lg:max-w-5xl mx-auto px-4 py-16 sm:py-32 text-center bg-transparent">
        <h1 className="border border-accent/50 rounded-sm text-accent px-4 py-8 bg-secondary max-w-xl text-3xl font-extrabold sm:tracking-tight lg:text-5xl">
          Beneficios estudiantiles con <span>correo institucional</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
