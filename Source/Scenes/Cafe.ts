namespace Application {
  export async function Cafe(): ƒS.SceneReturn {
    console.log("Visit Café");

    dataForSave.visitedCafe = true;

    // show background
    await ƒS.Location.show(locations.cafe);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show character elise
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Nochmal zu dem Abend gestern:");
    await ƒS.Speech.tell(characters.lara, "Ist dir etwas Verdächtiges aufgefallen?");

    await ƒS.Speech.tell(characters.elise, "Um ehrlich zu sein, war es ein komischer Abend.");
    await ƒS.Speech.tell(characters.elise, "Uwe hat öfters mit Wilma alleine getuschelt.");
    await ƒS.Speech.tell(characters.elise, "Die beiden scheinen ein gemeinsames Geheimnis zu haben.");
    await ƒS.Speech.tell(characters.elise, "Aber naja, das geht mich nichts an.");
    await ƒS.Speech.tell(characters.elise, "Soll Uwe doch machen, was er will.");
    await ƒS.Speech.tell(characters.elise, "Aber dann braucht er auch nicht erwarten, dass ich ständig alles für ihn stehen und liegen lasse.");
    await ƒS.Speech.tell(characters.elise, "Das habe ich ihm gestern auch so klar gemacht.");

    await ƒS.Speech.tell(characters.lara, "Oh, du scheinst nicht gerade gut auf ihn zu sprechen zu sein?");

    await ƒS.Speech.tell(characters.elise, "Auch, Uwe kann mich manchmal echt wahnsinnig machen mit seiner stillen Art.");
    await ƒS.Speech.tell(characters.elise, "Aber das ist ein anderes Thema - da brauchst du dir keine Gedanken drum zu machen.");

    await ƒS.Speech.tell(characters.lara, "Hat sich sonst noch etwas Ungewöhnliches ereignet?");

    await ƒS.Speech.tell(characters.elise, "Gabi hat mir gestern Abend aus heiterem Himmel sehr gemeine Dinge vorgeworfen.");
    await ƒS.Speech.tell(characters.elise, "Ich hätte noch nie erleben müssen, wie es ist, hartes Geld verdienen zu müssen.");
    await ƒS.Speech.tell(characters.elise, "Das Glück käme mir nur so zugeflogen, alles würde mir in den Schoss fallen – und so weiter.");

    await ƒS.Speech.tell(characters.lara, "Kannst du dir vorstellen, dass sie das Preisgeld gestohlen haben könnte?");
    
    await ƒS.Speech.tell(characters.elise, "Naja, ich weiß nicht recht.");
    await ƒS.Speech.tell(characters.elise, "Unmöglich wäre es sicherlich nicht.");
    await ƒS.Speech.tell(characters.elise, "Sie hat mir immerhin offen an den Kopf geworfen, dass ich das Preisgeld nicht verdiene.");
    await ƒS.Speech.tell(characters.elise, "Sie hatte es nie leicht und war schon immer sehr neidisch auf mich.");
    await ƒS.Speech.tell(characters.elise, "Aber das gestern Abend – das hat wirklich jede Stichelei übertroffen.");
    await ƒS.Speech.tell(characters.elise, "Da muss mehr dahinterstecken!");
    await ƒS.Speech.tell(characters.elise, "Also wenn du mich so fragst, hat Gabi das Geld an sich genommen.");

    await ƒS.Speech.tell(characters.lara, "Hmm, das ist ja interessant.");
    await ƒS.Speech.tell(characters.lara, ". . .");
    await ƒS.Speech.tell(characters.lara, "Ich bin dann mal wieder unterwegs.");
    await ƒS.Speech.tell(characters.lara, "Bis heute Abend!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    //choose next location
    return "NextLocationChoice";
  }
}
