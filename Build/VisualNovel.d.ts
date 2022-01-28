declare namespace Application {
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
    function fromLeftToRightAndTurnToRed(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
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
                surprised: string;
                suspicious: string;
            };
        };
        elise: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        wilma: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                grumpy: string;
                laughing: string;
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
                inlove: string;
            };
        };
        gabi: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                friendly: string;
                shocked: string;
                grumpy: string;
            };
        };
    };
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
    function showCredits(): void;
    function showShortcuts(): void;
    function buttonFunctionalities(_option: string): Promise<void>;
    function hndKeyPress(_event: KeyboardEvent): Promise<void>;
}
declare namespace Application {
    let sound: {
        backgroundTheme: string;
        click: string;
    };
}
declare namespace Application {
    /**
     *   id of the transition: {
     *     duration: length of transition ind seconds,
     *     alpha: "path to the image to be used for the transition",
     *     edge: hardness of the transition (number between x and x: the lower the number, the softer the transition)
     *   }
     */
    let transitions: {
        clock: {
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
