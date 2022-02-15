namespace Application {
    export async function AccusedAll(): ƒS.SceneReturn {
      console.log("Accused All");

      dataForSave.triedToAccuseAll = true;
  
      await ƒS.Text.print("Moment mal!<br>\
      Wir sind hier doch nicht im Orient Express!<br>\
      Diese Anschuldigung ist doch etwas weit her geholt.<br>\
      Probiere das besser noch einmal.\
      ");

      return "Outro";

    }
  }
  