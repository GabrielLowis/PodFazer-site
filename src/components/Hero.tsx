const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/imagens-uploads/fundo.png')`,
        }}
      />

      {/* Gradient overlay - lighter at top, much darker at bottom for stronger connection */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black/95" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl sm:-ml-10">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 font-poppins leading-tight">
            PodFazer!
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl text-white mb-6 sm:mb-8 font-poppins font-light leading-relaxed">
            Educação maker e sustentabilidade
            <br />
            se encontram
          </p>

          <button className="bg-transparent border-2 border-cyan-400 text-cyan-400 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 font-poppins font-medium text-sm sm:text-base">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;