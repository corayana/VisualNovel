namespace Application {
  export async function Bar(): ƒS.SceneReturn {
    console.log("Visit Bar");

    dataForSave.visitedBar = true;

    // show background
    await ƒS.Location.show(locations.bar);

    // sound
    ƒS.Sound.fade(sound.backgroundBar, 0.2, 3, true);

    // background transition
    await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show character uwe
    await ƒS.Character.show(characters.uwe, characters.uwe.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Hallo Uwe!");

    await ƒS.Speech.tell(characters.uwe, "Hallo Lara!");

    await ƒS.Speech.tell(characters.uwe, "Lang nicht gesehen.");
    await ƒS.Speech.tell(characters.uwe, "Wie war deine Reise?");

    await ƒS.Speech.tell(characters.lara, "Danke, bis auf die Fahrt mit dem Schiff war es super langweilig.");
    await ƒS.Speech.tell(characters.lara, "Aber dafür war meine Ankunft war direkt sehr spannend!");
    await ƒS.Speech.tell(characters.lara, "Das Preisgeld von Tante Elise wurde nämlich geklaut.");

    await ƒS.Speech.tell(characters.uwe, "Oh nein!");
    await ƒS.Speech.tell(characters.uwe, "Dann hat sie es also doch getan . . .");

    await ƒS.Speech.tell(characters.lara, "Wie meinst du das?");

    await ƒS.Speech.tell(characters.uwe, "Ähmm naja, also . . .");
    await ƒS.Speech.tell(characters.uwe, "Du musst versprechen, dass du es für dich behältst, ja?");
    await ƒS.Speech.tell(characters.uwe, "Wilma hat mir gestern erzählt, dass sie mit dem Gedanken spielt, die Spardose zu klauen.");
    await ƒS.Speech.tell(characters.uwe, "Weißt du, Wilma hat es nicht gerade einfach.");
    await ƒS.Speech.tell(characters.uwe, "Ohne Vater aufzuwachsen war nicht leicht für sie.");
    await ƒS.Speech.tell(characters.uwe, "Mit ihrer Mutter Gabi streitet sie sehr oft.");
    await ƒS.Speech.tell(characters.uwe, "Irgendwann hat sie das Spielen angefangen.");
    await ƒS.Speech.tell(characters.uwe, "Glücksspiel, weißt du? Sie hat schnell viel Geld verloren.");
    await ƒS.Speech.tell(characters.uwe, "Aber sie kommt da einfach nicht mehr von alleine raus.");
    await ƒS.Speech.tell(characters.uwe, "Niemand außer mir weiß davon.");
    await ƒS.Speech.tell(characters.uwe, "Noch nicht einmal Gabi.");

    await ƒS.Speech.tell(characters.lara, "Oha, das klingt ja gar nicht gut.");

    await ƒS.Speech.tell(characters.uwe, "Ich habe ihr erst gestern Abend eine ziemliche Standpauke gehalten.");
    await ƒS.Speech.tell(characters.uwe, "Kurz danach hatte ich ein ziemlich schlechtes Gewissen.");
    await ƒS.Speech.tell(characters.uwe, "Ich wollte ihr sagen, dass ich ihr helfen kann und sie unterstütze.");
    await ƒS.Speech.tell(characters.uwe, "Aber sie meinte sie hat einen Plan und schaffe das selbst.");
    await ƒS.Speech.tell(characters.uwe, "Wenn du mich fragst, hat Wilma das Geld gestohlen.");
    await ƒS.Speech.tell(characters.uwe, "Vor lauter Stolz muss sie dies als letzten Ausweg gesehen haben.");

    await ƒS.Speech.tell(characters.lara, "Wow, das habe ich nicht erwartet.");

    await ƒS.Speech.tell(characters.uwe, "Bitte behalte das für dich.");
    await ƒS.Speech.tell(characters.uwe, "Wilma möchte bestimmt nicht, dass sich ihre Probleme herumsprechen.");
    await ƒS.Speech.tell(characters.uwe, "Ich weiß es ist nicht einfach, aber ich denke, wir sollten die Sache einfach ruhen lassen.");
    await ƒS.Speech.tell(characters.uwe, "Früher oder später wird Wilma es Elise erzählen und das Geld bestimmt zurückzahlen.");
    await ƒS.Speech.tell(characters.uwe, "Sie ist ein herzensguter Mensch.");

    await ƒS.Speech.tell(characters.lara, "Ja, sie ist immer so fröhlich und unbeschwert.");

    await ƒS.Speech.tell(characters.uwe, "Sei nicht traurig.");
    await ƒS.Speech.tell(characters.uwe, "Wilma ist erwachsen und ich werde sie so gut ich kann unterstützen.");
    await ƒS.Speech.tell(characters.uwe, "Wahnsinn, ich glaube, so viel habe ich noch nie geredet.");
    await ƒS.Speech.tell(characters.uwe, "Wenn du magst, hole ich dir noch ein Eis von hinten aus der Kühltruhe.");
    await ƒS.Speech.tell(characters.uwe, "Ich bin gleich zurück!");

    await ƒS.Speech.tell(characters.lara, "Der kleine Tresor sieht ja interessant aus.");
    await ƒS.Speech.tell(characters.lara, "Ich frage mich, was Uwe darin versteckt.");
    await ƒS.Speech.tell(characters.lara, "Ob ich wohl mal einen Blick hineinwerfen sollte?");
    await ƒS.Speech.tell(characters.lara, "Vielleicht finde ich dort das Preisgeld?");

    // COHICE look into safe
    let chooseActionOptions = {
      look: "Versuchen, den Tresor zu öffnen",
      wait: "Die Finger vom Tresor lassen",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.look:
        await ƒS.Speech.tell(characters.lara, "Ich will versuchen, einen Blick hineinzuwerfen.");
        await ƒS.Speech.tell(characters.lara, "Schließlich ermittle ich gerade.");
        await ƒS.Speech.tell(characters.lara, "Hmm, ich brauche wohl einen Code, um den Tresor zu öffnen.");
        await ƒS.Speech.tell(characters.lara, "So vergesslich wie ich Uwe in Erinnerung habe, hat er ihn bestimmt irgendwo aufgeschrieben und in der Nähe abgelegt.");
        await ƒS.Speech.tell(characters.lara, "Wo könnte der Code wohl sein?");
        await ƒS.Speech.tell(characters.lara, "Vielleicht finde ich ihn in der Schublade hinter der Theke.");
        await ƒS.Speech.tell(characters.lara, "Hmm, da ist nichts.");
        await ƒS.Speech.tell(characters.lara, "Vielleicht hinter den Flaschen im Regal?");
        await ƒS.Speech.tell(characters.lara, "Tatsächlich, da ist er ja.");

        //

        await ƒS.Speech.tell(characters.lara, "So, mal schauen, ob das funktioniert.");

        // Input

        await ƒS.Speech.tell(characters.lara, "Das ist ja interessant.");
        await ƒS.Speech.tell(characters.lara, "Uwe wollte Elise wohl seine Liebe mit diesem Liebesbrief gestehen.");
        await ƒS.Speech.tell(characters.lara, "Wieso er wohl so zerknittert ist? Ich frage mich, was damit passiert ist.");
        await ƒS.Speech.tell(characters.lara, "Ich lege den Brief besser wieder zurück.");
        await ƒS.Speech.tell(characters.lara, "Und jetzt den Tresor noch verschließen.");
        await ƒS.Speech.tell(characters.lara, ". . .");
        await ƒS.Speech.tell(characters.lara, "Ohh und da kommt Uwe auch schon wieder.");
        break;
      case chooseActionOptions.wait:
        await ƒS.Speech.tell(characters.lara, "Nein, ich kann nicht einfach in die Privatsphäre von Uwe eingreifen.");
        await ƒS.Speech.tell(characters.lara, "Immerhin holt er mir gerade ein Eis.");
        await ƒS.Speech.tell(characters.lara, "Ich warte einfach, bis er wieder da ist.");
        break;
    }

    // dialog
    await ƒS.Speech.tell(characters.uwe, "Soo, endlich habe ich die doofe klemmende Türe des Kühlfaches aufbekommen!");
    await ƒS.Speech.tell(characters.uwe, "Bitteschön, hier dein Eis.");
    await ƒS.Speech.tell(characters.uwe, "Lass es dir schmecken.");

    await ƒS.Speech.tell(characters.lara, "Dankeschön!");
    await ƒS.Speech.tell(characters.lara, "Tante Elise hat mich gebeten, dich heute zum gemeinsamen Abendessen einzuladen.");
    await ƒS.Speech.tell(characters.lara, "Um 18:30 Uhr bei ihr im Café.");

    await ƒS.Speech.tell(characters.uwe, "Ohh, tatsächlich? *wird rot*");
    await ƒS.Speech.tell(characters.uwe, "Da kann ich nicht nein sagen.");

    await ƒS.Speech.tell(characters.lara, "Super, dann geh ich mal.");
    await ƒS.Speech.tell(characters.lara, "Bis heute Abend!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    ƒS.Sound.fade(sound.backgroundBar, 0, 3, false);

    // choose next location
    return "NextLocationChoice";

  }
}