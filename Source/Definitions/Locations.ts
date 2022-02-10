namespace Application {
  /**
   *   id of the location: {
   *     name: "Name of the location" (optional),
   *     background: "path to the image to be used as the background",
   *     foreground: "path to the image to be used as the foreground" (optional),
   *   }
   */

  export let locations = {
    cafe: {
      name: "Cafè",
      background: "./Images/Backgrounds/cafe.png",
    },
    port: {
      name: "Hafen",
      background: "./Images/Backgrounds/harbor.png",
    },
    library: {
      name: "Bücherei",
      background: "./Images/Backgrounds/library.png",
    },
    bar: {
      name: "Kneipe",
      background: "./Images/Backgrounds/bar.png",
    },
    outro: {
      name: "Outro",
      background: "./Images/Backgrounds/outro.png",
    }
  };
}
