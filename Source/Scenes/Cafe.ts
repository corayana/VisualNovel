namespace Application {
  export async function Cafe(): ƒS.SceneReturn {
    console.log("Visit Café");

    dataForSave.visitedCafe = true;

    // show background
    await ƒS.Location.show(locations.cafe);

    // sound
    ƒS.Sound.fade(sound.backgroundMusicCafe, 0.02, 3, true);
    ƒS.Sound.fade(sound.backgroundSoundCafe, 1, 3, true);

    // background transition
    await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show character elise
    await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Nochmal zu dem Abend gestern:");
    await ƒS.Speech.tell(characters.lara, "Ist dir etwas Verdächtiges aufgefallen?");

    // change laras pose to neutral
    await changePose(characters.lara, "neutral", ƒS.positionPercent(25, 100));

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Um ehrlich zu sein, war es ein komischer Abend.");
    await ƒS.Speech.tell(characters.elise, "Uwe hat öfters mit Wilma alleine getuschelt.");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Die beiden scheinen ein gemeinsames Geheimnis zu haben.");
    await ƒS.Speech.tell(characters.elise, "Aber naja, das geht mich nichts an.");
    await ƒS.Speech.tell(characters.elise, "Soll Uwe doch machen, was er will.");
    await ƒS.Speech.tell(characters.elise, "Aber dann braucht er auch nicht erwarten, dass ich ständig alles für ihn stehen und liegen lasse.");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Das habe ich ihm gestern auch so klar gemacht.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));

    await ƒS.Speech.tell(characters.lara, "Oh, du scheinst nicht gerade gut auf ihn zu sprechen zu sein?");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Auch, Uwe kann mich manchmal echt wahnsinnig machen mit seiner stillen Art.");

    // change elises pose to laughing
    await changePose(characters.elise, "laughing", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Aber das ist ein anderes Thema - da brauchst du dir keine Gedanken drum zu machen.");

    // change elises pose to neutral
    await changePose(characters.elise, "neutral", ƒS.positionPercent(75, 100));

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));

    await ƒS.Speech.tell(characters.lara, "Hat sich sonst noch etwas Ungewöhnliches ereignet?");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Gabi hat mir gestern Abend aus heiterem Himmel sehr gemeine Dinge vorgeworfen.");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Ich hätte noch nie erleben müssen, wie es ist, hartes Geld verdienen zu müssen.");
    await ƒS.Speech.tell(characters.elise, "Das Glück käme mir nur so zugeflogen, alles würde mir in den Schoss fallen – und so weiter.");

    // change laras pose to shocked
    await changePose(characters.lara, "shocked", ƒS.positionPercent(25, 100));

    await ƒS.Speech.tell(characters.lara, "Kannst du dir vorstellen, dass sie das Preisgeld gestohlen haben könnte?");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Naja, ich weiß nicht recht.");
    await ƒS.Speech.tell(characters.elise, "Unmöglich wäre es sicherlich nicht.");

    // change elises pose to grumpy
    await changePose(characters.elise, "grumpy", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Sie hat mir immerhin offen an den Kopf geworfen, dass ich das Preisgeld nicht verdiene.");
    await ƒS.Speech.tell(characters.elise, "Sie hatte es nie leicht und war schon immer sehr neidisch auf mich.");

    // change elises pose to shocked
    await changePose(characters.elise, "shocked", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Aber das gestern Abend – das hat wirklich jede Stichelei übertroffen.");
    await ƒS.Speech.tell(characters.elise, "Da muss mehr dahinterstecken!");

    // change elises pose to pensive
    await changePose(characters.elise, "pensive", ƒS.positionPercent(75, 100));

    await ƒS.Speech.tell(characters.elise, "Also wenn du mich so fragst, hat Gabi das Geld an sich genommen.");

    // change laras pose to suspicious
    await changePose(characters.lara, "suspicious", ƒS.positionPercent(25, 100));

    await ƒS.Speech.tell(characters.lara, "Hmm, das ist ja interessant.");
    await ƒS.Speech.tell(characters.lara, ". . .");
    await ƒS.Speech.tell(characters.lara, "Ich bin dann mal wieder unterwegs.");
    await ƒS.Speech.tell(characters.lara, "Bis heute Abend!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    ƒS.Sound.fade(sound.backgroundSoundCafe, 0, 3, false);
    ƒS.Sound.fade(sound.backgroundMusicCafe, 0, 3, false);

    //choose next location
    return "NextLocationChoice";
  }
}
