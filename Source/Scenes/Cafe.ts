namespace Application {
  export async function Cafe(): ƒS.SceneReturn {
    console.log("Visit Café");

    dataForSave.visitedCafe = true;

    // show background
    await ƒS.Location.show(locations.cafe);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show character elise
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    //choose next location
    return "NextLocationChoice";
  }
}
