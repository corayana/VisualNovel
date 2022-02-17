namespace Application {

  /**
   *   id of the item: {
     *    name: "Name of the item", // also used to identify it,
     *    description: "Short description to show in the inventory",
     *    image: "path to the image to be used as icon",
     *    static: true // if the item can't be consumed
   *   }
   */

  export let items = {
    
    bills: {
      name: "Rechnungen von Wilma",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        default: "./Assets/Items/letter_wilma.png",
      }
    },

    code: {
      name: "Zahlencode für Uwes Tresor",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        default: "./Assets/Items/code_safe_uwe.png",
      }
    },

    cupcake: {
      name: "Cupcake",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        default: "./Assets/Items/cupcake.png",
      }
    },

    cupcakeBox: {
      name: "Cupcake-Spardose",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        default: "./Assets/Items/cupcake_box.png",
      }
    },

    drink: {
      name: "Getränk",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        hotchocolate: "./Assets/Items/hot_chocolate.png",
        water: "./Assets/Items/water.png",
        applejuice: "./Assets/Items/applejuice.png",
        tea: "./Assets/Items/tea.png",
      }
    },

    loveletter: {
      name: "Liebesbrief von Uwe",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        default: "./Assets/Items/letter_uwe.png",
      }
    },

    safe: {
      name: "Tresor von Uwe",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        default: "./Assets/Items/safe_uwe.png",
      }
    },
  };
}