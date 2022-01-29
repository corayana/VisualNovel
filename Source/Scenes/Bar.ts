namespace Application {
  export async function Bar(): ƒS.SceneReturn {
    console.log("Bar");

    dataForSave.visitedBar = true;

    let text = {
      uwe: {
        T0000: "hallo.",
      },
    };

    // show background
    await ƒS.Location.show(locations.bar);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show character uwe
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

    await ƒS.Character.hide(characters.uwe);

    await ƒS.Character.show(characters.uwe, characters.uwe.pose.pensive, ƒS.positionPercent(75, 100));
    await ƒS.update();

    ƒS.Inventory.add(items.bills);
    ƒS.Inventory.add(items.letter);
    await ƒS.Inventory.open();
    // Item hinzufügen zum Inventar

    await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

    // Auswahlmoeglichkeiten
    let firstDialogeElementOptions = {
      iSayYes: "Ja",
      iSayNo: "Nein",
    };

    let firstDialogeElement = await ƒS.Menu.getInput(firstDialogeElementOptions, "choice");

    switch (firstDialogeElement) {
      case firstDialogeElementOptions.iSayYes:
        await ƒS.Speech.tell(characters.uwe, "Vielen Dank, das kann ich jetzt gebrauchen!");
        break;
      case firstDialogeElementOptions.iSayNo:
        await ƒS.Speech.tell(characters.uwe, "Nein danke.");
        break;
    }

    await ƒS.Character.hide(characters.uwe);
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

    await ƒS.Character.hide(characters.uwe);
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.shocked, ƒS.positionPercent(75, 100));
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

    await ƒS.Character.hide(characters.uwe);
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.blushed, ƒS.positionPercent(75, 100));
    await ƒS.update(0);

    await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    //choose next location
    return "NextLocationChoice";
  }
}
