namespace Application {

  export async function Scene(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");

    await ƒS.Location.show(locations.club);
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge); // transition

  }

}