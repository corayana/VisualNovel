namespace Application {
    export async function AccusedWilma(): ƒS.SceneReturn {
      console.log("Accused Wilma");
  
      // dialog
      await ƒS.Speech.tell(characters.lara, "Du bist die Diebin, Wilma.");
  
      await ƒS.Speech.tell(characters.wilma, "Was?");
      await ƒS.Speech.tell(characters.wilma, "Wie kommst du denn darauf?");

      await ƒS.Speech.tell(characters.lara, "Du hast große Geldprobleme, Wilma.");
      // if choice Harbor look: await ƒS.Speech.tell(characters.lara, "Ich habe deine Briefe mit den unbezahlten Rechnungen gesehen!");
      await ƒS.Speech.tell(characters.lara, "Uwe hat mir erzählt, dass du hohe Spielschulden hast.");
      await ƒS.Speech.tell(characters.lara, "Und dass du gestern überlegt hast, das Geld aus der Spardose mitzunehmen.");

      await ƒS.Speech.tell(characters.uwe, "Aber Lara, du hast versprochen, dass du das für dich behältst!");

      await ƒS.Speech.tell(characters.elise, "Jetzt wird mir alles klar!");
      await ƒS.Speech.tell(characters.elise, "Das war also das Geheimnis von Uwe und dir.");

      await ƒS.Speech.tell(characters.wilma, "Früher oder später musste es ja rauskommen.");
      await ƒS.Speech.tell(characters.wilma, "Ja, ich bin spielsüchtig und ja, ich habe große finanzielle Probleme.");
      await ƒS.Speech.tell(characters.wilma, "Und ja, ich habe gestern ernsthaft mit dem Gedanken gespielt das Geld mitzunehmen.");
      await ƒS.Speech.tell(characters.wilma, "Aber Uwe hat auf mich eingeredet und da habe ich gemerkt, wie dämlich die Idee ist.");

      await ƒS.Speech.tell(characters.elise, "Ach Wilma, wieso hast du denn nie etwas gesagt?");

      await ƒS.Speech.tell(characters.wilma, "Ich wollte nicht, dass meine Mutter davon erfährt.");
      await ƒS.Speech.tell(characters.wilma, "Ich wollte sie nicht enttäuschen und habe ihr schon genug Sorgen im Leben bereitet.");
      await ƒS.Speech.tell(characters.wilma, "Das Geld habe ich aber sicher nicht geklaut!");

      await ƒS.Speech.tell(characters.gabi, "Ach meine kleine Wilma.");
      await ƒS.Speech.tell(characters.gabi, "Du hast mir so viel Freude gebracht, viel mehr als alles andere, viel mehr als du es dir vorstellen kannst!");
      await ƒS.Speech.tell(characters.gabi, "Ich . . .");
      await ƒS.Speech.tell(characters.gabi, "Ich habe gehört, wie Uwe und du gestern über deine Spielschulden geredet habt.");
      await ƒS.Speech.tell(characters.gabi, ". . .");
      await ƒS.Speech.tell(characters.gabi, "Und dann habe ich das Geld aus der Spardose geklaut.");

      await ƒS.Speech.tell(characters.wilma, "Was? Du Mama?");

      await ƒS.Speech.tell(characters.gabi, "Ich wollte dir unbedingt helfen!");
      await ƒS.Speech.tell(characters.gabi, "Meine Tochter – Spielschulden!");
      await ƒS.Speech.tell(characters.gabi, "Da musste ich doch etwas tun!");

      await ƒS.Speech.tell(characters.elise, "Und dann klaust du mein Preisgeld?");

      await ƒS.Speech.tell(characters.gabi, "Es tut mir wirklich leid, Elise!");
      await ƒS.Speech.tell(characters.gabi, "Ich habe aus dem Affekt gehandelt.");
      await ƒS.Speech.tell(characters.gabi, "Das Geld war direkt in Griffweite und ich musste doch etwas tun.");
      await ƒS.Speech.tell(characters.gabi, "Ich selbst komme nur gerade so über die Runden.");

      await ƒS.Speech.tell(characters.wilma, "Aber . . .");

      await ƒS.Speech.tell(characters.gabi, "Unten im Laden wollte ich mich noch auf einen Nebenjob bewerben.");
      await ƒS.Speech.tell(characters.gabi, "Das Geld werde ich dir auf jeden Fall wieder zurückzahlen, Elise!");

      await ƒS.Speech.tell(characters.elise, "Also gut.");
      await ƒS.Speech.tell(characters.elise, "Wenn ich das Geld mit der Zeit wieder zurückbekomme, soll es mir recht sein.");

      // hide elements
      ƒS.Speech.clear();
      ƒS.Speech.hide();
      ƒS.Character.hideAll();
      await ƒS.update(1);

      await ƒS.Text.print("Obwohl du falsch getippt hast, konnte der Täter letztendlich entlarvt werden.\
      Was wohl passiert wäre, wenn du eine andere Person angeklagt hättest?\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");
  
    }
  }
  