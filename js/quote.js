const quotes = [
  {
    quote: "이브를 생각할 때면 마음 어딘가가 조금씩 부서지는 것 같았다.",
    author: "인지 공간 - 김초엽",
  },
  {
    quote:
      "어머니는 나에게 어른이 된다는 것은 결국 혼자임을 알게 되는 것이라고 말했다.",
    author: "인지 공간 - 김초엽",
  },
  {
    quote:
      "나는 아직도 그녀가 내게 했던 말을 기억한다. 기억하는 이링 사랑하는 사람들의 영혼을, 자신의 영혼을 증명하는 행동이라는 말을.",
    author: "아주 희미한 빛으로도 - 최은영",
  },
  {
    quote: "사람이 보는 것을 쓰는 건 아니잖니. 본다고 믿는 것을 쓰지.",
    author: "사막에서 - 천선란",
  },
  {
    quote:
      "밤하늘의 별이 우리에게 빛으로 닿을 때까지 얼마만큼 오랜 시간 고독한 우주를 가로질렀는지 따위를 더 생각했다.",
    author: "사막에서 - 천선란",
  },
  {
    quote:
      "빛의 속도로 우주를 유영하다 나에게 다시 닿은 것이다. 우리는 이것을 운명이라 부른다.",
    author: "사막에서 - 천선란",
  },
  {
    quote:
      "로라는 말했다. 사랑과 이해는 같지 않다고. …그리고 로라가 진에게 그것을 설명할 생각조차 없다는 것은 진을 슬프게 했다.",
    author: "로라 - 김초엽",
  },
  {
    quote: "네가 떠나면 난 아주 슬플 거야. 너를 사랑하는 일은 나를 기쁘게 해.",
    author: "로라 - 김초엽",
  },
  {
    quote: "너를 향한 몸짓 Love on the floor",
    author: "nct127 - Love on the floor",
  },
  {
    quote: "너의 숨소리도 들려 이렇게 가까우니까",
    author: "nct127 - 우산",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[parseInt(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
