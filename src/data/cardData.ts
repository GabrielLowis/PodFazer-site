interface Card {
  id: number;
  icon: string;
  title: string;
  text: string;
  years: string;
  level: string;
}

export const cards: Card[] = [
  {
    id: 1,
    icon: "/iconsCard/1.png",
    title: "Efeito Joule - Primeira Lei de Ohm",
    text: "Aprenda como tensão, corrente e resistência se relacionam em um circuito elétrico.",
    years: "6-10 Anos",
    level: "Básico",
  },
  {
    id: 2,
    icon: "/iconsCard/2.png",
    title: "Sensor com dispositivo de entrada",
    text: "Aprenda como sensores captam dados do ambiente e os transformam em sinais para sistemas eletrônicos.",
    years: "6-10 Anos",
    level: "Mediano",
  },
  {
    id: 3,
    icon: "/iconsCard/3.png",
    title: "Conversão de Som",
    text: "Aprenda como a conversão de som em sinal elétrico transforma vibrações sonoras em impulsos elétricos para serem processados por sistemas eletrônicos.",
    years: "6-10 Anos",
    level: "Avançado",
  },
  {
    id: 4,
    icon: "/iconsCard/4.png",
    title: "Resistência Elétrica",
    text: "Aprenda como a resistência elétrica limita o fluxo de corrente em um circuito, influenciando o funcionamento dos componentes eletrônicos.",
    years: "11-14 Anos",
    level: "Básico",
  },
  {
    id: 5,
    icon: "/iconsCard/5.png",
    title: "Energia Solar e Armazenamento em Baterias",
    years: "11-14 Anos",
    text: "Aprenda como a energia solar é captada por painéis fotovoltaicos e armazenada em baterias para uso em sistemas sustentáveis.",
    level: "Mediano",
  },
  {
    id: 6,
    icon: "/iconsCard/6.png",
    title: "Sinal Digital e Sensor de Pressão",
    text: "Aprenda como sinais digitais transmitem informações em forma de bits e como sensores de pressão detectam variações físicas convertendo-as em dados eletrônicos.",
    years: "11-14 Anos",
    level: "Avançado",
  },
  {
    id: 7,
    icon: "/iconsCard/7.png",
    title: "Conversão de Energia Elétrica em Movimento",
    text: "Aprenda como motores e atuadores transformam energia elétrica em movimento mecânico para aplicações diversas.",
    years: "15-18 Anos",
    level: "Básico",
  },
  {
    id: 8,
    icon: "/iconsCard/8.png",
    title: "Termorresistência e Sensor NTC",
    text: "Aprenda como sensores como termorresistências e NTCs detectam variações de temperatura através da mudança de resistência elétrica.",
    years: "15-18 Anos",
    level: "Mediano",
  },
  {
    id: 9,
    icon: "/iconsCard/9.png",
    title: " Integração de Sensores e Atuadores em Robótica",
    text: "Construa caminhos diferentes para a energia e veja o que muda quando ligamos tudo junto ou separado!",
    years: "15-18 Anos",
    level: "Avançado",
  },
];
