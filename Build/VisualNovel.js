"use strict";
var Application;
(function (Application) {
    Application.ƒ = FudgeCore;
    Application.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Application.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        Application.gameMenu = Application.ƒS.Menu.create(Application.gameMenuOptions, Application.buttonFunctionalities, "gameMenu");
        let scenes = [
            // Scenen werden linear abgespielt
            //{ id: "Kapitel 2", scene: Scene, name: "Scene" },
            { scene: Application.Intro, name: "Intro" },
            { scene: Application.Bar, name: "Kneipe" },
            { scene: Application.Library, name: "Bücherei" },
            { scene: Application.Port, name: "Hafen" },
            { scene: Application.Cafe, name: "Café" },
            { scene: Application.Outro, name: "Outro" },
            // non-Linear: ID an Scene geben und dadurch Reihenfolge bestimmen
        ];
        let uiElement = document.querySelector("[type=interface]");
        Application.dataForSave = Application.ƒS.Progress.setData(Application.dataForSave, uiElement);
        // start the sequence
        Application.ƒS.Progress.go(scenes);
    }
})(Application || (Application = {}));
var Application;
(function (Application) {
    function fromLeftToRightAndTurnToRed() {
        return {
            start: {
                translation: Application.ƒS.positions.bottomleft,
                rotation: -20,
                scaling: new Application.ƒS.Position(0.5, 1.5),
                color: Application.ƒS.Color.CSS("white")
            },
            end: {
                translation: Application.ƒS.positions.bottomright,
                rotation: 20,
                scaling: new Application.ƒS.Position(1.5, 0.5),
                color: Application.ƒS.Color.CSS("red")
            },
            duration: 1,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.LOOP,
        };
    }
    Application.fromLeftToRightAndTurnToRed = fromLeftToRightAndTurnToRed;
    ;
    function fromCenterToLeft() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(50, 100),
                rotation: 10,
                scaling: new Application.ƒS.Position(0.5, 1.5),
                color: Application.ƒS.Color.CSS("white")
            },
            end: {
                translation: Application.ƒS.positionPercent(20, 100),
                rotation: 10,
                scaling: new Application.ƒS.Position(0.5, 1.5),
                color: Application.ƒS.Color.CSS("white", 0)
            },
            duration: 1,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.fromCenterToLeft = fromCenterToLeft;
    ;
})(Application || (Application = {}));
var Application;
(function (Application) {
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
    Application.characters = {
        lara: {
            name: "Lara",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/lara_neutral.png",
                friendly: "./Images/Characters/lara_friendly.png",
                surprised: "./Images/Characters/lara_surprised.png",
                suspicious: "./Images/Characters/lara_suspicious.png",
            },
        },
        elise: {
            name: "Elise",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/elise_neutral.png",
            },
        },
        wilma: {
            name: "Wilma",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/wilma_neutral.png",
            },
        },
        uwe: {
            name: "Uwe",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/gabi_neutral.png",
                friendly: "./Images/Characters/gabi_friendly.png",
                shocked: "./Images/Characters/gabi_shocked.png",
                grumpy: "./Images/Characters/gabi_grumpy.png",
            },
        },
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    /**
   *   id of the item: {
   *     name: "Name of the item",
   *     description: "description of the item",
   *     image: "path to the image to be used as the item"
   *   }
   */
    Application.items = {
        bills: {
            name: "Rechnungen von Wilma",
            description: "Die Rechnungen zeigen, dass Wilma große Geldprobleme hat.",
            image: "./Images/Items/brief_inventory.png",
        },
        letter: {
            name: "Liebesbrief von Uwe",
            description: "Ein Liebesbrief von Uwe an Elise.",
            image: "./Images/Items/liebesbrief_inventory.png",
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    /**
   *   id of the location: {
   *     name: "Name of the location" (optional),
   *     background: "path to the image to be used as the background",
   *     foreground: "path to the image to be used as the foreground" (optional),
   *   }
   */
    Application.locations = {
        cafe: {
            name: "Cafè",
            background: "./Images/Backgrounds/cafe.png",
        },
        port: {
            name: "Hafen",
            background: "./Images/Backgrounds/port.png",
        },
        library: {
            name: "Bücherei",
            background: "./Images/Backgrounds/library.png",
        },
        bar: {
            name: "Kneipe",
            background: "./Images/Backgrounds/bar.png",
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    //menu variables
    Application.menuOpen = true;
    Application.inventoryOpen = false;
    Application.CreditsOpen = false;
    Application.gameMenuOptions = {
        save: "Speichern",
        load: "Laden",
        shortcuts: "Shortcuts",
        credits: "Credits"
    };
    function showCredits() {
        Application.ƒS.Text.setClass("credits");
        Application.ƒS.Text.print("<p>  xyz </p>");
    }
    Application.showCredits = showCredits;
    function showShortcuts() {
        Application.ƒS.Text.setClass("shortcuts");
        Application.ƒS.Text.print("<p>  xyz </p>");
    }
    Application.showShortcuts = showShortcuts;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Application.gameMenuOptions.save:
                await Application.ƒS.Progress.save();
                break;
            case Application.gameMenuOptions.load:
                await Application.ƒS.Progress.load();
                break;
            /* case gameMenuOptions.close:
                gameMenu.close();
                menuOpen = false;
                break; */
            case Application.gameMenuOptions.credits:
                showCredits();
                break;
            case Application.gameMenuOptions.shortcuts:
                showShortcuts();
                break;
        }
        ;
    }
    Application.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Application.ƒ.KEYBOARD_CODE.I:
                if (Application.inventoryOpen) {
                    Application.ƒS.Inventory.close();
                    Application.inventoryOpen = false;
                }
                else {
                    Application.ƒS.Inventory.open();
                }
                break;
            case Application.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Application.ƒS.Progress.save();
                break;
            case Application.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Application.ƒS.Progress.load();
                break;
            case Application.ƒ.KEYBOARD_CODE.ESC:
                if (Application.menuOpen) {
                    console.log("Schließen");
                    Application.gameMenu.close();
                    Application.menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    Application.gameMenu.open();
                    Application.menuOpen = true;
                }
                break;
        }
    }
    Application.hndKeyPress = hndKeyPress;
})(Application || (Application = {}));
var Application;
(function (Application) {
    Application.sound = {
        // Music
        backgroundTheme: "",
        // Sound
        click: ""
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    /**
   *   id of the transition: {
   *     duration: length of transition ind seconds,
   *     alpha: "path to the image to be used for the transition",
   *     edge: hardness of the transition (number between x and x: the lower the number, the softer the transition)
   *   }
   */
    Application.transitions = {
        clock: {
            duration: 0.5,
            alpha: "./Images/Transitions/painting.jpg",
            edge: 0.8,
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Bar() {
        console.log("Intro");
        let text = {
            uwe: {
                T0000: "hallo."
            }
        };
        //Background
        await Application.ƒS.Location.show(Application.locations.bar);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // Anzeigen von Charakter
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.uwe, text.uwe.T0000);
        await Application.ƒS.Character.hide(Application.characters.uwe);
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.pensive, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        Application.ƒS.Inventory.add(Application.items.bills);
        Application.ƒS.Inventory.add(Application.items.letter);
        await Application.ƒS.Inventory.open();
        // Item hinzufügen zum Inventar
        await Application.ƒS.Speech.tell(Application.characters.uwe, text.uwe.T0000);
        // Auswahlmoeglichkeiten
        let firstDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        await Application.ƒS.Speech.tell;
        let firstDialogeElement = await Application.ƒS.Menu.getInput(firstDialogeElementOptions, "choice");
        switch (firstDialogeElement) {
            case firstDialogeElementOptions.iSayYes:
                await Application.ƒS.Speech.tell(Application.characters.uwe, "Vielen Dank, das kann ich jetzt gebrauchen!");
                break;
            case firstDialogeElementOptions.iSayNo:
                await Application.ƒS.Speech.tell(Application.characters.uwe, "Nein danke.");
                break;
        }
        await Application.ƒS.Character.hide(Application.characters.uwe);
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.uwe, text.uwe.T0000);
        await Application.ƒS.Character.hide(Application.characters.uwe);
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.shocked, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.uwe, text.uwe.T0000);
        await Application.ƒS.Character.hide(Application.characters.uwe);
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.inlove, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.uwe, text.uwe.T0000);
        await Application.ƒS.Character.hide(Application.characters.uwe);
    }
    Application.Bar = Bar;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Cafe() {
        console.log("Café");
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.cafe);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
    }
    Application.Cafe = Cafe;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Intro() {
        console.log("Intro");
        let text = {
            lara: {
                T0000: "Wohin sollte ich als nächstes gehen?"
            }
        };
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.cafe);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // Anzeigen von Charakter
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0000);
    }
    Application.Intro = Intro;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Library() {
        console.log("Intro");
        let text = {
            gabi: {
                T0000: "Hallo."
            }
        };
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.library);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // Anzeigen von Charakter
        await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.gabi, text.gabi.T0000);
        await Application.ƒS.Character.hide(Application.characters.gabi);
        await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.grumpy, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.gabi, text.gabi.T0000);
        await Application.ƒS.Character.hide(Application.characters.gabi);
        await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.gabi, text.gabi.T0000);
        await Application.ƒS.Character.hide(Application.characters.gabi);
        await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.shocked, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.gabi, text.gabi.T0000);
        await Application.ƒS.Character.hide(Application.characters.gabi);
    }
    Application.Library = Library;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Outro() {
        console.log("Outro");
        let text = {
            lara: {
                T0000: "Wer wars?"
            }
        };
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.cafe);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // Anzeigen von Charakter
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0000);
    }
    Application.Outro = Outro;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Port() {
        console.log("Port");
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.port);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
    }
    Application.Port = Port;
})(Application || (Application = {}));
//# sourceMappingURL=VisualNovel.js.map