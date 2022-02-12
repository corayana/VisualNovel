namespace Application {
  /**
   *   id of the transition: {
   *     duration: length of transition ind seconds,
   *     alpha: "path to the image to be used for the transition",
   *     edge: hardness of the transition (smooth 0 - 2 sharp: number between 0 and 2: the lower the number, the softer the transition) 
   *   }
   */

  export let transitions = {

    wave: {
      duration: 2,
      alpha: "./Assets/Transitions/Untitled_Artwork.png",
      edge: 0.2,
    },

    timefiller: {
      duration: 1.5,
      alpha: "./Assets/Transitions/timefiller.png",
      edge: 1.5,
    },
  };
}
