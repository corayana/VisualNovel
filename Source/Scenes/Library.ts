namespace Application {

    export async function Library(): ƒS.SceneReturn {
        console.log("Intro");

        let text = {
            gabi: {
                T0000: "Hallo."
            }
        };

        // Anzeigen von Background
        await ƒS.Location.show(locations.library);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

        // Anzeigen von Charakter
        await ƒS.Character.show(characters.gabi, characters.gabi.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(1); 

        await ƒS.Speech.tell(characters.gabi, text.gabi.T0000);

        await ƒS.Character.hide(characters.gabi);

        await ƒS.Character.show(characters.gabi, characters.gabi.pose.grumpy, ƒS.positionPercent(75, 100));
        await ƒS.update(); 

        await ƒS.Speech.tell(characters.gabi, text.gabi.T0000);

        await ƒS.Character.hide(characters.gabi);

        await ƒS.Character.show(characters.gabi, characters.gabi.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(); 

        await ƒS.Speech.tell(characters.gabi, text.gabi.T0000);

        await ƒS.Character.hide(characters.gabi);

        await ƒS.Character.show(characters.gabi, characters.gabi.pose.shocked, ƒS.positionPercent(75, 100));
        await ƒS.update();

        await ƒS.Speech.tell(characters.gabi, text.gabi.T0000);

        await ƒS.Character.hide(characters.gabi);
    }
}
