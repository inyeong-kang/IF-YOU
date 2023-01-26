var choices = [
  {
    choices: [
      {
        routeBegins: "showEffects",
        content: "Effects",
        nextIndex: 0
      },
      {
        routeBegins: "showTransitions",
        content: "Transitions",
        nextIndex: 0
      },

      {
        routeBegins: "showStoringChoices",
        content: "세종대 뉴비로 살아남기",
        resetStore: "true"
      },
      {
        routeBegins: "leave",
        content: "Leave"
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
  {
    choices: [
      {
        store: "blockAffection",
        routeBegins: "hangOutWithBlock",
        content: "Yep.",
        nextIndex: 0
      },
      {
        routeBegins: "noHangOutWithBlock",
        content: "Nope.",
        nextIndex: 0
      }
    ]
  }
];

export default choices;
