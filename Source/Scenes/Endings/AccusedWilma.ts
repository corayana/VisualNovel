namespace Application {
  export async function AccusedWilma(): ƒS.SceneReturn {
    console.log("Accused Wilma");

    // start  background music
    ƒS.Sound.fade(sound.backgroundEndingWilma, 0.2, 3, true);

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));

    // play shock sound
    await ƒS.Sound.play(sound.shock, 0.6, false);

    await ƒS.Speech.tell(characters.lara, "Du bist die Diebin, Wilma.");

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Was?");

    // change wilmas pose to grumpy
    await changePose(characters.wilma, "grumpy", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Wie kommst du denn darauf?");
    
    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Du hast große Geldprobleme, Wilma.");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(15, 100));

    // if choice Harbor look: await ƒS.Speech.tell(characters.lara, "Ich habe deine Briefe mit den unbezahlten Rechnungen gesehen!");

    await ƒS.Speech.tell(characters.lara, "Uwe hat mir erzählt, dass du hohe Spielschulden hast.");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(15, 100));
    await ƒS.Speech.tell(characters.lara, "Und dass du gestern überlegt hast, das Geld aus der Spardose mitzunehmen.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(55, 100));
    await ƒS.Speech.tell(characters.uwe, "Aber Lara, du hast versprochen, dass du das für dich behältst!");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(55, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Jetzt wird mir alles klar!");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Das war also das Geheimnis von Uwe und dir.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change wilmas pose to pensive
    await changePose(characters.wilma, "pensive", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Früher oder später musste es ja rauskommen.");

    // change wilmas pose to grumpy
    await changePose(characters.wilma, "grumpy", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Ja, ich bin spielsüchtig und ja, ich habe große finanzielle Probleme.");

    // change wilmas pose to pensive
    await changePose(characters.wilma, "pensive", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Und ja, ich habe gestern ernsthaft mit dem Gedanken gespielt das Geld mitzunehmen.");

    // change wilmas pose to grumpy
    await changePose(characters.wilma, "grumpy", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Aber Uwe hat auf mich eingeredet und da habe ich gemerkt, wie dämlich die Idee ist.");

    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Ach Wilma, wieso hast du denn nie etwas gesagt?");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change wilmas pose to grumpy
    await changePose(characters.wilma, "grumpy", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Ich wollte nicht, dass meine Mutter davon erfährt.");

    // change wilmas pose to pensive
    await changePose(characters.wilma, "pensive", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Ich wollte sie nicht enttäuschen und habe ihr schon genug Sorgen im Leben bereitet.");

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Das Geld habe ich aber sicher nicht geklaut!");

    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ach meine kleine Wilma.");

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Du hast mir so viel Freude gebracht, viel mehr als alles andere, viel mehr als du es dir vorstellen kannst!");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich . . .");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich habe gehört, wie Uwe und du gestern über deine Spielschulden geredet habt.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, ". . .");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Und dann habe ich das Geld aus der Spardose geklaut.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Was? Du Mama?");

    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich wollte dir unbedingt helfen!");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Meine Tochter – Spielschulden!");

    // change gabis pose to grumpy
    await changePose(characters.gabi, "grumpy", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Da musste ich doch etwas tun!");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Und dann klaust du mein Preisgeld?");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Es tut mir wirklich leid, Elise!");
    await ƒS.Speech.tell(characters.gabi, "Ich habe aus dem Affekt gehandelt.");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Das Geld war direkt in Griffweite und ich musste doch etwas tun.");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich selbst komme nur gerade so über die Runden.");

    // change wilmas pose to shocked
    await changePose(characters.wilma, "shocked", ƒS.positionPercent(72, 100));
    await ƒS.Speech.tell(characters.wilma, "Aber . . .");

    // change wilmas pose to neutral
    await changePose(characters.wilma, "neutral", ƒS.positionPercent(72, 100));

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Unten im Laden wollte ich mich noch auf einen Nebenjob bewerben.");

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(88, 100));
    await ƒS.Speech.tell(characters.gabi, "Das Geld werde ich dir auf jeden Fall wieder zurückzahlen, Elise!");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Also gut.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(40, 100));
    await ƒS.Speech.tell(characters.elise, "Wenn ich das Geld mit der Zeit wieder zurückbekomme, soll es mir recht sein.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    await ƒS.Text.setClass("novelPage");
    await ƒS.Text.print("Obwohl du falsch getippt hast, konnte der Täter letztendlich entlarvt werden.<br>\
      Was wohl passiert wäre, wenn du eine andere Person angeklagt hättest?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.<br>\
      ");

    // stop background music
    ƒS.Sound.fade(sound.backgroundEndingWilma, 0, 3, false);

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
