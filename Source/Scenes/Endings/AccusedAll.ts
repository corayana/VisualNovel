namespace Application {
    export async function AccusedAll(): ƒS.SceneReturn {
      console.log("Accused All");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Ihr alle wart es!");

      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
    }
  }
  