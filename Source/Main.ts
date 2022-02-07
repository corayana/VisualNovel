namespace Application {

  /**
   * TODO
   * - favicon
   * - Transitions: screen size fix
   * - focused buton
   * - Vorschaubild (Köpfe in Kreisen?)
   * - Name für VN
   * - Sound/Musik
   * */ 


  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: "",
    visitedBar: false,
    visitedCafe: false,
    visitedLibrary: false,
    visitedHarbor: false,
  };

  window.addEventListener("load", start);

  // text pace: pauses used by ticker between letters and before a paragraph in milliseconds
  ƒS.Speech.setTickerDelays(25, 100);

  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(
      gameMenuOptions,
      buttonFunctionalities,
      "gameMenu"
    );

    // scenes and ids: { id: "Id", scene: Scene, name: "Scene" }
    // here: except for intro non-linear: order is given by id
    let scenes: ƒS.Scenes = [

      { scene: Intro, name: "Intro" },

      { id: "NextLocationChoice", scene: NextLocationChoice, name: "" },

      { id: "Kneipe", scene: Bar, name: "Kneipe" },
      { id: "Bücherei", scene: Library, name: "Bücherei" },
      { id: "Hafen", scene: Harbor, name: "Hafen" },
      { id: "Café", scene: Cafe, name: "Café" },

      { id: "Outro", scene: Outro, name: "Outro" },

      { id: "AccusedWilma", scene: AccusedWilma, name: "AccusedWilma", next: "EndOfNovel"},
      { id: "AccusedGabi", scene: AccusedGabi, name: "AccusedGabi", next: "EndOfNovel"},
      { id: "AccusedUwe", scene: AccusedUwe, name: "AccusedUwe", next: "EndOfNovel"},
      { id: "AccusedElise", scene: AccusedElise, name: "AccusedElise", next: "EndOfNovel"},

      { id: "EndOfNovel", scene: EndOfNovel, name: "EndOfNovel" },
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
