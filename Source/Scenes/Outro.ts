namespace Application {
  export async function Outro(): ƒS.SceneReturn {
    console.log("Outro");

    let text = {
      lara: {
        T0000: "Wer wars?",
      },
    };

    // show background
    await ƒS.Location.show(locations.cafe);

    // transition
    await ƒS.update(transitions.clock.duration, transitions.clock.alpha, transitions.clock.edge);

    // show charakter lara
    await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
    await ƒS.update(1);

    await ƒS.Speech.tell(characters.lara, text.lara.T0000);

    // hide elements
    ƒS.Speech.clear();
    ƒS.Speech.hide();

    ƒS.Character.hideAll();
    await ƒS.update(1);
  }
}
