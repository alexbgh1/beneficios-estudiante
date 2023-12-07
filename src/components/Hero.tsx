const Hero = () => {
  return (
    <section
      className="relative
    after:bg-primary
    after:bg-[length:100px_100px]  after:absolute after:inset-0 after:bg-[url('/images/hero/bg-grid.png')] after:bg-top after:z-[-1]"
    >
      <div className="flex items-center justify-center container lg:max-w-5xl mx-auto px-4 py-16 sm:py-32 text-center bg-transparent">
        <h1 className="max-w-xl text-3xl text-white font-extrabold sm:tracking-tight lg:text-5xl">
          Beneficios estudiantiles con <span>correo institucional</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
