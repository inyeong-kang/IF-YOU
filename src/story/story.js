// bg
const microphone = require("./bg/dongbang.jpg");
const entrance = require("./bg/entrance.jpeg");
// bgm
const take = require("./bgm/take.mp3");
// speakers
const b = "용현 선배";
// sprites
const bn = require("./sprites/student.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
//정답 문장을 위한 폼
const answerForm = require("./answerForm");

let story = [
  {
    bg: microphone,
    bgm: take,
    sprite: bn,
    speaker: b,
    text: "그럼 게임을 시작해볼까요?"
  },
  {
    text: "이 게임은..."
  },
  {
    spriteLeft: bp,
    spriteRight: bh,
    text: "Or you can use all three positions simultaneously."
  },
  {
    spriteLeft: "",
    spriteRight: "",
    text: "We can also have sound effects and voices as well."
  },
  { text: "For example..." },
  { speaker: "", text: 'soundEffect: require("./sounds/jump.mp3")', soundEffect: require("./sounds/jump.mp3") },
  { speaker: b, text: "And voices are done in the same manner." },
  {
    sprite: bh,
    text: "Okay, looks like we're done with the fundamentals."
  },
  {
    sprite: bn,
    text: "It's a little short, but it can do what you need for the most part."
  },
  { text: "Anyway, let's diverge to some specific features." },
  { choicesExist: true, receiveJump: "features" },

  // Storing choices
  {
    spriteLeft: "",
    routeBegins: "showStoringChoices",
    text: "안녕하세요? 동아리 지원하려 오셨구나! 기다리고 있었어요."
  },
  {
    sprite: bp,
    text: "자, 지원서는 여기에 있어요!"
  },
  { 
    speaker: "당신",
    text: "(나를 다른 신입생으로 착각했나봐.. 뭐라고 반응하지?)",
    answer: answerForm
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answer: answerForm
  },
  { choicesExist: true, text: "(모르는 선배가 종이와 펜을 슥 내민다.)" },
  {
    routeBegins: "helpBlock",
    speaker: "nashkenazy",
    text: "No problem."
  },
  {
    sprite: bh,
    speaker: b,
    text: "Thanks.",
    jumpTo: "blockHelp"
  },
  {
    routeBegins: "noHelpBlock",
    speaker: "nashkenazy",
    text: "Nah, I'm good."
  },
  {
    speaker: "",
    sprite: "",
    text: "The block trips and falls.",
    jumpTo: "blockHelp"
  },
  {
    receiveJump: "blockHelp",
    text: "(Back to common route) Some weeks pass."
  },
  { text: "Block asked me to hang out at his place." },
  { text: "Did I accept?", choicesExist: true },
  {
    routeBegins: "hangOutWithBlock",
    text: "It was fun. We ate some pizza and watched a movie.",
    jumpTo: "blockHangOut"
  },
  {
    routeBegins: "noHangOutWithBlock",
    text: "I said I was busy, but I just didn't feel like it.",
    jumpTo: "blockHangOut"
  },
  {
    receiveJump: "blockHangOut",
    text: "(Back to common route) I haven't seen Block for a few years now."
  },
  { text: "I text him to see how he's doing.", jumpToBecauseStore: "blockAffection" },
  // Goes to next index if the user's choices do not fulfill any `receiveJumpBecauseStore` requirements.
  {
    text: "I put my phone down and continue with life."
  },
  { text: "He never texted back." },
  { text: "blockAffection score: 0. (Technically anything not 1 or 2)", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 1],
    text: "A few hours later, he texts back."
  },
  {
    speaker: b,
    text: "Sorry, I've been a bit busy organizing my wedding."
  },
  { text: "I forgot to send you a letter, but would you like to come?" },
  { speaker: "", text: "선배의 호감도가 +1 상승하였습니다!", jumpTo: "skitDone" },
  {
    receiveJumpBecauseStore: ["blockAffection", 2],
    text: "He texts back immediately."
  },
  {
    speaker: b,
    text: "Hey, nashkenazy! It's been so long since we'd last talked."
  },
  { text: "I was thinking about making you my best man for a wedding I've been planning." },
  { text: "I know it's a bit sudden, but you're the only one I think is best for the role." },
  { text: "blockAffection score: 2.", jumpTo: "skitDone" },
  {
    receiveJump: "skitDone",
    text: "(Done with skit) It takes a bit more work to get the choices done, but it should work out in the end.",
    jumpTo: "features"
  },
  {
    routeBegins: "leave",
    sprite: bh,
    spriteEffect: "shake",
    text: "Thank you for trying out the demo.",
    jumpTo: "title-screen"
  }
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");
setFutureProperties("answer");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
