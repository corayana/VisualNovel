namespace Application {
  export async function Outro(): ƒS.SceneReturn {
    console.log("Outro");

    if (dataForSave.triedToAccuseAll == false) {

      // start mysterious music
      ƒS.Sound.fade(sound.backgroundIntroMysterious, 0.2, 1, true);

      // show charakter lara
      await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(50, 100));
      await ƒS.update(1);

      // change laras pose to shocked
      await changePose(characters.lara, "shocked", ƒS.positionPercent(50, 100));
      await ƒS.Speech.tell(characters.lara, "Oha, es ist ja schon fast Abend!");

      // change laras pose to pensive
      await changePose(characters.lara, "pensive", ƒS.positionPercent(50, 100));
      await ƒS.Speech.tell(characters.lara, "Ich habe eine Menge Informationen gesammelt.");

      // change laras pose to friendly
      await changePose(characters.lara, "friendly", ƒS.positionPercent(50, 100));
      await ƒS.Speech.tell(characters.lara, "Am besten lasse ich mir das alles noch einmal durch den Kopf gehen, bevor ich beim gemeinsamen Abendessen den Dieb des Geldes entlarve.");

      ƒS.Sound.fade(sound.backgroundIntroMysterious, 0, 3, false);

      // sound ticking clock
      ƒS.Sound.play(sound.tickingClockLong, 1, false);

      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      ƒS.update(0);

      // show background
      await ƒS.Location.show(locations.outro);
      await ƒS.update(transitions.timefiller.duration, transitions.timefiller.alpha, transitions.timefiller.edge);

      // start exiting music
      ƒS.Sound.fade(sound.backgroundOutro, 0.2, 3, true);

      // novel page
      ƒS.Text.setClass("novelPage");
      await ƒS.Text.print("Elise, Uwe, Wilma, Gabi und Lara kommen im Café zum gemeinsamen Abendessen zusammen. Die Stimmung ist angespannt und zwischen oberflächlichen Gesprächen mustern sich die Anwesenden gegenseitig mit misstrauischen Blicken.");

      // show charakters
      await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(15, 100));
      await ƒS.update(0.5);
      await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(40, 100));
      await ƒS.update(0.5);
      await ƒS.Character.show(characters.uwe, characters.uwe.pose.neutral, ƒS.positionPercent(55, 100));
      await ƒS.update(0.5);
      await ƒS.Character.show(characters.wilma, characters.wilma.pose.neutral, ƒS.positionPercent(72, 100));
      await ƒS.update(0.5);
      await ƒS.Character.show(characters.gabi, characters.gabi.pose.neutral, ƒS.positionPercent(88, 100));
      await ƒS.update(0.5);

      // change laras pose to friendly
      await changePose(characters.lara, "friendly", ƒS.positionPercent(15, 100));
      await ƒS.Speech.tell(characters.lara, "Schön, dass ihr heute alle hierher gekommen seid!");
      await ƒS.Speech.tell(characters.lara, "Ich habe euch nicht ganz ohne Grund alle auf einmal hier eingeladen.");

      // change laras pose to shocked
      await changePose(characters.lara, "shocked", ƒS.positionPercent(15, 100));
      await ƒS.Speech.tell(characters.lara, "Wie ihr wisst, wurde gestern Abend das Preisgeld von 4000€ aus der Spardose von Tante Elise gestohlen.");

      // change laras pose to suspicious
      await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));
      await ƒS.Speech.tell(characters.lara, "Ich habe mit euch allen gesprochen und Motive und Beweise gesammelt.");

      // change laras pose to laughing
      await changePose(characters.lara, "laughing", ƒS.positionPercent(15, 100));
      await ƒS.Speech.tell(characters.lara, "Und nun werde ich offenbaren, wer von euch das Geld an sich genommen hat!");

    }
    else { }

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // CHOICE accuse Somebody
    let chooseActionOptions = {
      wilma: "Wilma beschuldigen",
      gabi: "Gabi beschuldigen",
      uwe: "Uwe beschuldigen",
      elise: "Elise beschuldigen",
      all: "Alle beschuldigen",
    };

    if (dataForSave.triedToAccuseAll) {
      delete chooseActionOptions.all;
    }

    // stop background music
    ƒS.Sound.fade(sound.backgroundOutro, 0, 3, false);

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