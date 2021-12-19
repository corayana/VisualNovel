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
        Application.gameMenu = Application.ƒS.Menu.create(Application.inGameMenu, Application.buttonFunctionalities, "gameMenu");
        let scenes = [
            // Scenen werden linear abgespielt
            //{ id: "Kapitel 2", scene: Scene, name: "Scene" },
            { scene: Application.Introduction, name: "Introduction" },
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
    Application.characters = {
        lara: {
            name: "Lara",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/lara_neutral.png",
                happy: "./Images/Characters/lara_happy.png",
                sad: "./Images/Characters/lara_sad.png"
            }
        },
        katy: {
            name: "Katy",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/katy_neutral.png",
            }
        },
        barkeeper: {
            name: "Barkeeper",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/barkeeper_neutral.png",
            }
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    Application.items = {
        pen: {
            name: "Roter Buntstift",
            description: "Hier steht die Beschreibung",
            image: ""
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    Application.locations = {
        club: {
            name: "Disko",
            background: "./Images/Backgrounds/club.jpg" // Pfad
        },
        restroom: {
            name: "Badezimmer",
            background: "./Images/Backgrounds/restroom.png" // Pfad
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    Application.inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Schließen"
        // open: "Open"
    };
    // true = offen; false = geschlossen
    Application.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Application.inGameMenu.save:
                await Application.ƒS.Progress.save();
                break;
            case Application.inGameMenu.load:
                await Application.ƒS.Progress.load();
                break;
            case Application.inGameMenu.close:
                Application.gameMenu.close();
                Application.menu = false;
                break;
            // case inGameMenu.open:
            //   gameMenu.open();
            //   menu = true;
            //   break;
        }
    }
    Application.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Application.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Application.ƒS.Progress.save();
                break;
            case Application.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Application.ƒS.Progress.load();
                break;
            case Application.ƒ.KEYBOARD_CODE.M:
                if (Application.menu) {
                    console.log("Schließen");
                    Application.gameMenu.close();
                    Application.menu = false;
                }
                else {
                    console.log("Öffnen");
                    Application.gameMenu.open();
                    Application.menu = true;
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
    //define transitions
    Application.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1 // haertegrad der transition (je niedriger die Zahl, desto weicher)
        }
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Introduction() {
        console.log("Intro");
        let text = {
            lara: {
                T0000: "Wow, was für eine Nacht! So lange war ich schon lange nicht mehr tanzen.",
                T0001: "So langsam verabschieden sich alle.",
                T0002: "Wo bleibt denn Katy, gerade war sie doch noch auf der Tanzfläche, aber jetzt kann ich sie nirgends sehen.",
                T0003: "Ich warte nur noch auf meine Freundin. Sie wollte nur kurz an der Garderobe unsere Mäntel holen, ist aber noch nicht zurückgekommen. So langsam mache ich mir Sorgen!",
                T0004: "Katy, hier bist du!",
                T0005: "Endlich habe ich dich gefunden - ich habe mir schon Sorgen gemacht, wo du bleibst!",
            },
            barkeeper: {
                T0000: "Hey, alles klar bei dir?",
                T0001: "Möchtest du noch ein Wasser, bevor ich die Bar zumache? Geht auch aufs Haus!",
                T0002: "Meine Schicht ist jetzt sowieso zu Ende, wenn du magst, können wir gemeinsam nach ihr suchen.",
                T0003: "Ich würde mich freuen, wenn wir uns wiedersehen. Hier hast du meine Handynummer, melde dich doch gerne!",
            },
            katy: {
                T0000: "Upss, ich habe gerade Lea vor der Toilette getroffen und mich etwas verquatscht. Tut mir wirklich leid! Hier ist Dein Mantel, ass uns jetzt nach Hause gehen.",
            }
        };
        // await wartet auf Rueckgabe der Funktion (hier: Nutzereingabe) bevor System fortfaehrt
        //Sound einblenden 
        Application.ƒS.Sound.fade(Application.sound.backgroundTheme, 0.2, 30, true);
        // Sound einfach nur spielen
        Application.ƒS.Sound.play(Application.sound.backgroundTheme, 0.1, true);
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.club);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // Anzeigen von Inventar
        //await ƒS.Inventory.open();
        // Item hinzufügen zum Inventar
        //ƒS.Inventory.add(items.pen);
        // Anzeigen von Charakter
        /*         await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positions.bottomcenter);
         */ //position alternativ in x und y Koordinate angeben: ƒS.positionPercent(x, y)
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(50, 100));
        await Application.ƒS.update(1); // transition fade
        // Anzeigen von Text
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0000);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0001);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0002);
        // Input-Feld
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        // await ƒS.Speech.tell(characters.lara, "Dein Name: " + dataForSave.nameProtagonist);
        // //hauptcharakter spricht
        // await ƒS.Speech.tell(dataForSave.nameProtagonist, "Hohioho", true, "cssClass");
        // Delay
        // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]); //verzoegerung der scene um 1 sekunde
        await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.sad, Application.fromCenterToLeft());
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(20, 100));
        await Application.ƒS.Character.show(Application.characters.barkeeper, Application.characters.barkeeper.pose.neutral, Application.ƒS.positionPercent(80, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.barkeeper, text.barkeeper.T0000);
        await Application.ƒS.Speech.tell(Application.characters.barkeeper, text.barkeeper.T0001);
        // Auswahlmoeglichkeiten
        let firstDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        await Application.ƒS.Speech.tell;
        let firstDialogeElement = await Application.ƒS.Menu.getInput(firstDialogeElementOptions, "individualCSSClass");
        switch (firstDialogeElement) {
            case firstDialogeElementOptions.iSayYes:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielen Dank, das kann ich jetzt gebrauchen!");
                break;
            case firstDialogeElementOptions.iSayNo:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein danke.");
                break;
        }
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0003);
        await Application.ƒS.Speech.tell(Application.characters.barkeeper, text.barkeeper.T0002);
        // Auswahlmoeglichkeiten
        let secondDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        let secondDialogeElement = await Application.ƒS.Menu.getInput(secondDialogeElementOptions, "individualCSSClass");
        switch (secondDialogeElement) {
            case secondDialogeElementOptions.iSayYes:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Sehr gerne, 4 Augen sehen schließlich mehr als 2!");
                await Application.ƒS.Character.show(Application.characters.barkeeper, Application.characters.barkeeper.pose.neutral, Application.ƒS.positionPercent(30, 100));
                break;
            case secondDialogeElementOptions.iSayNo:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielen Dank, aber das ist nicht nötig. Sie ist bestimmt nur noch kurz auf Toilette.");
                await Application.ƒS.Speech.tell(Application.characters.barkeeper, "Alles klar, dann viel Erfolg.");
                await Application.ƒS.Character.hide(Application.characters.barkeeper);
                break;
        }
        await Application.ƒS.Location.show(Application.locations.restroom);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        await Application.ƒS.Character.show(Application.characters.katy, Application.characters.katy.pose.neutral, Application.ƒS.positionPercent(80, 100));
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.happy, Application.ƒS.positionPercent(20, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0004);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0005);
        await Application.ƒS.Speech.tell(Application.characters.katy, text.katy.T0000);
        await Application.ƒS.Character.show(Application.characters.barkeeper, Application.characters.barkeeper.pose.neutral, Application.ƒS.positionPercent(50, 100));
        await Application.ƒS.Speech.tell(Application.characters.barkeeper, text.barkeeper.T0003);
        Application.ƒS.Sound.fade(Application.sound.backgroundTheme, 0, 2);
    }
    Application.Introduction = Introduction;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        await Application.ƒS.Location.show(Application.locations.club);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
    }
    Application.Scene = Scene;
})(Application || (Application = {}));
//# sourceMappingURL=VisualNovel.js.map