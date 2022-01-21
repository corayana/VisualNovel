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
                surprised: "./Images/Characters/lara_surprised.png",
                suspicious: "./Images/Characters/lara_suspicious.png",
            },
        },
        elise: {
            name: "Elise",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/elise_neutral.png",
            },
        },
        wilma: {
            name: "Wilma",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/wilma_neutral.png",
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
                inlove: "./Images/Characters/uwe_inlove.png",
            },
        },
        gabi: {
            name: "Gabi",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/gabi_neutral.png",
                friendly: "./Images/Characters/gabi_friendly.png",
                shocked: "./Images/Characters/gabi_shocked.png",
                grumpy: "./Images/Characters/gabi_grumpy.png",
            },
        },
        
    }
    
}    