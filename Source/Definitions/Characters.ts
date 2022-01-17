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

        uwe: {
            name: "Uwe",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/uwe_neutral.png",
                friendly: "./Images/Characters/uwe_friendly.png",
                pensive: "./Images/Characters/uwe_pensive.png",
                shocked: "./Images/Characters/uwe_shocked.png",
                inlove: "./Images/Characters/uwe_inlove.png",
            }
        }

        

    }
    
}    