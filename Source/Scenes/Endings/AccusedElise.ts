namespace Application {
  export async function AccusedElise(): ƒS.SceneReturn {
    console.log("Accused Elise");

    // start background music
    ƒS.Sound.fade(sound.backgroundEndingElise, 0.2, 3, true);

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));

    // play shock sound
    await ƒS.Sound.play(sound.shock, 0.6, false);

    await ƒS.Speech.tell(characters.lara, "Elise! Du warst es!");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(15, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ich?");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Warum sollte ich mein eigenes Preisgeld stehlen?");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Das ergibt doch gar keinen Sinn!");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Ich konnte es zuerst auch nicht glauben.");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Aber Wilma hat es mir recht plausibel erklärt:");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Du hast gestern verkündet mit dem Geld von der Insel wegzuziehen.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Aber ich glaube nicht, dass du das wirklich willst.");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Du liebst das Leben hier und die Leute . . .");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Du warst nur zu stolz, um einen Rückzieher zu machen.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(15, 100));

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Du hast recht.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ich will nicht weg von hier.");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Die Ankündigung gestern war nur eine Laune aus dem Affekt.");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ich war echt eifersüchtig.");
    await ƒS.Speech.tell(characters.elise, "Uwe hat gestern so viel mit Wilma getuschelt.");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ich wusste einfach nicht mehr, wo ich stehe.");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Aber einen Diebstahl habe ich deswegen nicht vorgetäuscht.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ach Elise, das macht mich so froh.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich dachte wirklich, dass du die Insel verlassen willst.");

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich hätte dir gestern fast meine Liebe gestanden.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Aber dann hast du die Ankündigung gemacht und dann habe ich mich nicht mehr getraut.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Aber jetzt bin ich mir sicher.");

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Hier, bitte nimm diesen Liebesbrief von mir an.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ohh . . .");
    await ƒS.Speech.tell(characters.elise, "Wow, Uwe!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Darauf habe ich so lange gewartet.");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ach wisst ihr was - Mir ist egal wer das Geld gestohlen hat, oder was damit passiert ist!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    await ƒS.Text.setClass("novelPage");
    await ƒS.Text.print("Wie schön, endlich konnten sich Elise und Uwe ihre Liebe gestehen.<br>\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");

    // stop background music
    ƒS.Sound.fade(sound.backgroundEndingElise, 0, 3, false);

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
