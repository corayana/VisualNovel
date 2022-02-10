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

  export function from75to90(): ƒS.AnimationDefinition {
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

  export function from90to75(): ƒS.AnimationDefinition {
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

}
