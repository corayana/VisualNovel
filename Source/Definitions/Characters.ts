namespace Application {
  /**
   *   id of the character: {
   *     name: "Name of the character to appear when speaking",
   *     origin: the origin of the image, in most cases FudgeStory.ORIGIN.BOTTOMCENTER,
   *     pose: {
   *       id of 1st pose: "path to the image to be used for 1st pose",
   *       id of 2nd pose: "path to the image to be used for 2nd pose",
   *       ...
   *     }
   *   },
   */
  
  export let characters = {

    narrator: {
      name: "",
    },

    lara: {
      name: "Lara",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Assets/Characters/lara_neutral.png",
        friendly: "./Assets/Characters/lara_friendly.png",
        laughing: "./Assets/Characters/lara_laughing.png",
        pensive: "./Assets/Characters/lara_pensive.png",
        shocked: "./Assets/Characters/lara_shocked.png",
        suspicious: "./Assets/Characters/lara_suspicious.png",
      },
    },

    elise: {
      name: "Elise",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Assets/Characters/elise_neutral.png",
        friendly: "./Assets/Characters/elise_friendly.png",
        laughing: "./Assets/Characters/elise_laughing.png",
        grumpy: "./Assets/Characters/elise_grumpy.png",
        pensive: "./Assets/Characters/elise_pensive.png",
        shocked: "./Assets/Characters/elise_shocked.png",
        blushed: "./Assets/Characters/elise_blushed.png",
      },
    },

    wilma: {
      name: "Wilma",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Assets/Characters/wilma_neutral.png",
        friendly: "./Assets/Characters/wilma_friendly.png",
        grumpy: "./Assets/Characters/wilma_grumpy.png",
        pensive: "./Assets/Characters/wilma_pensive.png",
        laughing: "./Assets/Characters/wilma_laughing.png",
        shocked: "./Assets/Characters/wilma_shocked.png",
      },
    },

    uwe: {
      name: "Uwe",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Assets/Characters/uwe_neutral.png",
        friendly: "./Assets/Characters/uwe_friendly.png",
        pensive: "./Assets/Characters/uwe_pensive.png",
        shocked: "./Assets/Characters/uwe_shocked.png",
        blushed: "./Assets/Characters/uwe_blushed.png",
      },
    },
    
    gabi: {
      name: "Gabi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Assets/Characters/gabi_neutral.png",
        friendly: "./Assets/Characters/gabi_friendly.png",
        sad: "./Assets/Characters/gabi_sad.png",
        pensive: "./Assets/Characters/gabi_pensive.png",
        shocked: "./Assets/Characters/gabi_shocked.png",
        grumpy: "./Assets/Characters/gabi_grumpy.png",
      },
    },
  };

  export async function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2) {
    await ƒS.Character.hide(character);
    await ƒS.Character.show(character, character.pose[pose], position);
    await ƒS.update(0.2);
  };
}