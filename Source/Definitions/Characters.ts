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
    lara: {
      name: "Lara",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Characters/lara_neutral.png",
        friendly: "./Images/Characters/lara_friendly.png",
        laughing: "./Images/Characters/lara_laughing.png",
        pensive: "./Images/Characters/lara_pensive.png",
        surprised: "./Images/Characters/lara_surprised.png",
        suspicious: "./Images/Characters/lara_suspicious.png",
      },
    },
    elise: {
      name: "Elise",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Characters/elise_neutral.png",
        friendly: "./Images/Characters/elise_friendly.png",
        laughing: "./Images/Characters/elise_laughing.png",
        grumpy: "./Images/Characters/elise_grumpy.png",
        pensive: "./Images/Characters/elise_pensive.png",
        shocked: "./Images/Characters/elise_shocked.png",
        blushed: "./Images/Characters/elise_blushed.png",
      },
    },
    wilma: {
      name: "Wilma",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Characters/wilma_neutral.png",
        friendly: "./Images/Characters/wilma_friendly.png",
        grumpy: "./Images/Characters/wilma_grumpy.png",
        pensive: "./Images/Characters/wilma_pensive.png",
        laughing: "./Images/Characters/wilma_laughing.png",
        shocked: "./Images/Characters/wilma_shocked.png",
      },
    },
    uwe: {
      name: "Uwe",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Characters/uwe_neutral.png",
        friendly: "./Images/Characters/uwe_friendly.png",
        pensive: "./Images/Characters/uwe_pensive.png",
        shocked: "./Images/Characters/uwe_shocked.png",
        blushed: "./Images/Characters/uwe_blushed.png",
      },
    },
    gabi: {
      name: "Gabi",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        neutral: "./Images/Characters/gabi_neutral.png",
        friendly: "./Images/Characters/gabi_friendly.png",
        sad: "./Images/Characters/gabi_sad.png",
        pensive: "./Images/Characters/gabi_pensive.png",
        shocked: "./Images/Characters/gabi_shocked.png",
        grumpy: "./Images/Characters/gabi_grumpy.png",
      },
    },
  };

  export async function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2) {
    await ƒS.Character.hide(character);
    await ƒS.Character.show(character, character.pose[pose], position);
    await ƒS.update(0.2);
  };
}