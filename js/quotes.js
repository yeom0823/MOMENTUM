const quotes = [
{
    quote : "아이디어의 좋고 나쁨은 어떻게 실행하느냐에 따라 결정된다",
    author : "카를로스 곤",
},
{
    quote : "인생은 원래 공평하지 못하다. 그런 현실에 대하여 불평할 생각하지 말고 받아들여라.",
    author : "빌 게이츠",
},
{
    quote : "자기 신뢰는 성공의 첫번째 비결이다.",
    author : "랄프 왈도 에머슨",
},
{
    quote : "현재와 미래는 어떻게든 연결되어 있다",
    author : "스티브 잡스",
},
{
    quote : "최선을 다하고 있다고 말해봤자 소용없다. 필요한 일을 함에 있어서는 반드시 성공해야 한다.",
    author : "윈스턴 처칠",
},
{
    quote : "20년 후, 당신은 했던 일보다 하지 않았던 일로 인해 더 실망을 할 것이다.",
    author : "마크 트웨인",
},
{
    quote : "최대한의 삶을 살고, 최대한 긍정적인 것에 집중하자.",
    author : "매트 카메론",
},
{
    quote : "당신이 할 수 있다고 생각하든, 그렇지 않다고 생각하든 당신 말이 맞습니다.",
    author : "헨리 포드",
},
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author} -`;