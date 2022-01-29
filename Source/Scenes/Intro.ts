namespace Application {
  export async function Intro(): ƒS.SceneReturn {
    console.log("Intro");

    // show background
    await ƒS.Location.show(locations.cafe);
    // transition
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Hallo Tante Elise!");

    // show character elise
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.elise, "Hallo Lara, schön dich zu sehen!");

    await ƒS.Speech.tell(characters.elise, "Komm herein.");
    await ƒS.Speech.tell(characters.elise, "Stell deinen Koffer einfach an der Treppe ab und setz dich erstmal an die Theke.");
    await ƒS.Speech.tell(characters.elise, "Heute ist zum Glück nicht allzu viel los im Café, dann können wir direkt ein bisschen quatschen.");
    await ƒS.Speech.tell(characters.elise, "Was darf ich dir zu trinken anbieten?");
    await ƒS.Speech.tell(characters.elise, "Wasser, Früchtetee, Apfelsaft oder eine heiße Schokolade?");

    // CHOICE
    let chooseDrinkOptions = {
      water: "Wasser",
      tea: "Früchtetee",
      applejuice: "Apfelsaft",
      hotChocolate: "Heiße Schokolade",
    };
    let chooseDrink = await ƒS.Menu.getInput(chooseDrinkOptions, "choice");

    // dialog
    await ƒS.Speech.tell(characters.elise, "Kommt sofort.");

    await ƒS.Speech.tell(characters.lara, "Ich freue mich so sehr darauf die Herbstferien wieder bei dir verbringen zu dürfen!");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Ich hoffe es wird dir nicht zu langweilig!");
    await ƒS.Speech.tell(characters.elise, "Immerhin ist hier gerade nicht viel los.");
    await ƒS.Speech.tell(characters.elise, "Die Saison ist vorbei und die meisten Bewohner der Insel sind jetzt selbst auf dem Weg in den Urlaub.");
    await ƒS.Speech.tell(characters.elise, "Die Leute hier kann man aktuell an einer Hand abzählen.");

    // change elises pose to friendly
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    // CHOICE Ergebnis
    switch (chooseDrink) {
      case chooseDrinkOptions.water:
        await ƒS.Speech.tell(characters.elise, "Hier, dein Wasser.");
        break;
      case chooseDrinkOptions.tea:
        await ƒS.Speech.tell(characters.elise, "Hier, dein Früchtetee.");
        break;
      case chooseDrinkOptions.applejuice:
        await ƒS.Speech.tell(characters.elise, "Hier, dein Apfelsaft.");
        break;
      case chooseDrinkOptions.hotChocolate:
        await ƒS.Speech.tell(characters.elise, "Hier, deine heiße Schokolade.");
        break;
    }

    // dialog
    await ƒS.Speech.tell(characters.elise, "Möchtest du auch einen Cupcake?");

    await ƒS.Speech.tell(characters.lara, "Oh ja, sehr gerne!");

    await ƒS.Speech.tell(characters.elise, "Bitteschön.");

    await ƒS.Speech.tell(characters.lara, "Hmm, lecker!");
    await ƒS.Speech.tell(characters.lara, "Du bist wirklich die beste Konditorin der Welt!");

    // change elises pose to laughing

    await ƒS.Speech.tell(characters.elise, "Haha, das ist lieb!");

    // change elises pose to friendly

    await ƒS.Speech.tell(characters.elise, "Stell dir vor, ich habe dafür gestern tatsächlich einen Preis auf der kleinen Nachbarsinsel gewonnen.");
    await ƒS.Speech.tell(characters.elise, "„Bester Cupcake der Inselgruppe“ – Moment, ich hole ihn schnell.");
    await ƒS.Speech.tell(characters.elise, "…");
    await ƒS.Speech.tell(characters.elise, "Hier: eine Spardose in Cupcake-Form mit einem Preisgeld von stolzen 4000€.");
    
    // change laras pose to surprised
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.surprised, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);
    
    await ƒS.Speech.tell(characters.lara, "Wow!");

    // change laras pose to friendly
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Nicht schlecht, Tante Elise!");
    await ƒS.Speech.tell(characters.lara, "Das ist eine Menge Geld!");

    // change laras pose to surprised
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.surprised, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Aber huch - Die Spardose ist ja leer!");

    // change elises pose to shocked
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Wie leer?");
    await ƒS.Speech.tell(characters.elise, "Zeig mal!");
    await ƒS.Speech.tell(characters.elise, "…");
    await ƒS.Speech.tell(characters.elise, "Oh Schreck, du hast Recht!");
    await ƒS.Speech.tell(characters.elise, "Das ganze Geld ist weg.");
    await ƒS.Speech.tell(characters.elise, "Das kann doch gar nicht sein.");
    await ƒS.Speech.tell(characters.elise, "Jemand muss es gestohlen haben!");

    // change laras pose to suspicious
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.suspicious, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Wer hätte das Preisgeld denn aus der Spardose an sich nehmen können?");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Heute hatte ich die Spardose den ganzen Morgen lang im Blick.");
    await ƒS.Speech.tell(characters.elise, "Da hat sich ihr niemand genähert.");
    await ƒS.Speech.tell(characters.elise, "Es muss also gestern Abend gewesen sein.");
    await ƒS.Speech.tell(characters.elise, "Wir haben zusammen auf meinen Gewinn angestoßen.");
    await ƒS.Speech.tell(characters.elise, "Das waren Uwe, Wilma, Gabi und ich.");

    await ƒS.Speech.tell(characters.lara, "Dann gibt es also drei Verdächtige.");
    await ƒS.Speech.tell(characters.lara, "Die Namen sagen mir noch etwas.");

    await ƒS.Speech.tell(characters.elise, "Ja, du solltest sie alle von deinem letzten Urlaub hier auf der Insel kennen.");

    // change laras pose to neutral
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Das ist aber schon echt lange her!");
    await ƒS.Speech.tell(characters.lara, "Magst du mir vielleicht nochmal eine kurze Vorstellung geben?");

    await ƒS.Speech.tell(characters.elise, "Na klar!");
    await ƒS.Speech.tell(characters.elise, "Also, zum einen ist da Uwe.");
    await ƒS.Speech.tell(characters.elise, "Ihm gehört die kleine Kneipe unten am Wasser.");
    await ƒS.Speech.tell(characters.elise, "Er ist sehr schüchtern und leise.");

    // change elises pose to blushed
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.blushed, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Aber er hat das Herz am richtigen Fleck.");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Wilma sollte dir ebenfalls noch bekannt sein.");
    await ƒS.Speech.tell(characters.elise, "Sie ist die junge Fischerin, die unten am Hafen ihren Stand hat.");
    
    // change elises pose to friendly
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Sie ist immer fröhlich und gut gelaunt und ganz schön kreativ.");
    await ƒS.Speech.tell(characters.elise, "Ein echter Wirbelwind.");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Und als letztes noch Gabi, Wilmas Mama.");
    await ƒS.Speech.tell(characters.elise, "Sie leitet unsere kleine Inselbücherei.");
    await ƒS.Speech.tell(characters.elise, "Sie wirkt immer ein wenig distanziert und sehr streng.");
    
    // change elises pose to friendly
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Aber sie ist mit Abstand am Längsten auf der Insel und unser Fels in der Brandung.");
    await ƒS.Speech.tell(characters.elise, "Sie hat für alle einen guten Rat.");

    // change laras pose to suspicious
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.suspicious, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Und der Dieb muss einer von ihnen gewesen sein?");

    // change elises pose to shocked
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Ich kann es mir ehrlich gesagt nicht vorstellen.");
    await ƒS.Speech.tell(characters.elise, "Aber eine andere Erklärung gibt es nicht.");
    await ƒS.Speech.tell(characters.elise, "Gestern Abend hätte jeder von ihnen ganz einfach und unbemerkt das Geld aus der Spardose nehmen können.");
    await ƒS.Speech.tell(characters.elise, "Niemand sonst war seitdem in ihrer Nähe.");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Hmm, das vereinfacht die Suche nach dem Geld natürlich.");

    // change laras pose to friendly
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Weißt du was, Tante Elise?");
    await ƒS.Speech.tell(characters.lara, "Ich werde in dem Fall ermitteln.");

    // change elises pose to shocked
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Ermitteln?");

    await ƒS.Speech.tell(characters.lara, "Ich werde alle Anwesenden von gestern befragen.");
    await ƒS.Speech.tell(characters.lara, "Und heute Abend werde ich den Fall auflösen.");
    await ƒS.Speech.tell(characters.lara, "Bei einem gemeinsamen Abendessen heute werde ich den Täter entlarven.");

    // change elises pose to neutral
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Ehm.");
    await ƒS.Speech.tell(characters.elise, "Ob das eine so gute Idee ist?");

    // change laras pose to neutral
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    // change elises pose to friendly
    await ƒS.Character.hide(characters.elise);
    await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.elise, "Naja, wieso eigentlich nicht.");
    await ƒS.Speech.tell(characters.elise, "Ich bin ja froh, wenn du dich nicht langweilen musst.");
    await ƒS.Speech.tell(characters.elise, "Und heute Abend wollte sowieso etwas besonders zum Essen zaubern.");
    await ƒS.Speech.tell(characters.elise, "Lade gerne alle zum Abendessen hier im Café ein!");

    // change laras pose to friendly
    await ƒS.Character.hide(characters.lara);
    await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
    await ƒS.update(0.2);

    await ƒS.Speech.tell(characters.lara, "Super, du bist die Beste!");
    await ƒS.Speech.tell(characters.lara, "Ich mache mich direkt auf den Weg.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    //choose next location
    return "NextLocationChoice";
  }
}
