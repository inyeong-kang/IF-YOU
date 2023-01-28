var choices = [
  {
    choices: [
      {
        routeBegins: "showEffects",
        content: "공략 결과 확인하기",
        nextIndex: 0
      },
      {
        routeBegins: "showStoringChoices",
        content: "세종대 뉴비로 살아남기",
        resetStore: "true"
      },
      {
        routeBegins: "leave",
        content: "홈으로"
      }
    ]
  },
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "helpBlock",
        content: "아.. 맞아요 지원하러 왔어요!"
      },
      {
        routeBegins: "noHelpBlock",
        content: "아뇨 사람 잘못 보셨어요;;"
      }
    ]
  },
];

export default choices;
