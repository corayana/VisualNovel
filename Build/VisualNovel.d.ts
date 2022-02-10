declare namespace Application {
    /**
     * TODO
     * - favicon
     * - Transitions: screen size fix
     * - focused buton
     * - Vorschaubild (Köpfe in Kreisen?)
     * - Name für VN
     * - Sound/Musik
     * */
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
        visitedBar: boolean;
        visitedCafe: boolean;
        visitedLibrary: boolean;
        visitedHarbor: boolean;
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
    let characters: {
        lara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                laughing: string;
                pensive: string;
                surprised: string;
                suspicious: string;
            };
        };
        elise: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                laughing: string;
                grumpy: string;
                pensive: string;
                shocked: string;
                blushed: string;
            };
        };
        wilma: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                grumpy: string;
                pensive: string;
                laughing: string;
                shocked: string;
            };
        };
        uwe: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                pensive: string;
                shocked: string;
                blushed: string;
            };
        };
        gabi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                sad: string;
                pensive: string;
                shocked: string;
                grumpy: string;
            };
        };
    };
    function changePose(character: ƒS.CharacterDefinition, pose: string, position: ƒ.Vector2): Promise<void>;
}
declare namespace Application {
    function showCredits(): void;
}
declare namespace Application {
    /**
     *   id of the item: {
     *     name: "Name of the item",
     *     description: "description of the item",
     *     image: "path to the image to be used as the item"
     *   }
     */
    let items: {
        bills: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        letter: {
            name: string;
            description: string;
            image: string;
            static: boolean;
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
        port: {
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
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Application {
    function showShortcuts(): void;
}
declare namespace Application {
    let sound: {
        backgroundIntroHappy: string;
        backgroundIntroMysterious: string;
        shock: string;
        backgroundBar: string;
        backgroundHarbor: string;
        harborRingtone: string;
        harborFootstepsFadeOut: string;
        harborFootstepsFadeIn: string;
        backgroundLibrary: string;
        backgroundSoundCafe: string;
        backgroundMusicCafe: string;
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
        wave: {
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
