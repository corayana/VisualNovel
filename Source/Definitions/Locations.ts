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
      background: "./Assets/Backgrounds/cafe.png",
    },
    harbor: {
      name: "Hafen",
      background: "./Assets/Backgrounds/harbor.png",
    },
    library: {
      name: "Bücherei",
      background: "./Assets/Backgrounds/library.png",
    },
    bar: {
      name: "Kneipe",
      background: "./Assets/Backgrounds/bar.png",
    },
    outro: {
      name: "Outro",
      background: "./Assets/Backgrounds/outro.png",
    },
    blend: {
      name: "Übergang",
      background: "./Assets/Backgrounds/blend.png",
    }
  };
}
