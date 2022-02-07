namespace Application {
    export async function AccusedWilma(): ƒS.SceneReturn {
      console.log("Accused Wilma");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Wilma! Du warst es!");
  
      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
    }
  }
  