declare namespace Application {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let dataForSave: {
        nameProtagonist: string;
    };
}
declare namespace Application {
    function fromLeftToRightAndTurnToRed(): ƒS.AnimationDefinition;
    function fromCenterToLeft(): ƒS.AnimationDefinition;
}
declare namespace Application {
    let characters: {
        lara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
                happy: string;
                sad: string;
            };
        };
        katy: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
        barkeeper: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                neutral: string;
            };
        };
    };
}
declare namespace Application {
    let items: {
        pen: {
            name: string;
            description: string;
            image: string;
        };
    };
}
declare namespace Application {
    let locations: {
        club: {
            name: string;
            background: string;
        };
        restroom: {
            name: string;
            background: string;
        };
    };
}
declare namespace Application {
    let inGameMenu: {
        save: string;
        load: string;
        close: string;
    };
    let gameMenu: ƒS.Menu;
    let menu: boolean;
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
    let transitions: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
}
declare namespace Application {
    function Introduction(): ƒS.SceneReturn;
}
declare namespace Application {
    function Scene(): ƒS.SceneReturn;
}
