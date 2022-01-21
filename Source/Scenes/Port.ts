namespace Application {

    export async function Port(): ƒS.SceneReturn {
        console.log("Port");

        // Anzeigen von Background
        await ƒS.Location.show(locations.port);
        await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

    }
}
