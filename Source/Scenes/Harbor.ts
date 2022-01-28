namespace Application {
  export async function Harbor(): ƒS.SceneReturn {
    console.log("Harbor");

    dataForSave.visitedHarbor = true;

    let text = {
      wilma: {
        T0000: "Hallo.",
      },
    };

    // Anzeigen von Background
    await ƒS.Location.show(locations.port);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show charakter wilma
    await ƒS.Character.show(characters.wilma, characters.wilma.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.wilma, text.wilma.T0000);

    await ƒS.Character.hide(characters.wilma);

    await ƒS.Character.show(characters.wilma, characters.wilma.pose.grumpy, ƒS.positionPercent(75, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.wilma, text.wilma.T0000);

    await ƒS.Character.hide(characters.wilma);

    await ƒS.Character.show(characters.wilma, characters.wilma.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.wilma, text.wilma.T0000);

    await ƒS.Character.hide(characters.wilma);

    await ƒS.Character.show(characters.wilma, characters.wilma.pose.laughing, ƒS.positionPercent(75, 100));
    await ƒS.update();

    await ƒS.Speech.tell(characters.wilma, text.wilma.T0000);

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    ƒS.Character.hideAll();
    await ƒS.update(1);

    //choose next location
    return "NextLocationChoice";
  }
}
