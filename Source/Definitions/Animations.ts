namespace Application {

  /**
    *    start: {
    *      translation:  the position at the start of the animation,
    *      rotation:     the angle of rotation at the start of the animation,
    *      scaling:      the size at the start of the animation,
    *      color:        the color at the start of the animation,
    *    },
    *    end: {
    *      same as above but for the end of the animation
    *    },
    *    duration: the duration of one animation-cylce in seconds,
    *    playmode: the mode to play the animation in, see ANIMATION_PLAYMODE
  */

  export function from75To90(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(75, 100),
      },
      end: {
        translation: ƒS.positionPercent(90, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from90To75(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(90, 100),
      },
      end: {
        translation: ƒS.positionPercent(75, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from75ToOutside(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(75, 100),
      },
      end: {
        translation: ƒS.positionPercent(120, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function fromOutsideTo75(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(120, 100),
      },
      end: {
        translation: ƒS.positionPercent(75, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from25To40(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(25, 100),
      },
      end: {
        translation: ƒS.positionPercent(40, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from40To25(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(40, 100),
      },
      end: {
        translation: ƒS.positionPercent(25, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from25To80(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(25, 100),
      },
      end: {
        translation: ƒS.positionPercent(80, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

  export function from80To25(): ƒS.AnimationDefinition {
    return {
      start: {
        translation: ƒS.positionPercent(80, 100),
      },
      end: {
        translation: ƒS.positionPercent(25, 100),
      },
      duration: 2,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE,
    };
  }

}
