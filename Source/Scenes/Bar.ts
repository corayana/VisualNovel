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

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Hallo Uwe!");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Hallo Lara!");
    await ƒS.Speech.tell(characters.uwe, "Lang nicht gesehen.");
    await ƒS.Speech.tell(characters.uwe, "Wie war deine Reise?");

    await ƒS.Speech.tell(characters.lara, "Danke, bis auf die Fahrt mit dem Schiff war es super langweilig.");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Aber dafür war meine Ankunft war direkt sehr spannend!");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Das Preisgeld von Tante Elise wurde nämlich geklaut.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Oh nein!");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Dann hat sie es also doch getan . . .");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Wie meinst du das?");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Ähmm naja, also . . .");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Du musst versprechen, dass du es für dich behältst, ja?");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Wilma hat mir gestern erzählt, dass sie mit dem Gedanken spielt, die Spardose zu klauen.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Weißt du, Wilma hat es nicht gerade einfach.");
    await ƒS.Speech.tell(characters.uwe, "Ohne Vater aufzuwachsen war nicht leicht für sie.");
    await ƒS.Speech.tell(characters.uwe, "Mit ihrer Mutter Gabi streitet sie sehr oft.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Irgendwann hat sie das Spielen angefangen.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Glücksspiel, weißt du? Sie hat schnell viel Geld verloren.");
    await ƒS.Speech.tell(characters.uwe, "Aber sie kommt da einfach nicht mehr von alleine raus.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Niemand außer mir weiß davon.");
    await ƒS.Speech.tell(characters.uwe, "Noch nicht einmal Gabi.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Oha, das klingt ja gar nicht gut.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich habe ihr erst gestern Abend eine ziemliche Standpauke gehalten.");
    await ƒS.Speech.tell(characters.uwe, "Kurz danach hatte ich ein ziemlich schlechtes Gewissen.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Ich wollte ihr sagen, dass ich ihr helfen kann und sie unterstütze.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Aber sie meinte sie hat einen Plan und schaffe das selbst.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Wenn du mich fragst, hat Wilma das Geld gestohlen.");
    await ƒS.Speech.tell(characters.uwe, "Vor lauter Stolz muss sie dies als letzten Ausweg gesehen haben.");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Wow, das habe ich nicht erwartet.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Bitte behalte das für dich.");

    // change uwes pose to pensive
    await changePose(characters.uwe, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Wilma möchte bestimmt nicht, dass sich ihre Probleme herumsprechen.");
    await ƒS.Speech.tell(characters.uwe, "Ich weiß es ist nicht einfach, aber ich denke, wir sollten die Sache einfach ruhen lassen.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Früher oder später wird Wilma es Elise erzählen und das Geld bestimmt zurückzahlen.");
    await ƒS.Speech.tell(characters.uwe, "Sie ist ein herzensguter Mensch.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ja, sie ist immer so fröhlich und unbeschwert.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Sei nicht traurig.");
    await ƒS.Speech.tell(characters.uwe, "Wilma ist erwachsen und ich werde sie so gut ich kann unterstützen.");

    // change uwes pose to shocked
    await changePose(characters.uwe, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Wahnsinn, ich glaube, so viel habe ich noch nie geredet.");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Wenn du magst, hole ich dir noch ein Eis von hinten aus der Kühltruhe.");
    await ƒS.Speech.tell(characters.uwe, "Ich bin gleich zurück!");

    // sound footsteps
    ƒS.Sound.play(sound.barFootstepsFadeOut, 0.8, false);

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));

    // animate uwe leaving
    await ƒS.Character.animate(characters.uwe, characters.uwe.pose.neutral, from75ToOutside());

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Der kleine Tresor sieht ja interessant aus.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ich frage mich, was Uwe darin versteckt.");
    await ƒS.Speech.tell(characters.lara, "Ob ich wohl mal einen Blick hineinwerfen sollte?");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Vielleicht finde ich dort das Preisgeld?");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // COHICE look into safe
    let chooseActionOptions = {
      look: "Den Tresor öffnen",
      wait: "Auf Uwe warten",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.look:
        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Ich will versuchen, einen Blick hineinzuwerfen.");
        await ƒS.Speech.tell(characters.lara, "Schließlich ermittle ich gerade.");

        // animate lara going to the safe
        await ƒS.Character.animate(characters.lara, characters.lara.pose.neutral, from25To40());

        // change laras pose to pensive
        await changePose(characters.lara, "pensive", ƒS.positionPercent(40, 100));
        await ƒS.Speech.tell(characters.lara, "Hmm, ich brauche wohl einen Code, um den Tresor zu öffnen.");

        // change laras pose to laughing
        await changePose(characters.lara, "laughing", ƒS.positionPercent(40, 100));
        await ƒS.Speech.tell(characters.lara, "So vergesslich wie ich Uwe in Erinnerung habe, hat er ihn bestimmt irgendwo aufgeschrieben und in der Nähe abgelegt.");

        // change laras pose to suspicious
        await changePose(characters.lara, "suspicious", ƒS.positionPercent(40, 100));
        await ƒS.Speech.tell(characters.lara, "Wo könnte der Code wohl sein?");
        await ƒS.Speech.tell(characters.lara, "Vielleicht finde ich ihn in der Schublade hinter der Theke.");
        await ƒS.Speech.tell(characters.lara, "Hmm, da ist nichts.");
        await ƒS.Speech.tell(characters.lara, "Vielleicht hinter den Flaschen im Regal?");

        // change laras pose to friendly
        await changePose(characters.lara, "friendly", ƒS.positionPercent(40, 100));
        await ƒS.Speech.tell(characters.lara, "Tatsächlich, da ist er ja.");

        // hide lara
        ƒS.Character.hideAll();
        await ƒS.update(1);

        // show code
        await ƒS.Character.show(items.code, items.code.pose.default, ƒS.positionPercent(50, 50));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.lara, "Okay, den sollte ich mir kurz merken.");
        await ƒS.Speech.tell(characters.lara, "So, mal schauen, ob das funktioniert.");

        // hide code
        await ƒS.Character.hide(items.code);

        // show safe
        await ƒS.Character.show(items.safe, items.safe.pose.default, ƒS.positionPercent(50, 50));
        await ƒS.update(1);

        // input field for code
        await codeInput();
        async function codeInput(): Promise<void> {
          await ƒS.Speech.tell(characters.narrator, "Code eingeben: ", false);
          let code: string = await ƒS.Speech.getInput();
          if (code == "1469") {
            await ƒS.Speech.tell(characters.lara, "Na also.");
          } else {
            await ƒS.Speech.tell(characters.lara, "Das war der falsche Code.");
            await ƒS.Speech.tell(characters.lara, "Auf der Notiz von Uwe standen die Zahlen 1469.");
            await codeInput();
          }
        }

        // hide safe
        await ƒS.Character.hide(items.safe);

        // show loveletter
        await ƒS.Character.show(items.loveletter, items.loveletter.pose.default, ƒS.positionPercent(50, 50));
        await ƒS.update(1);

        await ƒS.Speech.tell(characters.lara, "Das ist ja interessant.");
        await ƒS.Speech.tell(characters.lara, "Uwe wollte Elise wohl seine Liebe mit diesem Liebesbrief gestehen.");
        await ƒS.Speech.tell(characters.lara, "Wieso er wohl so zerknittert ist? Ich frage mich, was damit passiert ist.");
        await ƒS.Speech.tell(characters.lara, "Ich lege den Brief besser wieder zurück.");

        await ƒS.Character.hide(items.loveletter);

        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(40, 100));

        await ƒS.Speech.tell(characters.lara, "Und jetzt den Tresor noch verschließen.");
        await ƒS.Speech.tell(characters.lara, ". . .");
        await ƒS.Speech.tell(characters.lara, "Ohh und da kommt Uwe auch schon wieder.");

        // animate lara going back
        await ƒS.Character.animate(characters.lara, characters.lara.pose.neutral, from40To25());

        break;

      case chooseActionOptions.wait:
        // change laras pose to pensive
        await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Nein, ich kann nicht einfach in die Privatsphäre von Uwe eingreifen.");

        // change laras pose to friendly
        await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Immerhin holt er mir gerade ein Eis.");

        // change laras pose to neutral
        await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
        await ƒS.Speech.tell(characters.lara, "Ich warte einfach, bis er wieder da ist.");

        // transition // TODO
        ƒS.Speech.clear();
        ƒS.Speech.hide();
        await ƒS.update(transitions.timefiller.duration, transitions.timefiller.alpha, transitions.timefiller.edge);

        break;
    }

    // sound footsteps
    ƒS.Sound.play(sound.barFootstepsFadeIn, 0.8, false);

    // animate uwe coming back
    ƒS.Character.animate(characters.uwe, characters.uwe.pose.neutral, fromOutsideTo75());
    await ƒS.Speech.tell(characters.uwe, "Soo, endlich habe ich die doofe klemmende Türe des Kühlfaches aufbekommen!");

    // change uwes pose to friendly
    await changePose(characters.uwe, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Bitteschön, hier dein Eis.");
    await ƒS.Speech.tell(characters.uwe, "Lass es dir schmecken.");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Dankeschön!");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Tante Elise hat mich gebeten, dich heute zum gemeinsamen Abendessen einzuladen.");
    await ƒS.Speech.tell(characters.lara, "Um 18:30 Uhr bei ihr im Café.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change uwes pose to blushed
    await changePose(characters.uwe, "blushed", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.uwe, "Ohh, tatsächlich?");
    await ƒS.Speech.tell(characters.uwe, "Da kann ich nicht nein sagen.");

    // change uwes pose to neutral
    await changePose(characters.uwe, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
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