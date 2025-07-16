import { cards } from "@/data/cardData";
import { Link } from "react-router-dom";

const StartLearning = () => {
  return (
    <div className="min-h-screen py-12 px-8 sm:px-6 md:px-10 lg:px-20 xl:px-40 bg-white">
      <div className="w-full flex justify-center mb-12 text-center">
        <h2 className="text-4xl md:text-5xl xl:text-6xl text-[#45a7a7] font-puff font-bold leading-tight">
          Comece a aprender!
        </h2>
      </div>

      <div className="flex justify-center items-center flex-wrap gap-8 sm:gap-10 md:gap-12">
        {cards.map((item) => (
          <Link to={"/efeito-joule"}>
            <div
              key={item.id}
              className="w-full sm:w-[18rem] md:w-[20rem] h-[auto] rounded-[2rem] shadow-xl overflow-hidden font-puff relative bg-[#05151F]"
            >
              <div
                className="h-[4rem] bg-[#FF936F]"
                // style={{
                //   backgroundImage: "linear-gradient(90deg, #5de0e6, #004aad)",
                // }}
              />

              <div className="absolute left-1/2 top-[70px] -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-[5rem] h-[5rem] sm:w-[6rem] sm:h-[6rem] md:w-[7rem] md:h-[7rem] rounded-full bg-white flex items-center justify-center shadow-md">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-[3rem] h-[3rem] sm:w-[4rem] sm:h-[4rem] md:w-[5rem] md:h-[5rem] object-contain"
                  />
                </div>
              </div>

              <div className="h-full bg-[#45a7a7] flex flex-col items-center text-center px-4 pt-18 pb-4">
                <h3 className="text-[#ffbb00] mt-2 font-bold mb-1 leading-tight text-lg sm:text-xl md:text-2xl">
                  {item.title}
                </h3>
                <p className="w-full font-poppins text-justify mt-2 text-sm sm:text-10 text-white leading-snug">
                  {item.text}
                </p>
                <div className="bg-amber-400 font-puff text-[#393939] font-bold text-xl w-full h-10 mt-2 rounded-b-2xl px-9 flex justify-between items-center">
                  <p>{item.years}</p>
                  <span>|</span>
                  <p>{item.level}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StartLearning;
