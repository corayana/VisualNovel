namespace Application {
    export async function AccusedGabi(): ƒS.SceneReturn {
      console.log("Accused Gabi");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Gabi! Du warst es!");
  
      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
    }
  }
  