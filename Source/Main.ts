namespace Application {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  export let dataForSave = {
    visitedBar: false,
    visitedCafe: false,
    visitedLibrary: false,
    visitedHarbor: false,
    triedToAccuseAll: false,
  };

  window.addEventListener("load", start);

  // text pace: pauses used by ticker between letters and before a paragraph in milliseconds
  ƒS.Speech.setTickerDelays(25, 100);

  function start(_event: Event): void {

    // create menu
    gameMenu = ƒS.Menu.create(
      gameMenuOptions,
      buttonFunctionalities,
      "gameMenu"
    );

    // scenes and ids: { id: "Id", scene: Scene, name: "Scene" } -> here: except for intro non-linear: order is given by id
    let scenes: ƒS.Scenes = [
      { scene: Intro, name: "Intro" },

      { id: "NextLocationChoice", scene: NextLocationChoice, name: "" },

      { id: "Kneipe", scene: Bar, name: "Kneipe" },
      { id: "Bücherei", scene: Library, name: "Bücherei" },
      { id: "Hafen", scene: Harbor, name: "Hafen" },
      { id: "Café", scene: Cafe, name: "Café" },

      { id: "Outro", scene: Outro, name: "Outro" },

      { id: "AccusedWilma", scene: AccusedWilma, name: "AccusedWilma", next: "EndOfNovel" },
      { id: "AccusedGabi", scene: AccusedGabi, name: "AccusedGabi", next: "EndOfNovel" },
      { id: "AccusedUwe", scene: AccusedUwe, name: "AccusedUwe", next: "EndOfNovel" },
      { id: "AccusedElise", scene: AccusedElise, name: "AccusedElise", next: "EndOfNovel" },
      { id: "AccusedAll", scene: AccusedAll, name: "AccusedAll", next: "EndOfNovel" },

      { id: "EndOfNovel", scene: EndOfNovel, name: "EndOfNovel" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

   function preloadCharacterPoses() {
      Object.keys(characters).forEach((characterName: string) => {
        Object.keys(characters[characterName].pose).forEach(characterPose => {
          ƒS.Character.get(characters[characterName]).getPose(characters[characterName].pose[characterPose]);
        });
      });
    };

    preloadCharacterPoses();

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
