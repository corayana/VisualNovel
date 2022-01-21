namespace Application {

    export async function Cafe(): ƒS.SceneReturn {
        console.log("Café");

        // Anzeigen von Background
        await ƒS.Location.show(locations.cafe);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

    }
}
