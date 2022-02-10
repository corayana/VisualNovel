namespace Application {
  export async function Harbor(): ƒS.SceneReturn {
    console.log("Visit Harbor");

    dataForSave.visitedHarbor = true;

    // show background
    await ƒS.Location.show(locations.port);

    // fade background sound
    ƒS.Sound.fade(sound.backgroundHarbor, 0.8, 1, true);

    // background transition
    await ƒS.update(transitions.wave.duration, transitions.wave.alpha, transitions.wave.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    // show charakter wilma
    await ƒS.Character.show(characters.wilma, characters.wilma.pose.neutral, ƒS.positionPercent(75, 100));
    await ƒS.update(1);

    // dialog
    await ƒS.Speech.tell(characters.lara, "Hallo Wilma!");

    await ƒS.Speech.tell(characters.wilma, "Moin Lara!");

    await ƒS.Speech.tell(characters.wilma, "Schön dich zu sehen!");
    await ƒS.Speech.tell(characters.wilma, "Elise hat erzählt, dass du für ein paar Tage zu Besuch kommst.");
    await ƒS.Speech.tell(characters.wilma, "Wie geht es dir?");

    await ƒS.Speech.tell(characters.lara, "Danke, ich kann mich nicht beklagen!");
    await ƒS.Speech.tell(characters.lara, "Wie geht es dir? Was macht die Fischerei?");

    await ƒS.Speech.tell(characters.wilma, "Ach, ich kann mich ebenfalls nicht beklagen.");
    await ƒS.Speech.tell(characters.wilma, "Zurzeit ist natürlich ein bisschen weniger los, da die Touristen fehlen.");
    await ƒS.Speech.tell(characters.wilma, "Aber ich komme gut über die Runden.");

    await ƒS.Speech.tell(characters.lara, "Hast du es schon gehört?");
    await ƒS.Speech.tell(characters.lara, "Gestern wurde das Preisgeld aus der Spardose von Tante Elise geklaut.");

    await ƒS.Speech.tell(characters.wilma, "Wirklich? Das ganze Geld ist weg?");

    await ƒS.Speech.tell(characters.lara, "Ja, wir haben die leere Spardose heute früh bei meiner Ankunft bemerkt.");
    await ƒS.Speech.tell(characters.lara, "Jemand muss das Geld gestern Abend an sich genommen haben.");
    await ƒS.Speech.tell(characters.lara, "Hast du eine Ahnung, wer es gestohlen haben könnte?");

    await ƒS.Speech.tell(characters.wilma, "Ich kann mir nicht vorstellen, dass jemand von uns ein Dieb ist.");
    await ƒS.Speech.tell(characters.wilma, "Meine Mama Gabi braucht das Geld bestimmt nicht.");
    await ƒS.Speech.tell(characters.wilma, "Sie lebt sehr sparsam und leistet sich nicht viel.");
    await ƒS.Speech.tell(characters.wilma, "Obwohl sie nicht viel verdient, kommt sie alleine gut über die Runden.");

    await ƒS.Speech.tell(characters.lara, "Könnte Uwe das Geld genommen haben?");

    await ƒS.Speech.tell(characters.wilma, "Uwes Kneipe läuft sehr gut.");
    await ƒS.Speech.tell(characters.wilma, "Er braucht das Geld bestimmt nicht.");
    await ƒS.Speech.tell(characters.wilma, ". . .");
    await ƒS.Speech.tell(characters.wilma, "*lacht*");

    await ƒS.Speech.tell(characters.lara, "Warum lachst du?");

    await ƒS.Speech.tell(characters.wilma, "Oh naja, mir ist gerade eine Erklärung für den Diebstahl eingefallen:");
    await ƒS.Speech.tell(characters.wilma, "Elises spontane Verkündigung gestern, die Insel zu verlassen – das muss es sein!");

    await ƒS.Speech.tell(characters.lara, "Wie meinst du das?");
    await ƒS.Speech.tell(characters.lara, "Davon hat sie mir gegenüber nichts erwähnt.");

    await ƒS.Speech.tell(characters.wilma, "Natürlich hat sie das nicht erwähnt.");
    await ƒS.Speech.tell(characters.wilma, "Ich glaube auch nicht, dass sie das wirklich tun möchte.");
    await ƒS.Speech.tell(characters.wilma, "Elise hat gestern aus heiterem Himmel verkündet, das Preisgeld zu nutzen, um die Insel zu verlassen.");
    await ƒS.Speech.tell(characters.wilma, "Ich bin mir sicher, dass das nur ein Versuch von ihr ist, Uwe aus seinem Schneckenhaus zu locken.");
    await ƒS.Speech.tell(characters.wilma, "Weißt du, die beiden sind schon lange ineinander verliebt.");
    await ƒS.Speech.tell(characters.wilma, "Aber Uwe ist einfach viel zu schüchtern und hat regelrecht Angst davor, ihr es zu gestehen.");
    await ƒS.Speech.tell(characters.wilma, "Elise hat den plötzlichen Umzug bestimmt nur angekündigt, damit Uwe endlich den Schritt wagt, und ihr seine Gefühle offen gesteht, um sie nicht zu verlieren.");
    await ƒS.Speech.tell(characters.wilma, "Sie hat ihn quasi vor die Wahl gestellt: Entweder er springt, oder sie geht.");

    await ƒS.Speech.tell(characters.lara, "Und was hat das mit dem Diebstahl zu tun?");

    await ƒS.Speech.tell(characters.wilma, "Ich glaube, dass die Ansage eher nach hinten losgegangen ist.");
    await ƒS.Speech.tell(characters.wilma, "Scheinbar hat Uwe noch immer keine Anstalten gemacht, ihr seine Liebe zu gestehen.");
    await ƒS.Speech.tell(characters.wilma, "Um ihre Drohung nicht direkt wahr machen zu müssen, hat sie das Preisgeld sicherlich selbst verschwinden lassen.");
    await ƒS.Speech.tell(characters.wilma, "In Wirklichkeit will sie ja gar nicht weg von hier.");
    await ƒS.Speech.tell(characters.wilma, "Aber um das zuzugeben ist sie viel zu stolz.");
    await ƒS.Speech.tell(characters.wilma, "Für sie ist es einfacher, das Preisgeld verschwinden zu lassen, als zugeben zu müssen, dass sie überhaupt nicht wegziehen möchte.");
    await ƒS.Speech.tell(characters.wilma, "Und obendrauf hat sie dir so direkt eine Freude bereitet, weil du in dem Fall ermitteln kannst.");
    await ƒS.Speech.tell(characters.wilma, "Sie macht sich doch immer Sorgen, dass du dich hier langweilen könntest.");
    await ƒS.Speech.tell(characters.wilma, "Wenn du mich fragst, ist Elise selbst die Diebin des Geldes.");

    //Page

    await ƒS.Speech.tell(characters.wilma, "Moment, den Anruf muss ich kurz annehmen. Kannst du hier kurz aufpassen?");

    await ƒS.Speech.tell(characters.lara, "Das wirft natürlich ein ganz anderes Licht auf die Sache.");
    await ƒS.Speech.tell(characters.lara, "Die Anzahl der Verdächtigen hat sich gerade von drei auf vier erhöht.");
    await ƒS.Speech.tell(characters.lara, "Ob Tante Elise den Diebstahl wirklich nur vorgetäuscht hat?");
    await ƒS.Speech.tell(characters.lara, "Hmm, was für blaue Briefe sind da denn in der Tasche von Wilma?");
    await ƒS.Speech.tell(characters.lara, "Ob ich mal einen Blick darauf werfen sollte?");

    // CHOICE look at letters
    let chooseActionOptions = {
      look: "",
      wait: "",
    };
    let chooseAction = await ƒS.Menu.getInput(chooseActionOptions, "choice");

    // CHOICE result
    switch (chooseAction) {
      case chooseActionOptions.look:
        await ƒS.Speech.tell(characters.lara, "Es schadet bestimmt nicht, wenn ich einen schnellen Blick auf die Papiere werfe, solange Wilma beschäftigt ist.");
        await ƒS.Speech.tell(characters.lara, ". . .");
        await ƒS.Speech.tell(characters.lara, "Ohha, scheinbar hat Wilma ziemliche Geldprobleme.");
        await ƒS.Speech.tell(characters.lara, "Das Preisgeld von Elise wäre ihr sicher sehr gelegen gekommen.");
        await ƒS.Speech.tell(characters.lara, "Ob sie das Geld aus der Spardose geklaut hat, um ihre Schulden zu begleichen?");
        await ƒS.Speech.tell(characters.lara, ". . .");
        await ƒS.Speech.tell(characters.lara, "Ohh, Wilma scheint ihr Telefonat zu beenden.");
        await ƒS.Speech.tell(characters.lara, "Ich lege die Briefe schnell zurück.");
        await ƒS.Speech.tell(characters.lara, "Und jetzt nichts anmerken lassen.");
        break;
      case chooseActionOptions.wait:
        await ƒS.Speech.tell(characters.lara, "Nein, ich will nicht einfach unbemerkt in Wilmas private Sachen schauen, das gehört sich nicht.");
        await ƒS.Speech.tell(characters.lara, "Ich warte lieber bis sie wieder zurück kommt.");
        // Page 3 min später
        break;
    }

    // dialog
    await ƒS.Speech.tell(characters.wilma, "So, da bin ich wieder.");
    await ƒS.Speech.tell(characters.wilma, "Meine Liebe, sei mir nicht böse, aber so langsam muss ich wieder an die Arbeit zurück.");
    await ƒS.Speech.tell(characters.wilma, "Schön, dass du vorbeigeschaut hast.");
    await ƒS.Speech.tell(characters.wilma, "Komm gerne jederzeit wieder vorbei.");

    await ƒS.Speech.tell(characters.lara, "Moment, eines noch:");
    await ƒS.Speech.tell(characters.lara, "Elise kocht heute Abend. ");
    await ƒS.Speech.tell(characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");
    await ƒS.Speech.tell(characters.lara, "Um 18:30 Uhr bei ihr im Café.");

    await ƒS.Speech.tell(characters.wilma, "Oh, wie schön!");
    await ƒS.Speech.tell(characters.wilma, "Da schaue ich doch sehr gerne vorbei.");

    await ƒS.Speech.tell(characters.lara, "Super, ich freue mich darauf!");
    await ƒS.Speech.tell(characters.lara, "Bis später.");

    await ƒS.Speech.tell(characters.wilma, "Ach ja, und nochmal zu dem Diebstahl des Geldes:");
    await ƒS.Speech.tell(characters.wilma, "Ich bin mir sicher, dass Elise das Geld noch hat. Kein Grund, die Sache größer zu machen, als sie ist.");
    await ƒS.Speech.tell(characters.wilma, "Also, bis später dann.");

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();
    ƒS.Character.hideAll();
    await ƒS.update(1);

    ƒS.Sound.fade(sound.backgroundHarbor, 0, 3, false);

    //choose next location
    return "NextLocationChoice";
  }
}