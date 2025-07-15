import PodFazer from "@/assets/PodFazer.png";

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
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-black/70 to-white/95" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-20 w-full">
        <div className="max-w-2xl sm:-ml-10">
          {/* <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2 sm:mb-4 font-poppins leading-tight">
            PodFazer!
          </h2> */}
          <img src={PodFazer} className="w-100" alt="PodFazer" />

          <p className="text-lg sm:text-xl md:text-xl text-white mb-6 sm:mb-8 font-poppins font-light leading-7 mt-5">
            Educação maker e sustentabilidade
            <br />
            se encontram
          </p>

          <button className="bg-transparent border-2 border-[#31B9B8] text-[#31B9B8] px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-xl hover:bg-[#31B9B8] hover:text-[#FFCF47] transition-all duration-300 font-poppins font-bold text-sm sm:text-xl">
            Saiba mais
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
