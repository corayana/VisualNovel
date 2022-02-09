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
      background: "./Images/Backgrounds/test.png",
    },
    port: {
      name: "Hafen",
      background: "./Images/Backgrounds/harbour.png",
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
    },
    test: {
      name: "Test",
      background: "./Images/Backgrounds/hafen.svg",
    }
  };
}
