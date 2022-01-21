namespace Application {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: ""
  }


  window.addEventListener("load", start);
  
  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(gameMenuOptions, buttonFunctionalities, "gameMenu");
    let scenes: ƒS.Scenes = [
      // Scenen werden linear abgespielt

      //{ id: "Kapitel 2", scene: Scene, name: "Scene" },
      { scene: Intro, name: "Intro" },

      { scene: Bar, name: "Kneipe" },

      { scene: Library, name: "Bücherei" },

      { scene: Port, name: "Hafen" },

      { scene: Cafe, name: "Café" },

      { scene: Outro, name: "Outro" },

      // non-Linear: ID an Scene geben und dadurch Reihenfolge bestimmen

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}