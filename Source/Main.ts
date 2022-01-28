namespace Application {
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

  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(
      gameMenuOptions,
      buttonFunctionalities,
      "gameMenu"
    );

    // scenes (linear)
    let scenes: ƒS.Scenes = [
      // Scenen werden linear abgespielt

      // { id: "Id", scene: Scene, name: "Scene" },
      { scene: Intro, name: "Intro" },

      { id: "NextLocationChoice", scene: NextLocationChoice, name: "" },

      { id: "Kneipe", scene: Bar, name: "Kneipe" },

      { id: "Bücherei", scene: Library, name: "Bücherei" },

      { id: "Hafen", scene: Harbor, name: "Hafen" },

      { id: "Café", scene: Cafe, name: "Café" },

      { id: "Outro", scene: Outro, name: "Outro" },

      // non-Linear: ID an Scene geben und dadurch Reihenfolge bestimmen
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }
}
