namespace Application {
  /**
   *   id of the item: {
   *     name: "Name of the item",
   *     description: "description of the item",
   *     image: "path to the image to be used as the item"
   *   }
   */

  export let items = {
    bills: {
      name: "Rechnungen von Wilma",
      description: "Die Rechnungen zeigen, dass Wilma große Geldprobleme hat.",
      image: "./Images/Items/brief_inventory.png",
      static: true,
    },

    letter: {
      name: "Liebesbrief von Uwe",
      description: "Ein Liebesbrief von Uwe an Elise.",
      image: "./Images/Items/liebesbrief_inventory.png",
      static: true,
    },
  };
}
