namespace Application {
  export async function AccusedUwe(): ƒS.SceneReturn {
    console.log("Accused Uwe");

    // start background music
    ƒS.Sound.fade(sound.backgroundEndingUwe, 0.2, 3, true);

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));

    // play shock sound
    await ƒS.Sound.play(sound.shock, 0.6, false);

    await ƒS.Speech.tell(characters.lara, "Du bist der Dieb, Uwe.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Wie bitte?");
    await ƒS.Speech.tell(characters.uwe, "Wieso sollte ich das Geld gestohlen haben?");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Die Bar läuft gut und ich habe bei weitem keine Geldprobleme.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Geld ist nicht der Grund.");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Der wahre Grund ist die Liebe.");

    // Wenn in Kneipe Choice look ausgewählt wurde: await ƒS.Speech.tell(characters.lara, "Das weiß ich aus sicheren Quellen: Ich habe deinen Liebesbrief gefunden!");
    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Du wolltest nicht, dass Elise mit dem Geld die Insel verlässt!");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Außerdem wurde gestern gesehen, wie du an der Spardose herumgefummelt hast.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(15, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Aber . . .");
    await ƒS.Speech.tell(characters.elise, "Wie meinst du das?");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Uwe?");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Nein, so war es nicht.");
    await ƒS.Speech.tell(characters.uwe, ". . .");
    await ƒS.Speech.tell(characters.uwe, "Puh okay, vielleicht ist jetzt der Zeitpunkt gekommen, um es endlich zu gestehen:");

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich liebe dich, Elise.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Seitdem du hier bist, dreht sich mein ganzes Leben nur um dich.");

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich wollte es dir so gerne sagen, aber ich habe mich einfach nicht getraut.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Deshalb habe ich dir einen Liebesbrief geschrieben.");
    await ƒS.Speech.tell(characters.uwe, "Ich wollte ihn dir gestern geben.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Du warst nur so wütend auf mich, weil ich so viel Zeit mit Wilma verbracht habe.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich dachte es wäre eine gute Idee, den Brief in die Spardose zu dem Geld zu stecken, damit du ihn in Ruhe lesen kannst.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Aber dann hast du verkündet, die Insel zu verlassen.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Und da ist mir klar geworden, dass du meine Gefühle nicht erwiderst.");
    await ƒS.Speech.tell(characters.uwe, "Deshalb habe ich an der Dose herumgefummelt:");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich musste den Liebesbrief unbedingt wieder herausbekommen.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Oh Uwe.");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Du Dummerchen!");

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Natürlich erwidere ich deine Gefühle!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ich bin so froh, dass du das sagst.");

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Du hast mich gerade zum glücklichsten Menschen gemacht!");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Wer auch immer das Geld gestohlen hat: Es ist mir egal!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Es spielt keine Rolle mehr.");

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Dein Geständnis ist so viel mehr wert als Geld, Uwe!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    await ƒS.Text.setClass("novelPage");
    await ƒS.Text.print("Wer hätte damit gerechnet! Was für ein Happy End!<br>\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");

    // stop background music
    ƒS.Sound.fade(sound.backgroundEndingUwe, 0, 3, false);

    let finalDecisionOptions = {
      end: "Beenden",
      startAgain: "Nochmal spielen"
    };

    let finalDecision = await ƒS.Menu.getInput(finalDecisionOptions, "choice");

    switch (finalDecision) {
      case finalDecisionOptions.end:
        return EndOfNovel();
      case finalDecisionOptions.startAgain:
        return Intro();
    };

  }
}
