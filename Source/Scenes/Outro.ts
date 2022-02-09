namespace Application {
  export async function Outro(): ƒS.SceneReturn {
    console.log("Outro");

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(50, 100));
    await ƒS.update(1);

    // monolog lara
    await ƒS.Speech.tell(characters.lara, "Oha, es ist ja schon fast Abend!");
    await ƒS.Speech.tell(characters.lara, "Ich habe eine Menge Informationen gesammelt.");
    await ƒS.Speech.tell(characters.lara, "Am besten lasse ich mir das alles noch einmal durch den Kopf gehen, bevor ich beim gemeinsamen Abendessen den Dieb des Geldes entlarve.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    ƒS.update(0);

    // show background
    await ƒS.Location.show(locations.outro);

    // transition
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // Novel Page
    ƒS.Text.setClass("novelPage");
    await ƒS.Text.print("Elise, Uwe, Wilma, Gabi und Lara kommen im Café zum gemeinsamen Abendessen zusammen. Die Stimmung ist angespannt und zwischen oberflächlichen Gesprächen mustern sich die Anwesenden gegenseitig mit misstrauischen Blicken.");

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(15, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(40, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.neutral, ƒS.positionPercent(55, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.wilma, characters.wilma.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.5);
    await ƒS.Character.show(characters.gabi, characters.gabi.pose.neutral, ƒS.positionPercent(90, 100));
    await ƒS.update(0.5);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Schön, dass ihr heute alle hierher gekommen seid!");
    await ƒS.Speech.tell(characters.lara, "Ich habe euch nicht ganz ohne Grund alle auf einmal hier eingeladen.");
    await ƒS.Speech.tell(characters.lara, "Wie ihr wisst, wurde gestern Abend das Preisgeld von 4000€ aus der Spardose von Tante Elise gestohlen.");
    await ƒS.Speech.tell(characters.lara, "Ich habe mit euch allen gesprochen und Motive und Beweise gesammelt.");
    await ƒS.Speech.tell(characters.lara, "Und nun werde ich offenbaren, wer von euch das Geld an sich genommen hat!");

    // CHOICE accuse Somebody
    let chooseActionOptions = {
      wilma: "Wilma anklagen",
      gabi: "Gabi anklagen",
      uwe: "Uwe anklagen",
      elise: "Elise anklagen",
      all: "Alle anklagen",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.wilma:
        return "AccusedWilma";
      case chooseActionOptions.gabi:
        return "AccusedGabi";
      case chooseActionOptions.uwe:
        return "AccusedUwe";
      case chooseActionOptions.elise:
        return "AccusedElise";
      case chooseActionOptions.all:
        return "AccusedAll";
    }
  }
}