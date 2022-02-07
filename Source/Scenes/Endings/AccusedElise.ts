namespace Application {
    export async function AccusedElise(): ƒS.SceneReturn {
      console.log("Accused Elise");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Elise! Du warst es!");

  
      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
    }
  }
  