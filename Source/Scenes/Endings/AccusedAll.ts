namespace Application {
    export async function AccusedAll(): ƒS.SceneReturn {
      console.log("Accused All");

      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
      await ƒS.Text.print("Moment mal! Wir sind hier doch nicht im Orient Express!\
      Wähle nochmal neu: \
      ");

    }
  }
  