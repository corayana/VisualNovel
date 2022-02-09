namespace Application {
  export async function AccusedGabi(): ƒS.SceneReturn {
    console.log("Accused Gabi");

    // dialog
    await ƒS.Speech.tell(characters.lara, "Du hast das Geld gestohlen, Gabi!");

    await ƒS.Speech.tell(characters.gabi, ". . .");
    await ƒS.Speech.tell(characters.gabi, "Du hast ja recht.");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir so leid, aber ich habe das Geld geklaut.");

    await ƒS.Speech.tell(characters.elise, "Wie bitte?");
    await ƒS.Speech.tell(characters.elise, "Nur, weil du mir das Geld nicht gegönnt hast?");

    await ƒS.Speech.tell(characters.gabi, "Nein, ach Quatsch.");
    await ƒS.Speech.tell(characters.gabi, "Entschuldige, das habe ich gestern wirklich nicht so gemeint.");
    await ƒS.Speech.tell(characters.gabi, "Ich war nur so aufgeregt.");
    await ƒS.Speech.tell(characters.gabi, "Ich habe gehört, wie Wilma und Uwe darüber geredet haben, dass Wilma hohe Spielschulden hat.");
    await ƒS.Speech.tell(characters.gabi, "Ich . . .");
    await ƒS.Speech.tell(characters.gabi, "Ich fühle mich so schuldig, dass ich das nicht bemerkt habe.");
    await ƒS.Speech.tell(characters.gabi, "Ich hätte meine Tochter doch davor beschützen müssen!");
    await ƒS.Speech.tell(characters.gabi, "Es tut mir so leid, Wilma.");

    await ƒS.Speech.tell(characters.wilma, "Mama, ich wollte nicht, dass du davon erfährst!");
    await ƒS.Speech.tell(characters.wilma, "Ich hätte das bestimmt wieder unter Kontrolle bekommen.");

    await ƒS.Speech.tell(characters.gabi, "Es tut mir wirklich leid, Elise!");
    await ƒS.Speech.tell(characters.gabi, "Ich habe aus dem Affekt gehandelt.");
    await ƒS.Speech.tell(characters.gabi, "Das Geld war so nahe und ich musste doch etwas tun.");
    await ƒS.Speech.tell(characters.gabi, "Ich selbst komme gerade so über die Runden.");

    await ƒS.Speech.tell(characters.elise, "Aber . . .");

    await ƒS.Speech.tell(characters.uwe, "Ich habe doch gesagt, dass ich helfen kann!");

    await ƒS.Speech.tell(characters.elise, "Hätte ich das gewusst, hätte ich auch sofort geholfen!");
    await ƒS.Speech.tell(characters.elise, "Wisst ihr was?");
    await ƒS.Speech.tell(characters.elise, "Wir packen das gemeinsam an!");
    await ƒS.Speech.tell(characters.elise, "Und über deinen Diebstahl reden wir später nochmal, Gabi!");

    await ƒS.Speech.tell(characters.uwe, "Ja, das ist eine gute Idee!");
    await ƒS.Speech.tell(characters.uwe, "Wir greifen dir finanziell unter die Arme, Wilma.");
    await ƒS.Speech.tell(characters.uwe, "Und wir unterstützen dich dabei, aus der Spielsucht herauszukommen.");

    await ƒS.Speech.tell(characters.wilma, "Oh nein, das kann ich nicht annehmen.");

    await ƒS.Speech.tell(characters.elise, "Oh doch, das musst du!");

    await ƒS.Speech.tell(characters.gabi, "Was für eine tolle Idee!");
    await ƒS.Speech.tell(characters.gabi, "Ich helfe auch wo ich kann.");
    await ƒS.Speech.tell(characters.gabi, "Und das Geld bekommst du selbstverständlich zurück, Elise.");
    await ƒS.Speech.tell(characters.gabi, "Ich wollte mich sowieso noch auf einen Nebenjob unten im Laden bewerben.");

    await ƒS.Speech.tell(characters.wilma, "Woow, ich weiß gar nicht, wie ich euch allen danken soll!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    // novel page ending
    await ƒS.Text.print("Gut gemacht, du hast Gabi als die richtige Täterin entlarvt,<br>auch wenn vielleicht aus einem anderen Grund als erwartet?<br>\
      Was wohl passiert wäre, wenn du jemand anderen angeklagt hättest?<br>\
      Beginne von vorne oder lade einen Spielstand, um es zu erfahren.\
      ");
  }
}