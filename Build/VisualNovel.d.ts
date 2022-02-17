declare namespace Application {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        visitedBar: boolean;
        visitedCafe: boolean;
        visitedLibrary: boolean;
        visitedHarbor: boolean;
        triedToAccuseAll: boolean;
    };
}
declare namespace Application {
    /**
      *    start: {
      *      translation:  the position at the start of the animation,
      *      rotation:     the angle of rotation at the start of the animation,
      *      scaling:      the size at the start of the animation,
      *      color:        the color at the start of the animation,
      *    },
      *    end: {
      *      same as above but for the end of the animation
      *    },
      *    duration: the duration of one animation-cylce in seconds,
      *    playmode: the mode to play the animation in, see ANIMATION_PLAYMODE
    */
    function from75To90(): ƒS.AnimationDefinition;
    function from90To75(): ƒS.AnimationDefinition;
    function from75ToOutside(): ƒS.AnimationDefinition;
    function fromOutsideTo75(): ƒS.AnimationDefinition;
    function from25To40(): ƒS.AnimationDefinition;
    function from40To25(): ƒS.AnimationDefinition;
    function from25To80(): ƒS.AnimationDefinition;
    function from80To25(): ƒS.AnimationDefinition;
}
declare namespace Application {
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
    interface CharacterDefinitions {
        [id: string]: ƒS.CharacterDefinition;
    }
    let characters: CharacterDefinitions;
    function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2): Promise<void>;
}
declare namespace Application {
    function showCredits(): void;
}
declare namespace Application {
    /**
     *   id of the item: {
       *    name: "Name of the item", // also used to identify it,
       *    description: "Short description to show in the inventory",
       *    image: "path to the image to be used as icon",
       *    static: true // if the item can't be consumed
     *   }
     */
    let items: {
        bills: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        code: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        cupcake: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        cupcakeBox: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        drink: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                hotchocolate: string;
                water: string;
                applejuice: string;
                tea: string;
            };
        };
        loveletter: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
        safe: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                default: string;
            };
        };
    };
}
declare namespace Application {
    /**
     *   id of the location: {
     *     name: "Name of the location" (optional),
     *     background: "path to the image to be used as the background",
     *     foreground: "path to the image to be used as the foreground" (optional),
     *   }
     */
    let locations: {
        cafe: {
            name: string;
            background: string;
        };
        harbor: {
            name: string;
            background: string;
        };
        library: {
            name: string;
            background: string;
        };
        bar: {
            name: string;
            background: string;
        };
        outro: {
            name: string;
            background: string;
        };
        blend: {
            name: string;
            background: string;
        };
    };
}
declare namespace Application {
    let menuOpen: boolean;
    let inventoryOpen: boolean;
    let CreditsOpen: boolean;
    let gameMenuOptions: {
        save: string;
        load: string;
        shortcuts: string;
        credits: string;
    };
    let gameMenu: ƒS.Menu;
    function buttonFunctionalities(_option: string): Promise<void>;
}
declare namespace Application {
    function showShortcuts(): void;
}
declare namespace Application {
    let sound: {
        backgroundIntroHappy: string;
        backgroundIntroMysterious: string;
        shock: string;
        transition: string;
        backgroundBar: string;
        barFootstepsFadeOut: string;
        barFootstepsFadeIn: string;
        barOpenSafe: string;
        backgroundHarbor: string;
        harborRingtone: string;
        harborFootstepsFadeOut: string;
        harborFootstepsFadeIn: string;
        backgroundLibrary: string;
        libraryFootstepsFadeIn: string;
        backgroundSoundCafe: string;
        backgroundMusicCafe: string;
        tickingClockShort: string;
        tickingClockLong: string;
        backgroundOutro: string;
        backgroundEndingElise: string;
        backgroundEndingUwe: string;
        backgroundEndingGabi: string;
        backgroundEndingWilma: string;
    };
}
declare namespace Application {
    /**
     *   id of the transition: {
     *     duration: length of transition ind seconds,
     *     alpha: "path to the image to be used for the transition",
     *     edge: hardness of the transition (smooth 0 - 2 sharp: number between 0 and 2: the lower the number, the softer the transition)
     *   }
     */
    let transitions: {
        beginning: {
            duration: number;
            alpha: string;
            edge: number;
        };
        open: {
            duration: number;
            alpha: string;
            edge: number;
        };
        timefiller: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Application {
    function Bar(): ƒS.SceneReturn;
}
declare namespace Application {
    function Cafe(): ƒS.SceneReturn;
}
declare namespace Application {
    function EndOfNovel(): ƒS.SceneReturn;
}
declare namespace Application {
    function Harbor(): ƒS.SceneReturn;
}
declare namespace Application {
    function Intro(): ƒS.SceneReturn;
}
declare namespace Application {
    function Library(): ƒS.SceneReturn;
}
declare namespace Application {
    function NextLocationChoice(): ƒS.SceneReturn;
}
declare namespace Application {
    function Outro(): ƒS.SceneReturn;
}
declare namespace Application {
    function AccusedAll(): ƒS.SceneReturn;
}
declare namespace Application {
    function AccusedElise(): ƒS.SceneReturn;
}
declare namespace Application {
    function AccusedGabi(): ƒS.SceneReturn;
}
declare namespace Application {
    function AccusedUwe(): ƒS.SceneReturn;
}
declare namespace Application {
    function AccusedWilma(): ƒS.SceneReturn;
}
