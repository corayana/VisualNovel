namespace Application {
    export async function AccusedUwe(): ƒS.SceneReturn {
      console.log("Accused Uwe");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Du bist der Dieb, Uwe.");

      await ƒS.Speech.tell(characters.uwe, "Wie bitte?");
      await ƒS.Speech.tell(characters.uwe, "Wieso sollte ich das Geld gestohlen haben?");
      await ƒS.Speech.tell(characters.uwe, "Die Bar läuft gut und ich habe bei weitem keine Geldprobleme.");

      await ƒS.Speech.tell(characters.lara, "Geld ist nicht der Grund.");
      await ƒS.Speech.tell(characters.lara, "Der wahre Grund ist die Liebe.");

      // Wenn in Kneipe Choice look ausgewählt wurde: await ƒS.Speech.tell(characters.lara, "Das weiß ich aus sicheren Quellen: Ich habe deinen Liebesbrief gefunden!");
      await ƒS.Speech.tell(characters.lara, "Du wolltest nicht, dass Elise mit dem Geld die Insel verlässt!");
      await ƒS.Speech.tell(characters.lara, "Außerdem wurde gestern gesehen, wie du an der Spardose herumgefummelt hast.");

      await ƒS.Speech.tell(characters.elise, "Aber . . .");
      await ƒS.Speech.tell(characters.elise, "Wie meinst du das?");
      await ƒS.Speech.tell(characters.elise, "Uwe?");

      await ƒS.Speech.tell(characters.uwe, "Nein, so war es nicht.");
      await ƒS.Speech.tell(characters.uwe, ". . .");
      await ƒS.Speech.tell(characters.uwe, "Puh okay, vielleicht ist jetzt der Zeitpunkt gekommen, um es endlich zu gestehen:");
      await ƒS.Speech.tell(characters.uwe, "Ich liebe dich, Elise.");
      await ƒS.Speech.tell(characters.uwe, "Seitdem du hier bist, dreht sich mein ganzes Leben nur um dich.");
      await ƒS.Speech.tell(characters.uwe, "Ich wollte es dir so gerne sagen, aber ich habe mich einfach nicht getraut.");
      await ƒS.Speech.tell(characters.uwe, "Deshalb habe ich dir einen Liebesbrief geschrieben.");
      await ƒS.Speech.tell(characters.uwe, "Ich wollte ihn dir gestern geben.");
      await ƒS.Speech.tell(characters.uwe, "Du warst nur so wütend auf mich, weil ich so viel Zeit mit Wilma verbracht habe.");
      await ƒS.Speech.tell(characters.uwe, "Ich dachte es wäre eine gute Idee, den Brief in die Spardose zu dem Geld zu stecken, damit du ihn in Ruhe lesen kannst.");
      await ƒS.Speech.tell(characters.uwe, "Aber dann hast du verkündet, die Insel zu verlassen.");
      await ƒS.Speech.tell(characters.uwe, "Und da ist mir klar geworden, dass du meine Gefühle nicht erwiderst.");
      await ƒS.Speech.tell(characters.uwe, "Deshalb habe ich an der Dose herumgefummelt:");
      await ƒS.Speech.tell(characters.uwe, "Ich musste den Liebesbrief unbedingt wieder herausbekommen.");

      await ƒS.Speech.tell(characters.elise, "Oh Uwe.");
      await ƒS.Speech.tell(characters.elise, "Du Dummerchen!");
      await ƒS.Speech.tell(characters.elise, "Natürlich erwidere ich deine Gefühle!");
      await ƒS.Speech.tell(characters.elise, "Ich bin so froh, dass du das sagst.");
      await ƒS.Speech.tell(characters.elise, "Du hast mich gerade zum glücklichsten Menschen gemacht!");
      await ƒS.Speech.tell(characters.elise, "Wer auch immer das Geld gestohlen hat: Es ist mir egal!");
      await ƒS.Speech.tell(characters.elise, "Es spielt keine Rolle mehr.");
      await ƒS.Speech.tell(characters.elise, "Dein Geständnis ist so viel mehr wert als Geld, Uwe!");
  
      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);
  
      await ƒS.Text.print("Wer hätte damit gerechnet! Was für ein Happy End!<br>\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");

    }
  }
  