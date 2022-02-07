namespace Application {
    export async function AccusedUwe(): ƒS.SceneReturn {
      console.log("Accused Uwe");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Uwe! Du warst es!");
  
      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
    }
  }
  