namespace Application {

    export async function Outro(): ƒS.SceneReturn {
        console.log("Outro");

        let text = {
            lara: {
                T0000: "Wer wars?"
            }
        };

        // Anzeigen von Background
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

        // Anzeigen von Charakter
        await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.update(1); 

        await ƒS.Speech.tell(characters.lara, text.lara.T0000);

    }
}
