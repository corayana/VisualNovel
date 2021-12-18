namespace Template {

  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  export let dataForSave = {
    nameProtagonist: ""
  }


  window.addEventListener("load", start);
  
  function start(_event: Event): void {
    // Menü
    gameMenu = ƒS.Menu.create(inGameMenu, buttonFunctionalities, "gameMenu");
    let scenes: ƒS.Scenes = [
      // Scenen werden linear abgespielt

      //{ id: "Kapitel 2", scene: Scene, name: "Scene" },

      { scene: Introduction, name: "Introduction" },

      // non-Linear: ID an Scene geben und dadurch Reihenfolge bestimmen

    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
  }

}