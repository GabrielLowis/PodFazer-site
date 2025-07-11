const CardWRobot = () => {
  return (
    <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[80vh] px-6">
      
      <img
        src="/robot.png"
        alt="Robô"
        className="w-[200px] sm:w-[180px] md:w-[200px] lg:w-1/5 lg:absolute lg:left-[12%] xl:left-[20%] mb-1 lg:mb-0"
      />

      <div className="w-full max-w-[38rem] bg-[#383838] rounded-[2rem] text-white flex flex-col justify-around p-6 sm:p-8 md:p-10 lg:ml-[6rem] lg:pr-22">
        
        <div className="flex flex-col sm:flex-row items-center lg:itens-start sm:items-center gap-1 lg:gap-4">
          <img src="/iconsRobot/tool.png" alt="" className="w-[80px] h-[50px]" />
          <div className="border-b border-white mb-4 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Explorar o mundo maker</h2>
            <p className="text-sm sm:text-base">Aprenda eletrônica e criatividade com componentes reutilizados.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center lg:itens-start sm:items-center gap-1 lg:gap-4">
          <img src="/iconsRobot/recycle.png" alt="" className="w-[70px] h-[50px]" />
          <div className=" mb-4 border-b border-white pb-4">
            <h2 className="text-xl sm:text-2xl font-bold">Dar novo propósito ao descarte</h2>
            <p className="text-sm sm:text-base">Transforme vapes apreendidos em projetos cheios de vida.</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center lg:itens-start sm:items-center gap-1 lg:gap-8">
          <img src="/iconsRobot/plant.png" alt="" className="w-[50px] h-[60px]" />
          <div>
            <h2 className="text-xl sm:text-2xl font-bold">Criar com consciência</h2>
            <p className="text-sm sm:text-base">Tecnologia, sustentabilidade e educação na prática.</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardWRobot;
