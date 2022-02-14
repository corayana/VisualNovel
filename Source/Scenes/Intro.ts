namespace Application {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro");

    dataForSave.visitedBar = false;
    dataForSave.visitedCafe = false;
    dataForSave.visitedHarbor = false; 
    dataForSave.visitedLibrary = false; 

    // show background
    await ƒS.Location.show(locations.cafe);

    // start happy background music
    ƒS.Sound.fade(sound.backgroundIntroHappy, 0.2, 3, true);

    // transition
    await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.laughing, ƒS.positionPercent(25, 100));
    await ƒS.update(0.5);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Hallo Tante Elise!");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));

    // show character elise
    await ƒS.Character.show(characters.elise, characters.elise.pose.laughing, ƒS.positionPercent(75, 100));
    await ƒS.update(0.5);

    // dialog
    await ƒS.Speech.tell(characters.elise, "Hallo Lara, schön dich zu sehen!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Komm herein.");
    await ƒS.Speech.tell(characters.elise, "Stell deinen Koffer einfach an der Treppe ab und setz dich zu mir an die Theke.");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Heute ist zum Glück nicht allzu viel los im Café, dann können wir direkt ein bisschen quatschen.");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Was darf ich dir zu trinken anbieten?");
    await ƒS.Speech.tell(characters.elise, "Wasser, Früchtetee, Apfelsaft oder eine heiße Schokolade?");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // CHOICE drink
    let chooseDrinkOptions = {
      water: "Wasser",
      tea: "Früchtetee",
      applejuice: "Apfelsaft",
      hotChocolate: "Heiße Schokolade",
    };
    let chooseDrink = await ƒS.Menu.getInput(chooseDrinkOptions, "choice");

    // dialog
    await ƒS.Speech.tell(characters.elise, "Kommt sofort.");

    // animate elise going to grab a drink
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.animate(characters.elise, characters.elise.pose.neutral, from75To90());

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ich freue mich so sehr darauf die Herbstferien wieder bei dir verbringen zu dürfen!");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.elise, "Ich hoffe es wird dir nicht zu langweilig!");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(90, 100));
    await ƒS.Speech.tell(characters.elise, "Immerhin ist hier gerade nicht viel los.");
    await ƒS.Speech.tell(characters.elise, "Die Saison ist vorbei und die meisten Bewohner der Insel sind jetzt selbst auf dem Weg in den Urlaub.");
    await ƒS.Speech.tell(characters.elise, "Die Leute hier kann man aktuell an einer Hand abzählen.");

    // animate elise coming back
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.animate(characters.elise, characters.elise.pose.friendly, from90To75());

    // CHOICE result
    switch (chooseDrink) {
      case chooseDrinkOptions.water:
        await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Wasser.");
        await ƒS.Character.show(items.drink, items.drink.pose.water, ƒS.positionPercent(40, 100));
        break;
      case chooseDrinkOptions.tea:
        await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Früchtetee.");
        await ƒS.Character.show(items.drink, items.drink.pose.tea, ƒS.positionPercent(40, 100));
        break;
      case chooseDrinkOptions.applejuice:
        await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Apfelsaft.");
        await ƒS.Character.show(items.drink, items.drink.pose.applejuice, ƒS.positionPercent(40, 100));
        break;
      case chooseDrinkOptions.hotChocolate:
        await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist deine heiße Schokolade.");
        await ƒS.Character.show(items.drink, items.drink.pose.hotchocolate, ƒS.positionPercent(40, 100));
        break;
    }

    // dialog
    await ƒS.Speech.tell(characters.elise, "Möchtest du auch einen Cupcake?");

    await ƒS.Speech.tell(characters.lara, "Oh ja, sehr gerne!");

    await ƒS.Speech.tell(characters.elise, "Bitteschön.");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Hmm, lecker!");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Du bist wirklich die beste Konditorin der Welt!");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Haha, das ist lieb!");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Stell dir vor, ich habe dafür gestern tatsächlich einen Preis auf der kleinen Nachbarsinsel gewonnen.");
    await ƒS.Speech.tell(characters.elise, "„Bester Cupcake der Inselgruppe“ – Moment, ich hole ihn schnell.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    // animate elise leaving
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.animate(characters.elise, characters.elise.pose.friendly, from75ToOutside());

    // animate elise coming back
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.animate(characters.elise, characters.elise.pose.friendly, fromOutsideTo75());

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Hier: eine Spardose in Cupcake-Form mit einem Preisgeld von stolzen 4000€.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(0.5);

    // show cupcake money box 
    await ƒS.Character.show(items.cupcake, items.cupcake.pose.default, ƒS.positionPercent(50, 50));
    await ƒS.update(1);

    await new Promise(resolve => setTimeout(resolve, 3000));

    // hide cupcake money box
    await ƒS.Character.hide(items.cupcake);
    await ƒS.update(0.5);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.shocked, ƒS.positionPercent(25, 100));
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0.5);

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Wow!");

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Nicht schlecht, Tante Elise!");
    await ƒS.Speech.tell(characters.lara, "Das ist eine Menge Geld!");

    // stop happy background music
    ƒS.Sound.fade(sound.backgroundIntroHappy, 0, 3, false);

    // start mysterious sound
    ƒS.Sound.fade(sound.backgroundIntroMysterious, 0.2, 5, true);

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Aber huch - Die Spardose ist ja leer!");

    // play shock sound
    ƒS.Sound.play(sound.shock, 1, false);

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Wie leer?");
    await ƒS.Speech.tell(characters.elise, "Zeig mal!");
    await ƒS.Speech.tell(characters.elise, "…");
    await ƒS.Speech.tell(characters.elise, "Oh Schreck, du hast Recht!");
    await ƒS.Speech.tell(characters.elise, "Das ganze Geld ist weg.");
    await ƒS.Speech.tell(characters.elise, "Das kann doch gar nicht sein.");
    await ƒS.Speech.tell(characters.elise, "Jemand muss es gestohlen haben!");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Wer hätte das Preisgeld denn aus der Spardose an sich nehmen können?");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Heute hatte ich die Spardose den ganzen Morgen lang im Blick.");
    await ƒS.Speech.tell(characters.elise, "Da hat sich ihr niemand genähert.");
    await ƒS.Speech.tell(characters.elise, "Es muss also gestern Abend gewesen sein.");
    await ƒS.Speech.tell(characters.elise, "Wir haben zusammen auf meinen Gewinn angestoßen.");
    await ƒS.Speech.tell(characters.elise, "Das waren Uwe, Wilma, Gabi und ich.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Dann gibt es also drei Verdächtige.");
    await ƒS.Speech.tell(characters.lara, "Die Namen sagen mir noch etwas.");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Ja, du solltest sie alle von deinem letzten Urlaub hier auf der Insel kennen.");

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Das ist aber schon echt lange her!");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Magst du mir vielleicht nochmal eine kurze Vorstellung geben?");

    await ƒS.Speech.tell(characters.elise, "Na klar!");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Also, zum einen ist da Uwe.");
    await ƒS.Speech.tell(characters.elise, "Ihm gehört die kleine Kneipe der Insel.");
    await ƒS.Speech.tell(characters.elise, "Er ist sehr schüchtern und leise.");

    // change elises pose to blushed
    await changePose(characters.elise, "blushed", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Aber er hat das Herz am richtigen Fleck.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Wilma sollte dir ebenfalls noch bekannt sein.");
    await ƒS.Speech.tell(characters.elise, "Sie ist die junge Fischerin, die unten am Hafen ihren Stand hat.");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Sie ist immer fröhlich und gut gelaunt und ganz schön kreativ.");
    await ƒS.Speech.tell(characters.elise, "Ein echter Wirbelwind.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Und als letztes noch Gabi, Wilmas Mama.");
    await ƒS.Speech.tell(characters.elise, "Sie leitet unsere kleine Inselbücherei.");
    await ƒS.Speech.tell(characters.elise, "Sie wirkt immer ein wenig distanziert und sehr streng.");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Aber für uns alle ist sie der Fels in der Brandung.");
    await ƒS.Speech.tell(characters.elise, "Wilma ist ihr ein und alles. Für sie würde sie alles tun.");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Und der Dieb muss einer von ihnen gewesen sein?");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Ich kann es mir ehrlich gesagt nicht vorstellen.");
    await ƒS.Speech.tell(characters.elise, "Aber eine andere Erklärung gibt es nicht.");
    await ƒS.Speech.tell(characters.elise, "Gestern Abend hätte jeder von ihnen ganz einfach und unbemerkt das Geld aus der Spardose nehmen können.");
    await ƒS.Speech.tell(characters.elise, "Niemand sonst war seitdem in ihrer Nähe.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to pensive
    await changePose(characters.lara, "pensive", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Hmm, das vereinfacht die Suche nach dem Geld natürlich.");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Weißt du was, Tante Elise?");
    await ƒS.Speech.tell(characters.lara, "Ich werde in dem Fall ermitteln.");

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Ermitteln?");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to friendly
    await changePose(characters.lara, "friendly", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Ich werde alle Anwesenden von gestern befragen.");
    await ƒS.Speech.tell(characters.lara, "Und heute Abend werde ich den Fall auflösen.");
    await ƒS.Speech.tell(characters.lara, "Bei einem gemeinsamen Abendessen heute werde ich den Täter entlarven.");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.elise, "Ehm.");
    await ƒS.Speech.tell(characters.elise, "Ob das eine so gute Idee ist?");

    // change elises pose to friendly
    await changePose(characters.elise, "friendly", ƒS.positionPercent(75, 100));
    await ƒS.Speech.tell(characters.elise, "Naja, wieso eigentlich nicht.");
    await ƒS.Speech.tell(characters.elise, "Ich bin ja froh, wenn du dich nicht langweilen musst.");
    await ƒS.Speech.tell(characters.elise, "Und heute Abend wollte sowieso etwas besonders zum Essen zaubern.");
    await ƒS.Speech.tell(characters.elise, "Lade gerne alle zum Abendessen hier im Café ein!");

    // change laras pose to laughing
    await changePose(characters.lara, "laughing", ƒS.positionPercent(25, 100));
    await ƒS.Speech.tell(characters.lara, "Super, du bist die Beste!");
    await ƒS.Speech.tell(characters.lara, "Ich mache mich direkt auf den Weg.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    ƒS.Sound.fade(sound.backgroundIntroMysterious, 0, 3, false);

    //choose next location
    return "NextLocationChoice";

  }
}