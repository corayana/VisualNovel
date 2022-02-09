namespace Application {
  export async function AccusedElise(): ƒS.SceneReturn {
    console.log("Accused Elise");

    // dialog
    await ƒS.Speech.tell(characters.lara, "Elise! Du warst es!");

    await ƒS.Speech.tell(characters.elise, "Ich?");
    await ƒS.Speech.tell(characters.elise, "Warum sollte ich mein eigenes Preisgeld stehlen?");
    await ƒS.Speech.tell(characters.elise, "Das ergibt doch gar keinen Sinn!");

    await ƒS.Speech.tell(characters.lara, "Ich konnte es zuerst auch nicht glauben.");
    await ƒS.Speech.tell(characters.lara, "Aber Wilma hat es mir recht plausibel erklärt:");
    await ƒS.Speech.tell(characters.lara, "Du hast gestern verkündet mit dem Geld von der Insel wegzuziehen.");
    await ƒS.Speech.tell(characters.lara, "Aber ich glaube nicht, dass du das wirklich willst.");
    await ƒS.Speech.tell(characters.lara, "Du liebst das Leben hier und die Leute . . .");
    await ƒS.Speech.tell(characters.lara, "Du warst nur zu stolz, um einen Rückzieher zu machen.");

    await ƒS.Speech.tell(characters.elise, "Du hast recht.");
    await ƒS.Speech.tell(characters.elise, "Ich will nicht weg von hier.");
    await ƒS.Speech.tell(characters.elise, "Die Ankündigung gestern war nur eine Laune aus dem Affekt.");
    await ƒS.Speech.tell(characters.elise, "Ich war echt eifersüchtig.");
    await ƒS.Speech.tell(characters.elise, "Uwe hat gestern so viel mit Wilma getuschelt.");
    await ƒS.Speech.tell(characters.elise, "Ich wusste einfach nicht mehr, wo ich stehe.");
    await ƒS.Speech.tell(characters.elise, "Aber einen Diebstahl habe ich deswegen nicht vorgetäuscht.");

    await ƒS.Speech.tell(characters.uwe, "Ach Elise, das macht mich so froh.");
    await ƒS.Speech.tell(characters.uwe, "Ich dachte wirklich, dass du die Insel verlassen willst.");
    await ƒS.Speech.tell(characters.uwe, "Ich hätte dir gestern fast meine Liebe gestanden.");
    await ƒS.Speech.tell(characters.uwe, "Aber dann hast du die Ankündigung gemacht und dann habe ich mich nicht mehr getraut.");
    await ƒS.Speech.tell(characters.uwe, "Aber jetzt bin ich mir sicher.");
    await ƒS.Speech.tell(characters.uwe, "Hier, bitte nimm diesen Liebesbrief von mir an.");

    await ƒS.Speech.tell(characters.elise, "Ohh . . .");
    await ƒS.Speech.tell(characters.elise, "Wow, Uwe!");
    await ƒS.Speech.tell(characters.elise, "Darauf habe ich so lange gewartet.");
    await ƒS.Speech.tell(characters.elise, "Ach wisst ihr was - Mir ist egal wer das Geld gestohlen hat, oder was damit passiert ist!");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    await ƒS.Text.print("Wie schön, endlich konnten sich Elise und Uwe ihre Liebe gestehen.\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");

  }
}
