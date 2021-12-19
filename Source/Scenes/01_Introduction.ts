namespace Template {

    export async function Introduction(): ƒS.SceneReturn {
        console.log("Intro");

        let text = {
            lara: {
                T0000: "Wow, was für eine Nacht! So lange war ich schon lange nicht mehr tanzen.",
                T0001: "So langsam verabschieden sich alle.",
                T0002: "Wo bleibt denn Katy, gerade war sie doch noch auf der Tanzfläche, aber jetzt kann ich sie nirgends sehen.",
                T0003: "Ich warte nur noch auf meine Freundin. Sie wollte nur kurz an der Garderobe unsere Mäntel holen, ist aber noch nicht zurückgekommen. So langsam mache ich mir Sorgen!",
                T0004: "Katy, hier bist du!",
                T0005: "Endlich habe ich dich gefunden - ich habe mir schon Sorgen gemacht, wo du bleibst!",
            },
            barkeeper: {
                T0000: "Hey, alles klar bei dir?",
                T0001: "Möchtest du noch ein Wasser, bevor ich die Bar zumache? Geht auch aufs Haus!",
                T0002: "Meine Schicht ist jetzt sowieso zu Ende, wenn du magst, können wir gemeinsam nach ihr suchen.",
                T0003: "Ich würde mich freuen, wenn wir uns wiedersehen. Hier hast du meine Handynummer, melde dich doch gerne!",
            },
            katy: {
                T0000: "Upss, ich habe gerade Lea vor der Toilette getroffen und mich etwas verquatscht. Tut mir wirklich leid! Hier ist Dein Mantel, ass uns jetzt nach Hause gehen.",
            }
        };
        // await wartet auf Rueckgabe der Funktion (hier: Nutzereingabe) bevor System fortfaehrt


        //Sound einblenden 
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 30, true);

        // Sound einfach nur spielen
        ƒS.Sound.play(sound.backgroundTheme, 0.1, true);

        // Anzeigen von Background
        await ƒS.Location.show(locations.club);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

        // Anzeigen von Inventar
        //await ƒS.Inventory.open();
        // Item hinzufügen zum Inventar
        //ƒS.Inventory.add(items.pen);

        // Anzeigen von Charakter
        /*         await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positions.bottomcenter); 
         */     //position alternativ in x und y Koordinate angeben: ƒS.positionPercent(x, y)
        await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.update(1); // transition fade

        // Anzeigen von Text
        await ƒS.Speech.tell(characters.lara, text.lara.T0000);
        await ƒS.Speech.tell(characters.lara, text.lara.T0001);
        await ƒS.Speech.tell(characters.lara, text.lara.T0002);

        // Input-Feld
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);

        // await ƒS.Speech.tell(characters.lara, "Dein Name: " + dataForSave.nameProtagonist);

        // //hauptcharakter spricht
        // await ƒS.Speech.tell(dataForSave.nameProtagonist, "Hohioho", true, "cssClass");

        // Delay
        // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]); //verzoegerung der scene um 1 sekunde

        await ƒS.Character.animate(characters.lara, characters.lara.pose.sad, fromCenterToLeft());
        await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(20, 100));
        await ƒS.Character.show(characters.barkeeper, characters.barkeeper.pose.neutral, ƒS.positionPercent(80, 100));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.barkeeper, text.barkeeper.T0000);
        await ƒS.Speech.tell(characters.barkeeper, text.barkeeper.T0001);


        // Auswahlmoeglichkeiten
        let firstDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };

        await ƒS.Speech.tell
        let firstDialogeElement = await ƒS.Menu.getInput(firstDialogeElementOptions, "individualCSSClass");

        switch (firstDialogeElement) {
            case firstDialogeElementOptions.iSayYes:
                await ƒS.Speech.tell(characters.lara, "Vielen Dank, das kann ich jetzt gebrauchen!");
                break;
            case firstDialogeElementOptions.iSayNo:
                await ƒS.Speech.tell(characters.lara, "Nein danke.");
                break;
        }

        await ƒS.Speech.tell(characters.lara, text.lara.T0003);
        await ƒS.Speech.tell(characters.barkeeper, text.barkeeper.T0002);

        // Auswahlmoeglichkeiten
        let secondDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };

        let secondDialogeElement = await ƒS.Menu.getInput(secondDialogeElementOptions, "individualCSSClass");

        switch (secondDialogeElement) {
            case secondDialogeElementOptions.iSayYes:
                await ƒS.Speech.tell(characters.lara, "Sehr gerne, 4 Augen sehen schließlich mehr als 2!");
                await ƒS.Character.show(characters.barkeeper, characters.barkeeper.pose.neutral, ƒS.positionPercent(30, 100));
                break;
            case secondDialogeElementOptions.iSayNo:
                await ƒS.Speech.tell(characters.lara, "Vielen Dank, aber das ist nicht nötig. Sie ist bestimmt nur noch kurz auf Toilette.");
                await ƒS.Speech.tell(characters.barkeeper, "Alles klar, dann viel Erfolg.");
                await ƒS.Character.hide(characters.barkeeper);
                break;
        }

        await ƒS.Location.show(locations.restroom);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

        await ƒS.Character.show(characters.katy, characters.katy.pose.neutral, ƒS.positionPercent(80, 100));
        await ƒS.Character.show(characters.lara, characters.lara.pose.happy, ƒS.positionPercent(20, 100));

        await ƒS.Speech.tell(characters.lara, text.lara.T0004);
        await ƒS.Speech.tell(characters.lara, text.lara.T0005);
        await ƒS.Speech.tell(characters.katy, text.katy.T0000);
        await ƒS.Character.show(characters.barkeeper, characters.barkeeper.pose.neutral, ƒS.positionPercent(50, 100));
        await ƒS.Speech.tell(characters.barkeeper, text.barkeeper.T0003);

        ƒS.Sound.fade(sound.backgroundTheme, 0, 2)
    }

}