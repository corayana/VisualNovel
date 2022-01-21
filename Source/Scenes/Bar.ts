namespace Application {

    export async function Bar(): ƒS.SceneReturn {
        console.log("Intro");

        let text = {
            uwe: {
                T0000: "hallo."
            }
        };

        //Background
        await ƒS.Location.show(locations.bar);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

        // Anzeigen von Charakter
        await ƒS.Character.show(characters.uwe, characters.uwe.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(1); 

        await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

        await ƒS.Character.hide(characters.uwe);

        await ƒS.Character.show(characters.uwe, characters.uwe.pose.pensive, ƒS.positionPercent(75, 100));
        await ƒS.update(); 

        ƒS.Inventory.add(items.bills);
        ƒS.Inventory.add(items.letter);
        await ƒS.Inventory.open();
        // Item hinzufügen zum Inventar
        

        await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

        // Auswahlmoeglichkeiten
        let firstDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };

        await ƒS.Speech.tell
        let firstDialogeElement = await ƒS.Menu.getInput(firstDialogeElementOptions, "choice");

        switch (firstDialogeElement) {
            case firstDialogeElementOptions.iSayYes:
                await ƒS.Speech.tell(characters.uwe, "Vielen Dank, das kann ich jetzt gebrauchen!");
                break;
            case firstDialogeElementOptions.iSayNo:
                await ƒS.Speech.tell(characters.uwe, "Nein danke.");
                break;
        }

        await ƒS.Character.hide(characters.uwe);

        await ƒS.Character.show(characters.uwe, characters.uwe.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(); 

        await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

        await ƒS.Character.hide(characters.uwe);

        await ƒS.Character.show(characters.uwe, characters.uwe.pose.shocked, ƒS.positionPercent(75, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

        await ƒS.Character.hide(characters.uwe);

        await ƒS.Character.show(characters.uwe, characters.uwe.pose.inlove, ƒS.positionPercent(75, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.uwe, text.uwe.T0000);

        await ƒS.Character.hide(characters.uwe);
    }
}
