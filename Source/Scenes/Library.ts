namespace Application {
  export async function Library(): ƒS.SceneReturn {
    console.log("Visit Library");

    dataForSave.visitedLibrary = true;

    // show background
    await ƒS.Location.show(locations.library);

    // sound
    ƒS.Sound.fade(sound.backgroundLibrary, 1, 1, true);

    // transition
    await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);


    //monolog
    await ƒS.Speech.tell(characters.lara, "Hmm, keiner da?");
    await ƒS.Speech.tell(characters.lara, "Im Nebenraum höre ich jemanden leise telefonieren.");
    await ƒS.Speech.tell(characters.lara, "Sollte ich lauschen oder mich lieber bemerkbar machen?");

    // COHICE listen to phone call
    let chooseActionOptions = {
      overhear: "Telefonat belauschen",
      makeNoticebale: "Bemerkbar machen",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.overhear:
        await ƒS.Speech.tell(characters.lara, "Ein kleines bisschen lauschen hat noch niemandem geschadet.");
        await ƒS.Speech.tell(characters.lara, "Und vielleicht bekomme ich ja ein paar Hinweise zum Diebstahl.");
        await ƒS.Speech.tell(characters.gabi, ". . . Ja ja, ich werde das Geld so schnell wie möglich bezahlen . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Wissen sie, meine Tochter . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Sie weiß doch nichts davon . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Das ist alles nicht so einfach, wie Sie denken . . .");
        await ƒS.Speech.tell(characters.gabi, ". . . Ich muss jetzt auflegen . . .");
        await ƒS.Speech.tell(characters.lara, "Was hat das denn zu bedeuten?");
        await ƒS.Speech.tell(characters.lara, "Gabi scheint etwas zu verbergen.");
        await ƒS.Speech.tell(characters.lara, "Hat sie etwa Geldprobleme?");
        break;
      case chooseActionOptions.makeNoticebale:
        await ƒS.Speech.tell(characters.lara, "Nein, fremde Telefongespräche belauschen gehört sich absolut nicht.");
        await ƒS.Speech.tell(characters.lara, "Ich mache mich lieber bemerkbar.");
        await ƒS.Speech.tell(characters.lara, "HAAALLOOO! Gabi, bist du da?");
        break;
    }
    
    // show character gabi
    await ƒS.Character.show(characters.gabi, characters.gabi.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.overhear:
        await ƒS.Speech.tell(characters.gabi, "Ach du meine Güte, du hast mich jetzt aber erschreckt.");
        await ƒS.Speech.tell(characters.gabi, "Ich habe gar nicht gehört, dass du hereingekommen bist.");
        await ƒS.Speech.tell(characters.gabi, "Ich musste noch ein wichtiges Telefonat führen.");
        await ƒS.Speech.tell(characters.gabi, "Du hast doch hoffentlich nicht allzu lange warten müssen?");
        await ƒS.Speech.tell(characters.lara, "Hallo Gabi!");
        await ƒS.Speech.tell(characters.lara, "Nein, nein, ähhhm, ich, also ähhm, ich bin gerade erst gekommen.");
        await ƒS.Speech.tell(characters.gabi, "Soso . . .");
        break;
      case chooseActionOptions.makeNoticebale:
        await ƒS.Speech.tell(characters.gabi, "Hallo, Lara!");
        await ƒS.Speech.tell(characters.gabi, "Schön, dass du vorbeischaust.");
        await ƒS.Speech.tell(characters.gabi, "Mensch, bist du groß geworden!");
        await ƒS.Speech.tell(characters.lara, "Hallo Gabi!");
        await ƒS.Speech.tell(characters.lara, "Tut mir leid, dass ich Dein Telefonat unterbrochen habe, aber ich wollte nicht lauschen.");
        await ƒS.Speech.tell(characters.gabi, "Ich weiß es zu schätzen, dass du so ehrlich bist.");
        await ƒS.Speech.tell(characters.gabi, "Ich wollte das Gespräch sowieso gerade beenden.");
        break;
    }

    //dialog
    await ƒS.Speech.tell(characters.gabi, "Wie kann ich dir denn helfen?");

    await ƒS.Speech.tell(characters.lara, "Das Preisgeld von Tante Elise wurde gestohlen.");
    await ƒS.Speech.tell(characters.lara, "Ich wollte mal hören, ob du etwas Verdächtiges bemerkt hast.");

    await ƒS.Speech.tell(characters.gabi, "Wie bitte?");
    await ƒS.Speech.tell(characters.gabi, "Die 4000€ Preisgeld von Elise wurden gestohlen?");

    await ƒS.Speech.tell(characters.lara, "Ja, gestern Abend bei eurem gemeinsamen Treffen bei Tante Elise!");

    await ƒS.Speech.tell(characters.gabi, "Oha.");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir leid, das sagen zu müssen.");
    await ƒS.Speech.tell(characters.gabi, "Aber dann bin ich mir sehr sicher zu wissen, wer das gewesen ist.");

    await ƒS.Speech.tell(characters.lara, "Tatsächlich?");
    await ƒS.Speech.tell(characters.lara, "Wer denn?");

    await ƒS.Speech.tell(characters.gabi, "Uwe natürlich!");
    await ƒS.Speech.tell(characters.gabi, "Er hat sich den ganzen Abend sehr komisch verhalten.");
    await ƒS.Speech.tell(characters.gabi, "Zuerst habe ich mitbekommen, wie er Wilma ziemlich heruntergemacht hat.");
    await ƒS.Speech.tell(characters.gabi, "Dann muss er Elise ziemlich wütend gemacht haben.");
    await ƒS.Speech.tell(characters.gabi, "Sie ist ihm den ganzen restlichen Abend aus dem Weg gegangen.");
    await ƒS.Speech.tell(characters.gabi, "Nachdem Elise verkündet hat, mit dem Geld die Insel zu verlassen, habe ich gesehen, wie er krampfhaft an der Spardose herumgefummelt hat.");
    await ƒS.Speech.tell(characters.gabi, "Ich hatte gar keine Zeit, ihn darauf anzusprechen.");
    await ƒS.Speech.tell(characters.gabi, "Er hat die Party direkt im Anschluss sehr eilig verlassen.");

    await ƒS.Speech.tell(characters.lara, "Das ist ja interessant.");
    await ƒS.Speech.tell(characters.lara, "Aber was wäre sein Motiv? Hat er Geldprobleme?");

    await ƒS.Speech.tell(characters.gabi, "Puh, ich weiß nicht so recht.");
    await ƒS.Speech.tell(characters.gabi, "Darüber habe ich mit ihm noch nie geredet.");
    await ƒS.Speech.tell(characters.gabi, "Ich vermute eher einen anderen Grund.");
    await ƒS.Speech.tell(characters.gabi, "Weißt du, es ist folgendermaßen:");
    await ƒS.Speech.tell(characters.gabi, "Der Gute ist schon lange in Elise verliebt.");
    await ƒS.Speech.tell(characters.gabi, "Seitdem sie den ersten Schritt auf die Insel gesetzt hat, hat er nur noch Augen für sie.");
    await ƒS.Speech.tell(characters.gabi, "Nachdem sie gestern so plötzlich angekündigt hat, die Insel mit dem Geld verlassen zu wollen . . .");
    await ƒS.Speech.tell(characters.gabi, "Ich meine, das Geld zu stehlen war offensichtlich der klägliche Versuch, sie nicht zu verlieren.");
    await ƒS.Speech.tell(characters.gabi, "Er sah keinen anderen Ausweg, als ihr die Mittel zu nehmen, mit denen sie an einen anderen Ort gehen kann.");
    await ƒS.Speech.tell(characters.gabi, "Wenn du mich fragst, ist Uwe der Dieb des Geldes.");

    await ƒS.Speech.tell(characters.lara, "Hmm, das klingt durchaus plausibel.");

    await ƒS.Speech.tell(characters.gabi, "Ach du liebe Güte, jetzt habe ich mich aber verquatscht.");
    await ƒS.Speech.tell(characters.gabi, "Wie schnell die Zeit vergeht.");
    await ƒS.Speech.tell(characters.gabi, "Ich muss langsam los, Lara, ich habe noch etwas zu erledigen.");

    await ƒS.Speech.tell(characters.lara, "Moment, eines noch:");
    await ƒS.Speech.tell(characters.lara, "Elise kocht heute Abend.");
    await ƒS.Speech.tell(characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");
    await ƒS.Speech.tell(characters.lara, "Um 18:30 Uhr bei ihr im Café.");

    await ƒS.Speech.tell(characters.gabi, "Was für eine schöne Einladung!");
    await ƒS.Speech.tell(characters.gabi, "Vielen Dank.");
    await ƒS.Speech.tell(characters.gabi, "Dann sehen wir uns wohl heute Abend nochmal.");
    await ƒS.Speech.tell(characters.gabi, "Und mach dir nicht zu viele Gedanken wegen des Diebstahls.");
    await ƒS.Speech.tell(characters.gabi, "Vielleicht ist es besser, wenn wir es einfach ruhen lassen.");
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
