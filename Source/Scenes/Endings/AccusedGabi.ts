namespace Application {
  export async function AccusedGabi(): ƒS.SceneReturn {
    console.log("Accused Gabi");

    // start background music
    ƒS.Sound.fade(sound.backgroundEndingGabi, 0.2, 3, true);

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));

    // play shock sound
    await ƒS.Sound.play(sound.shock, 0.6, false);

    await ƒS.Speech.tell(characters.lara, "Du hast das Geld gestohlen, Gabi!");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(15, 100));

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, ". . .");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Du hast ja recht.");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir so leid, aber ich habe das Geld geklaut.");

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Wie bitte?");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Nur, weil du mir das Geld nicht gegönnt hast?");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Nein, ach Quatsch.");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Entschuldige, das habe ich gestern wirklich nicht so gemeint.");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich war nur so aufgeregt.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich habe gehört, wie Wilma und Uwe darüber geredet haben, dass Wilma hohe Spielschulden hat.");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich . . .");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich fühle mich so schuldig, dass ich das nicht bemerkt habe.");
    await ƒS.Speech.tell(characters.gabi, "Ich hätte meine Tochter doch davor beschützen müssen!");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir so leid, Wilma.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Mama, ich wollte nicht, dass du davon erfährst!");

    // change wilmas pose to grumpy
    await changePose(characters.wilma, "grumpy", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Ich hätte das bestimmt wieder unter Kontrolle bekommen.");

    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Es tut mir wirklich leid, Elise!");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich habe aus dem Affekt gehandelt.");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Das Geld war so nahe und ich musste doch etwas tun.");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich selbst komme gerade so über die Runden.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Aber . . .");
    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich habe doch gesagt, dass ich helfen kann!");
    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Hätte ich das gewusst, hätte ich auch sofort geholfen!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Wisst ihr was?");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Wir packen das gemeinsam an!");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Und über deinen Diebstahl reden wir später nochmal, Gabi!");
    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Ja, das ist eine gute Idee!");
    await ƒS.Speech.tell(characters.uwe, "Wir greifen dir finanziell unter die Arme, Wilma.");
    await ƒS.Speech.tell(characters.uwe, "Und wir unterstützen dich dabei, aus der Spielsucht herauszukommen.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Oh nein, das kann ich nicht annehmen.");
    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Oh doch, das musst du!");
    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Was für eine tolle Idee!");
    await ƒS.Speech.tell(characters.gabi, "Ich helfe auch wo ich kann.");
    await ƒS.Speech.tell(characters.gabi, "Und das Geld bekommst du selbstverständlich zurück, Elise.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich wollte mich sowieso noch auf einen Nebenjob unten im Laden bewerben.");
    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Woow, ich weiß gar nicht, wie ich euch allen danken soll!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    // novel page ending
    await ƒS.Text.setClass("novelPage");
    await ƒS.Text.print("Gut gemacht, du hast Gabi als die richtige Täterin entlarvt,<br>auch wenn vielleicht aus einem anderen Grund als erwartet?<br>\
      Was wohl passiert wäre, wenn du jemand anderen angeklagt hättest?<br>\
      Beginne von vorne oder lade einen Spielstand, um es zu erfahren.\
      ");

    // stop background music
    ƒS.Sound.fade(sound.backgroundEndingGabi, 0, 3, false);

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