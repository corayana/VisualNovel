namespace Application {

  export function fromLeftToRightAndTurnToRed(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positions.bottomleft,
        rotation: -20,
        scaling: new ƒS.Position(0.5, 1.5),
        color: ƒS.Color.CSS("white")
      },
      end: {
        translation: ƒS.positions.bottomright, //prozentuale Angabe ist besser; auf eine Variante festlegen und immer verwenden
        rotation: 20,
        scaling: new ƒS.Position(1.5, 0.5),
        color: ƒS.Color.CSS("red")
      },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.LOOP,
    }
  };

  export function fromCenterToLeft(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(50, 100),
        rotation: 10,
        scaling: new ƒS.Position(0.5, 1.5),
        color: ƒS.Color.CSS("white")
      },
      end: {
        translation: ƒS.positionPercent(20, 100), //prozentuale Angabe ist besser; auf eine Variante festlegen und immer verwenden
        rotation: 10,
        scaling: new ƒS.Position(0.5, 1.5),
        color: ƒS.Color.CSS("white", 0)
      },
      duration: 1,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    }
  };

}