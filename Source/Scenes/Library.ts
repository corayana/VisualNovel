namespace Application {
  export async function Library(): ƒS.SceneReturn {
    console.log("Visit Library");

    dataForSave.visitedLibrary = true;

    // show background
    await ƒS.Location.show(locations.library);

    // transition sound
    ƒS.Sound.play(sound.transition, 0.5, false);

    // fade background sound
    ƒS.Sound.fade(sound.backgroundLibrary, 0.4, 1, true);

    // transition
    await ƒS.update(transitions.open.duration, transitions.open.alpha, transitions.open.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Hmm, keiner da?");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Im Nebenraum höre ich jemanden leise telefonieren.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Sollte ich lauschen oder mich lieber bemerkbar machen?");/*  */

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // COHICE listen to phone call
    let chooseActionOptions = {
      overhear: "Das Telefonat belauschen",
      makeNoticebale: "Sich bemerkbar machen",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.overhear:
        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Ein kleines bisschen lauschen hat noch niemandem geschadet.");
        await ƒS.Speech.tell(characters.lara, "Und vielleicht bekomme ich ja ein paar Hinweise zum Diebstahl.");

        // hide speech
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // animate lara going to the door
        await ƒS.Character.animate(characters.lara, characters.lara.pose.neutral, from25To80());

        await ƒS.Speech.tell(characters.gabi, ". . . Ja ja, ich werde das Geld so schnell wie möglich bezahlen . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Wissen sie, meine Tochter . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Sie weiß doch nichts davon . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Das ist alles nicht so einfach, wie Sie denken . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Ich muss jetzt auflegen . . .");

        // change laras pose to shocked
        await changePose(characters.lara, "shocked", ƒS.positionPercent(80, 100));
        await ƒS.Speech.tell(characters.lara, "Was hat das denn zu bedeuten?");
        await ƒS.Speech.tell(characters.lara, "Gabi scheint etwas zu verbergen.");

        // change laras pose to suspicious
        await changePose(characters.lara, "suspicious", ƒS.positionPercent(80, 100));
        await ƒS.Speech.tell(characters.lara, "Hat sie etwa Geldprobleme?");

        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(80, 100));

        // hide speech
        ƒS.Speech.clear();
        ƒS.Speech.hide();

        // animate lara going back
        await ƒS.Character.animate(characters.lara, characters.lara.pose.neutral, from80To25());
        break;

      case chooseActionOptions.makeNoticebale:
        // change laras pose to pensive
        await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Nein, fremde Telefongespräche belauschen gehört sich absolut nicht.");

        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Ich mache mich lieber bemerkbar.");
        await ƒS.Speech.tell(characters.lara, "HAAALLOOO! Gabi, bist du da?");
        break;
    }

    // play sound footsteps
    await ƒS.Sound.play(sound.libraryFootstepsFadeIn, 1, false);

    // show character gabi
    await ƒS.Character.animate(characters.gabi, characters.gabi.pose.neutral, fromOutsideTo75());

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.overhear:
        // change gabis pose to shocked
        await changePose(characters.gabi, "shocked", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Ach du meine Güte, du hast mich jetzt aber erschreckt.");
        await ƒS.Speech.tell(characters.gabi, "Ich habe gar nicht gehört, dass du hereingekommen bist.");

        // change gabis pose to neutral
        await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Ich musste noch ein wichtiges Telefonat führen.");

        // change gabis pose to sad
        await changePose(characters.gabi, "sad", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Du hast doch hoffentlich nicht allzu lange warten müssen?");

        // change laras pose to friendly
        await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Hallo Gabi!");

        // change laras pose to pensive
        await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Nein, nein, ähhhm, ich, also ähhm, ich bin gerade erst gekommen.");

        // change gabis pose to grumpy
        await changePose(characters.gabi, "grumpy", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Soso . . .");
        break;
      case chooseActionOptions.makeNoticebale:
        // change gabis pose to friendly
        await changePose(characters.gabi, "friendly", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Hallo, Lara!");
        await ƒS.Speech.tell(characters.gabi, "Schön, dass du vorbeischaust.");
        await ƒS.Speech.tell(characters.gabi, "Mensch, bist du groß geworden!");

        // change gabis pose to neutral
        await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));

        // change laras pose to friendly
        await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Hallo Gabi!");

        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Tut mir leid, dass ich Dein Telefonat unterbrochen habe, aber ich wollte nicht lauschen.");

        // change gabis pose to friendly
        await changePose(characters.gabi, "friendly", ƒS.positionPercent(75, 100));
        await ƒS.Speech.tell(characters.gabi, "Ich weiß es zu schätzen, dass du so ehrlich bist.");
        await ƒS.Speech.tell(characters.gabi, "Ich wollte das Gespräch sowieso gerade beenden.");
        break;
    }

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Wie kann ich dir denn helfen?");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Das Preisgeld von Tante Elise wurde gestohlen.");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ich wollte mal hören, ob du etwas Verdächtiges bemerkt hast.");

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Wie bitte?");
    await ƒS.Speech.tell(characters.gabi, "Die 4000€ Preisgeld von Elise wurden gestohlen?");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ja, gestern Abend bei eurem gemeinsamen Treffen bei Tante Elise!");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Oha.");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir leid, das sagen zu müssen.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Aber dann bin ich mir sehr sicher zu wissen, wer das gewesen ist.");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Tatsächlich?");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Wer denn?");

    // change gabis pose to grumpy
    await changePose(characters.gabi, "grumpy", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Uwe natürlich!");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Er hat sich den ganzen Abend sehr komisch verhalten.");

    // change gabis pose to grumpy
    await changePose(characters.gabi, "grumpy", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Zuerst habe ich mitbekommen, wie er Wilma ziemlich heruntergemacht hat.");
    await ƒS.Speech.tell(characters.gabi, "Dann muss er Elise ziemlich wütend gemacht haben.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Sie ist ihm den ganzen restlichen Abend aus dem Weg gegangen.");
    await ƒS.Speech.tell(characters.gabi, "Nachdem Elise verkündet hat, mit dem Geld die Insel zu verlassen, habe ich gesehen, wie er krampfhaft an der Spardose herumgefummelt hat.");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich hatte gar keine Zeit, ihn darauf anzusprechen.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Er hat die Party direkt im Anschluss sehr eilig verlassen.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Das ist ja interessant.");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Aber was wäre sein Motiv? Hat er Geldprobleme?");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Puh, ich weiß nicht so recht.");
    await ƒS.Speech.tell(characters.gabi, "Darüber habe ich mit ihm noch nie geredet.");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich vermute eher einen anderen Grund.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Weißt du, es ist folgendermaßen:");

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Der Gute ist schon lange in Elise verliebt.");
    await ƒS.Speech.tell(characters.gabi, "Seitdem sie den ersten Schritt auf die Insel gesetzt hat, hat er nur noch Augen für sie.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Nachdem sie gestern so plötzlich angekündigt hat, die Insel mit dem Geld verlassen zu wollen . . .");

    // change gabis pose to sad
    await changePose(characters.gabi, "sad", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich meine, das Geld zu stehlen war offensichtlich der klägliche Versuch, sie nicht zu verlieren.");
    await ƒS.Speech.tell(characters.gabi, "Er sah keinen anderen Ausweg, als ihr die Mittel zu nehmen, mit denen sie an einen anderen Ort gehen kann.");

    // change gabis pose to pensive
    await changePose(characters.gabi, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Wenn du mich fragst, ist Uwe der Dieb des Geldes.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Hmm, das klingt durchaus plausibel.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change gabis pose to shocked
    await changePose(characters.gabi, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Ach du liebe Güte, jetzt habe ich mich aber verquatscht.");
    await ƒS.Speech.tell(characters.gabi, "Wie schnell die Zeit vergeht.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Ich muss langsam los, Lara, ich habe noch etwas zu erledigen.");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Moment, eines noch:");
    await ƒS.Speech.tell(characters.lara, "Elise kocht heute Abend.");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Um 18:30 Uhr bei ihr im Café.");

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Was für eine schöne Einladung!");
    await ƒS.Speech.tell(characters.gabi, "Vielen Dank.");
    await ƒS.Speech.tell(characters.gabi, "Dann sehen wir uns wohl heute Abend nochmal.");

    // change gabis pose to neutral
    await changePose(characters.gabi, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Und mach dir nicht zu viele Gedanken wegen des Diebstahls.");
    await ƒS.Speech.tell(characters.gabi, "Vielleicht ist es besser, wenn wir es einfach ruhen lassen.");

    // change gabis pose to friendly
    await changePose(characters.gabi, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.gabi, "Uwe wird schon wissen was er tut und früher oder später bringt er das Geld bestimmt zurück.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(0);

    ƒS.Sound.fade(sound.backgroundLibrary, 0, 3, false);

    //choose next location
    return "NextLocationChoice";
  }
}
