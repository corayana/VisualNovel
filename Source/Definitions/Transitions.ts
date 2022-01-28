namespace Application {
  /**
   *   id of the transition: {
   *     duration: length of transition ind seconds,
   *     alpha: "path to the image to be used for the transition",
   *     edge: hardness of the transition (number between x and x: the lower the number, the softer the transition)
   *   }
   */

  export let transitions = {
    clock: {
      duration: 0.5,
      alpha: "./Images/Transitions/painting.jpg",
      edge: 0.8,
    },
  };
}
