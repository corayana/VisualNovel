"use strict";
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Template.dataForSave = {
        nameProtagonist: ""
    };
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        Template.gameMenu = Template.ƒS.Menu.create(Template.inGameMenu, Template.buttonFunctionalities, "gameMenu");
        let scenes = [
            // Scenen werden linear abgespielt
            //{ id: "Kapitel 2", scene: Scene, name: "Scene" },
            { scene: Template.Introduction, name: "Introduction" },
            // non-Linear: ID an Scene geben und dadurch Reihenfolge bestimmen
        ];
        let uiElement = document.querySelector("[type=interface]");
        Template.dataForSave = Template.ƒS.Progress.setData(Template.dataForSave, uiElement);
        // start the sequence
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    function fromLeftToRightAndTurnToRed() {
        return {
            start: {
                translation: Template.ƒS.positions.bottomleft,
                rotation: -20,
                scaling: new Template.ƒS.Position(0.5, 1.5),
                color: Template.ƒS.Color.CSS("white")
            },
            end: {
                translation: Template.ƒS.positions.bottomright,
                rotation: 20,
                scaling: new Template.ƒS.Position(1.5, 0.5),
                color: Template.ƒS.Color.CSS("red")
            },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.LOOP,
        };
    }
    Template.fromLeftToRightAndTurnToRed = fromLeftToRightAndTurnToRed;
    ;
    function fromCenterToLeft() {
        return {
            start: {
                translation: Template.ƒS.positionPercent(50, 100),
                rotation: 10,
                scaling: new Template.ƒS.Position(0.5, 1.5),
                color: Template.ƒS.Color.CSS("white")
            },
            end: {
                translation: Template.ƒS.positionPercent(20, 100),
                rotation: 10,
                scaling: new Template.ƒS.Position(0.5, 1.5),
                color: Template.ƒS.Color.CSS("white", 0)
            },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Template.fromCenterToLeft = fromCenterToLeft;
    ;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.characters = {
        lara: {
            name: "Lara",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/lara_neutral.png",
                happy: "./Images/Characters/lara_happy.png",
                sad: "./Images/Characters/lara_sad.png"
            }
        },
        katy: {
            name: "Katy",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/katy_neutral.png",
            }
        },
        barkeeper: {
            name: "Barkeeper",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/barkeeper_neutral.png",
            }
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.items = {
        pen: {
            name: "Roter Buntstift",
            description: "Hier steht die Beschreibung",
            image: ""
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.locations = {
        club: {
            name: "Disko",
            background: "./Images/Backgrounds/club.jpg" // Pfad
        },
        restroom: {
            name: "Badezimmer",
            background: "./Images/Backgrounds/restroom.png" // Pfad
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.inGameMenu = {
        save: "Speichern",
        load: "Laden",
        close: "Schließen"
        // open: "Open"
    };
    // true = offen; false = geschlossen
    Template.menu = true;
    async function buttonFunctionalities(_option) {
        console.log(_option);
        switch (_option) {
            case Template.inGameMenu.save:
                await Template.ƒS.Progress.save();
                break;
            case Template.inGameMenu.load:
                await Template.ƒS.Progress.load();
                break;
            case Template.inGameMenu.close:
                Template.gameMenu.close();
                Template.menu = false;
                break;
            // case inGameMenu.open:
            //   gameMenu.open();
            //   menu = true;
            //   break;
        }
    }
    Template.buttonFunctionalities = buttonFunctionalities;
    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);
    async function hndKeyPress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
            case Template.ƒ.KEYBOARD_CODE.M:
                if (Template.menu) {
                    console.log("Schließen");
                    Template.gameMenu.close();
                    Template.menu = false;
                }
                else {
                    console.log("Öffnen");
                    Template.gameMenu.open();
                    Template.menu = true;
                }
                break;
        }
    }
    Template.hndKeyPress = hndKeyPress;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.sound = {
        // Music
        backgroundTheme: "",
        // Sound
        click: ""
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
    //define transitions
    Template.transitions = {
        clock: {
            duration: 1,
            alpha: "./FreeTransitions/puzzle.png",
            edge: 1 // haertegrad der transition (je niedriger die Zahl, desto weicher)
        }
    };
})(Template || (Template = {}));
var Template;
(function (Template) {
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
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0.2, 30, true);
        // Sound einfach nur spielen
        Template.ƒS.Sound.play(Template.sound.backgroundTheme, 0.1, true);
        // Anzeigen von Background
        await Template.ƒS.Location.show(Template.locations.club);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge); // transition
        // Anzeigen von Inventar
        //await ƒS.Inventory.open();
        // Item hinzufügen zum Inventar
        //ƒS.Inventory.add(items.pen);
        // Anzeigen von Charakter
        /*         await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positions.bottomcenter);
         */ //position alternativ in x und y Koordinate angeben: ƒS.positionPercent(x, y)
        await Template.ƒS.Character.show(Template.characters.lara, Template.characters.lara.pose.neutral, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.update(1); // transition fade
        // Anzeigen von Text
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0000);
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0001);
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0002);
        // Input-Feld
        // dataForSave.nameProtagonist = await ƒS.Speech.getInput();
        // console.log(dataForSave.nameProtagonist);
        // await ƒS.Speech.tell(characters.lara, "Dein Name: " + dataForSave.nameProtagonist);
        // //hauptcharakter spricht
        // await ƒS.Speech.tell(dataForSave.nameProtagonist, "Hohioho", true, "cssClass");
        // Delay
        // let signalDelay: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(1)]); //verzoegerung der scene um 1 sekunde
        await Template.ƒS.Character.animate(Template.characters.lara, Template.characters.lara.pose.sad, Template.fromCenterToLeft());
        await Template.ƒS.Character.show(Template.characters.lara, Template.characters.lara.pose.neutral, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Character.show(Template.characters.barkeeper, Template.characters.barkeeper.pose.neutral, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, text.barkeeper.T0000);
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, text.barkeeper.T0001);
        // Auswahlmoeglichkeiten
        let firstDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        await Template.ƒS.Speech.tell;
        let firstDialogeElement = await Template.ƒS.Menu.getInput(firstDialogeElementOptions, "individualCSSClass");
        switch (firstDialogeElement) {
            case firstDialogeElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.lara, "Vielen Dank, das kann ich jetzt gebrauchen!");
                break;
            case firstDialogeElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.lara, "Nein danke.");
                break;
        }
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0003);
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, text.barkeeper.T0002);
        // Auswahlmoeglichkeiten
        let secondDialogeElementOptions = {
            iSayYes: "Ja",
            iSayNo: "Nein"
        };
        let secondDialogeElement = await Template.ƒS.Menu.getInput(secondDialogeElementOptions, "individualCSSClass");
        switch (secondDialogeElement) {
            case secondDialogeElementOptions.iSayYes:
                await Template.ƒS.Speech.tell(Template.characters.lara, "Sehr gerne, 4 Augen sehen schließlich mehr als 2!");
                await Template.ƒS.Character.show(Template.characters.barkeeper, Template.characters.barkeeper.pose.neutral, Template.ƒS.positionPercent(30, 100));
                break;
            case secondDialogeElementOptions.iSayNo:
                await Template.ƒS.Speech.tell(Template.characters.lara, "Vielen Dank, aber das ist nicht nötig. Sie ist bestimmt nur noch kurz auf Toilette.");
                await Template.ƒS.Speech.tell(Template.characters.barkeeper, "Alles klar, dann viel Erfolg.");
                await Template.ƒS.Character.hide(Template.characters.barkeeper);
                break;
        }
        await Template.ƒS.Location.show(Template.locations.restroom);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge); // transition
        await Template.ƒS.Character.show(Template.characters.katy, Template.characters.katy.pose.neutral, Template.ƒS.positionPercent(80, 100));
        await Template.ƒS.Character.show(Template.characters.lara, Template.characters.lara.pose.happy, Template.ƒS.positionPercent(20, 100));
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0004);
        await Template.ƒS.Speech.tell(Template.characters.lara, text.lara.T0005);
        await Template.ƒS.Speech.tell(Template.characters.katy, text.katy.T0000);
        await Template.ƒS.Character.show(Template.characters.barkeeper, Template.characters.barkeeper.pose.neutral, Template.ƒS.positionPercent(50, 100));
        await Template.ƒS.Speech.tell(Template.characters.barkeeper, text.barkeeper.T0003);
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 2);
    }
    Template.Introduction = Introduction;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
        await Template.ƒS.Location.show(Template.locations.club);
        await Template.ƒS.update(Template.transitions.clock.duration, Template.transitions.clock.alpha, Template.transitions.clock.edge); // transition
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map