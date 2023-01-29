// bg
const dongbang = require("./bg/dongbang.jpg");
const school = require("./bg/school.png");
const library = require("./bg/library.png");

// bgm
const take = require("./bgm/take.mp3");
// speakers
const b = "스클 선배";
// sprites
const bn = require("./sprites/student.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
//정답 문장을 위한 폼

let story = [
  {
    bg: dongbang,
    bgm: take,
    sprite: bn,
    speaker: b,
    text: "그럼 게임을 시작해볼까요?"
  },
  {
    text: "이제부터 당신은 게임 속 주인공이 되어서 등장인물을 공략해야 해요!"
  },
  {
    text: "상대의 말에 대한 반응을 입력하고, 공략 결과는 엔딩에서 확인할 수 있답니다"
  },
  { text: "자, 이제 정말로 게임을 시작해봐요!" },
  { choicesExist: true, receiveJump: "features" },
  // Effects
  {
    routeBegins: "showEffects",
    speaker: b,
    sprite: bn,
    text: "당신의 점수는...",
    resultExist: true
  },
  {
    text: "즐거운 게임 되셨나요? 다음에 또 봐요!",
    jumpTo: "features"
  },
  // Storing choices
  //Part 1 (Q1, Q2)
  {
    spriteLeft: "",
    routeBegins: "showStoringChoices",
    text: "안녕하세요? 동아리 지원하려 오셨구나! 기다리고 있었어요."
  },
  {
    speaker: b,
    sprite: bn,
    text: "자, 지원서는 여기에 있어요!"
  },
  { 
    speaker: "당신",
    text: "(나를 다른 신입생으로 착각했나봐.. 뭐라고 반응하지?)",
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q1
  }, 
  {
    speaker: b,
    sprite: bn,
    text: "지원 감사해요! 우리 동아리는 지원하면 합격이라..ㅎㅎ"
  },
  {
    speaker: b,
    sprite: bn,
    text: "앞으로 잘 부탁해요!"
  },
  {
    speaker: b,
    sprite: bn,
    text: "앗 벌써 점심이네요.. 같이 밥 먹으러 가요! 아는 맛집 있어요?"
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q2
  },
  { 
    speaker: b,
    sprite: bn,
    text: "아 그래요? 학교 후문에 진짜 맛있는 데 거기 가요!",
  },
  { 
    text: "(그렇게 둘은 초면에 맛점을 한다.)",
  },
  //Part 2 (Q3, Q4, Q5)
  {
    bg: library
  },
  {
    text: "(도서관에서 혼자 공부하고 있는 선배가 나를 보고 먼저 인사를 했다!)"
  },
  {
    text: "(그렇게 대화를 주고 받는데..)"
  },
  { 
    speaker: b,
    sprite: bn,
    text: "혼자 공부하는 거 잘 돼?",
  },
  { 
    speaker: b,
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q3
  },
  {
    text: "(공부를 2시간 넘게 하니 점점 힘들다... 그런데 옆에 선배가 말을 건다.)"
  },
  {
    speaker: b,
    sprite: bn,
    text: "으아 공부 오래 하니까 힘드네ㅎㅎ"
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q4
  },
  {
    text: "(공부에 매우 집중한 나머지 벌써 밤이 되었다.)"
  },
  {
    text: "(선배는 곧 가려나 보다. 나도 선배랑 같이 가고 싶은데..!)"
  },
  {
    speaker: b,
    sprite: bn,
    text: "난 이제 집에 가려구! 너는 어떻게 할거야?"
  },
  {   
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q5
  },
  //Part 3 (동방- Q6, Q7)
  {
    bg: dongbang
  },
  {
    text: "(다음 날 오후 수업이 다 끝나고 동방을 찾아갔다.)"
  },
  {
    text: "(선배가 동방 청소를 하나 보다. 동방 바닥에 먼지가 너무 많아 보인다.)"
  },
  {
    text: "(선배와 청소를 같이 하자!)"
  },
  { 
    speaker: b,
    sprite: bn,
    text: "도와줘서 고마워! 쓰레기통 비울래, 물품 정리할래, 빗자루질 할래?",
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q6
  },
  {
    text: "(청소가 끝나고 쉬고 있는데 분위기를 풀기 위해서 선배가 물어본다.)"
  },
  {
    speaker: b,
    sprite: bn,
    text: "심심한데 같이 유튜브 볼래? 아니면 보드게임 할래?"
  },
  { 
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q7
  },
  {
    text: "(그렇게 선배와 나는 좀 더 친밀한 사이가 되었다.)"
  },
  {
    text: "(같이 시간을 보내면서 썸의 기류를 느꼈지만.. 나 혼자만의 착각일지도..?)"
  },
  //Part 4 (어대공- Q8, Q9, Q10)
  {
    bg: school
  },
  {
    text: "(저녁을 먹고 같이 어린이 대공원에 가기로 했다.)"
  },
  {
    text: "(하지만 곧 폐장시간이라 한 곳밖에 들리지 못할 것 같은데..)"
  },
  {
    speaker: b,
    sprite: bn,
    text: "여기 너무 넓어서 한 곳만 가려구! 바로 앞에 있는 분수대 갈래? 아니면 저 멀리 있는 꽃밭으로 갈까?"
  },
  {   
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q8
  },
  {
    speaker: b,
    sprite: bn,
    text: "오 그래그래ㅎㅎ 거기서 뭐하려고?"
  },
  {   
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q9
  },
  {
    text: "(오늘 찍은 선배 사진을 보여주는데 선배가 물어본다.)"
  },
  {
    speaker: b,
    sprite: bn,
    text: "나 어때? 잘 나온 것 같아?"
  },
  {   
    speaker: "",
    text: "당신의 반응을 입력해주세요!",
    answerFormExist: true //Q10
  },
  {   
    text: "(선배와의 즐거운 시간을 보냈다.. 선배는 나를 어떻게 생각하고 있을까?)",
  },
  {
    text: "(메뉴에서 <공략 결과 확인하기>를 클릭해보세요!!)",
    jumpTo: "features"
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
