"use strict";
var Application;
(function (Application) {
    Application.ƒ = FudgeCore;
    Application.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    Application.dataForSave = {
        nameProtagonist: "",
        visitedBar: false,
        visitedCafe: false,
        visitedLibrary: false,
        visitedHarbor: false,
    };
    window.addEventListener("load", start);
    function start(_event) {
        // Menü
        Application.gameMenu = Application.ƒS.Menu.create(Application.gameMenuOptions, Application.buttonFunctionalities, "gameMenu");
        // scenes (linear)
        let scenes = [
            // Scenen werden linear abgespielt
            // { id: "Id", scene: Scene, name: "Scene" },
            { scene: Application.Intro, name: "Intro" },
            { id: "NextLocationChoice", scene: Application.NextLocationChoice, name: "" },
            { id: "Kneipe", scene: Application.Bar, name: "Kneipe" },
            { id: "Bücherei", scene: Application.Library, name: "Bücherei" },
            { id: "Hafen", scene: Application.Harbor, name: "Hafen" },
            { id: "Café", scene: Application.Cafe, name: "Café" },
            { id: "Outro", scene: Application.Outro, name: "Outro" },
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
                color: Application.ƒS.Color.CSS("white"),
            },
            end: {
                translation: Application.ƒS.positions.bottomright,
                rotation: 20,
                scaling: new Application.ƒS.Position(1.5, 0.5),
                color: Application.ƒS.Color.CSS("red"),
            },
            duration: 1,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.LOOP,
        };
    }
    Application.fromLeftToRightAndTurnToRed = fromLeftToRightAndTurnToRed;
    function fromCenterToLeft() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(50, 100),
                rotation: 10,
                scaling: new Application.ƒS.Position(0.5, 1.5),
                color: Application.ƒS.Color.CSS("white"),
            },
            end: {
                translation: Application.ƒS.positionPercent(20, 100),
                rotation: 10,
                scaling: new Application.ƒS.Position(0.5, 1.5),
                color: Application.ƒS.Color.CSS("white", 0),
            },
            duration: 1,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.fromCenterToLeft = fromCenterToLeft;
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
                friendly: "./Images/Characters/wilma_friendly.png",
                grumpy: "./Images/Characters/wilma_grumpy.png",
                laughing: "./Images/Characters/wilma_laughing.png",
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
        },
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
            background: "./Images/Backgrounds/harbour.png",
        },
        library: {
            name: "Bücherei",
            background: "./Images/Backgrounds/library.png",
        },
        bar: {
            name: "Kneipe",
            background: "./Images/Backgrounds/bar.png",
        },
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
        credits: "Credits",
    };
    function showCredits() {
        Application.ƒS.Text.setClass("credits");
        Application.ƒS.Text.print("<b>Credits</b>\
        <p>Carina Spangenberger</p>");
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
        click: "",
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
        },
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Bar() {
        console.log("Bar");
        Application.dataForSave.visitedBar = true;
        let text = {
            uwe: {
                T0000: "hallo.",
            },
        };
        // show background
        await Application.ƒS.Location.show(Application.locations.bar);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character uwe
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
            iSayNo: "Nein",
        };
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
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Bar = Bar;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Cafe() {
        console.log("Café");
        Application.dataForSave.visitedCafe = true;
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.cafe);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character elise
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Cafe = Cafe;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Harbor() {
        console.log("Harbor");
        Application.dataForSave.visitedHarbor = true;
        let text = {
            wilma: {
                T0000: "Hallo.",
            },
        };
        // Anzeigen von Background
        await Application.ƒS.Location.show(Application.locations.port);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge); // transition
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show charakter wilma
        await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.wilma, text.wilma.T0000);
        await Application.ƒS.Character.hide(Application.characters.wilma);
        await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.grumpy, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.wilma, text.wilma.T0000);
        await Application.ƒS.Character.hide(Application.characters.wilma);
        await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.wilma, text.wilma.T0000);
        await Application.ƒS.Character.hide(Application.characters.wilma);
        await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.laughing, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update();
        await Application.ƒS.Speech.tell(Application.characters.wilma, text.wilma.T0000);
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Harbor = Harbor;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Intro() {
        console.log("Intro");
        // show background
        await Application.ƒS.Location.show(Application.locations.cafe);
        // transition
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Tante Elise!");
        // show character elise
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hallo Lara, schön dich zu sehen!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Komm herein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Stell deinen Koffer einfach an der Treppe ab und setz dich erstmal an die Theke.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Heute ist zum Glück nicht allzu viel los im Café, dann können wir direkt ein bisschen quatschen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Was darf ich dir zu trinken anbieten?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wasser, Früchtetee, Apfelsaft oder eine heiße Schokolade?");
        // CHOICE
        let chooseDrinkOptions = {
            water: "Wasser",
            tea: "Früchtetee",
            applejuice: "Apfelsaft",
            hotChocolate: "Heiße Schokolade",
        };
        let chooseDrink = await Application.ƒS.Menu.getInput(chooseDrinkOptions, "choice");
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Kommt sofort.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich freue mich so sehr darauf die Herbstferien wieder bei dir verbringen zu dürfen!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich hoffe es wird dir nicht zu langweilig!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Immerhin ist hier gerade nicht viel los.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die Saison ist vorbei und die meisten Bewohner der Insel sind jetzt selbst auf dem Weg in den Urlaub.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die Leute hier kann man aktuell an einer Hand abzählen.");
        // CHOICE Ergebnis
        switch (chooseDrink) {
            case chooseDrinkOptions.water:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Hier, dein Wasser.");
                break;
            case chooseDrinkOptions.tea:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Hier, dein Früchtetee.");
                break;
            case chooseDrinkOptions.applejuice:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Hier, dein Apfelsaft.");
                break;
            case chooseDrinkOptions.applejuice:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Hier, deine heiße Schokolade.");
                break;
        }
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Möchtest du auch einen Cupcake?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Oh ja, sehr gerne!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Bitteschön.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, lecker!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du bist wirklich die beste Konditorin der Welt!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Haha, das ist lieb!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Stell dir vor, ich habe dafür gestern tatsächlich einen Preis auf der kleinen Nachbarsinsel gewonnen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "„Bester Cupcake der Inselgruppe“ – Moment, ich hole ihn schnell.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "…");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hier: eine Spardose in Cupcake-Form mit einem Preisgeld von stolzen 4000€.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wow!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Nicht schlecht, Tante Elise!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist eine Menge Geld!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber huch - Die Spardose ist ja leer!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wie leer?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Zeig mal!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "…");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Oh Schreck, du hast Recht!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das ganze Geld ist weg.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das kann doch gar nicht sein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Jemand muss es gestohlen haben!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wer hätte das Preisgeld denn aus der Spardose an sich nehmen können?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Heute hatte ich die Spardose den ganzen Morgen lang im Blick.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Da hat sich ihr niemand genähert.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Es muss also gestern Abend gewesen sein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wir haben zusammen auf meinen Gewinn angestoßen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das waren Uwe, Wilma, Gabi und ich.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Dann gibt es also drei Verdächtige.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Die Namen sagen mir noch etwas.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ja, du solltest sie alle von deinem letzten Urlaub hier auf der Insel kennen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist aber schon echt lange her!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Magst du mir vielleicht nochmal eine kurze Vorstellung geben?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Na klar!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Also, zum einen ist da Uwe.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ihm gehört die kleine Kneipe unten am Wasser.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Er ist sehr schüchtern und leise.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber er hat das Herz am richtigen Fleck. *wird rot*");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wilma sollte dir ebenfalls noch bekannt sein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie ist die junge Fischerin, die unten am Hafen ihren Stand hat.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie ist immer fröhlich und gut gelaunt und ganz schön kreativ.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ein echter Wirbelwind.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und als letztes noch Gabi, Wilmas Mama.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie leitet unsere kleine Inselbücherei.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie wirkt immer ein wenig distanziert und sehr streng.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber sie ist mit Abstand am Längsten auf der Insel und unser Fels in der Brandung.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie hat für alle einen guten Rat.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und der Dieb muss einer von ihnen gewesen sein?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich kann es mir ehrlich gesagt nicht vorstellen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber eine andere Erklärung gibt es nicht.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Gestern Abend hätte jeder von ihnen ganz einfach und unbemerkt das Geld aus der Spardose nehmen können.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Niemand sonst war seitdem in ihrer Nähe.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, das vereinfacht die Suche nach dem Geld natürlich.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Weißt du was, Tante Elise?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich werde in dem Fall ermitteln.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ermitteln?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich werde alle Anwesenden von gestern befragen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und heute Abend werde ich den Fall auflösen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bei einem gemeinsamen Abendessen heute werde ich den Täter entlarven.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ehm.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ob das eine so gute Idee ist?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Naja, wieso eigentlich nicht.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich bin ja froh, wenn du dich nicht langweilen musst.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und heute Abend wollte sowieso etwas besonders zum Essen zaubern.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Lade gerne alle zum Abendessen hier im Café ein!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Super, du bist die Beste!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich mache mich direkt auf den Weg.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Intro = Intro;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Library() {
        console.log("Library");
        Application.dataForSave.visitedLibrary = true;
        let text = {
            gabi: {
                T0000: "Hallo.",
            },
        };
        // show background
        await Application.ƒS.Location.show(Application.locations.library);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character gabi
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
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Library = Library;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function NextLocationChoice() {
        console.log("NextLocationChoice");
        let chooseNextLocationOptions = {
            library: "Zu Gabi in die Bücherei",
            harbor: "Zu Wilma an den Hafen",
            cafe: "Zu Tante Elise ins Café",
            bar: "Zu Uwe in die Kneipe",
        };
        if (Application.dataForSave.visitedLibrary) {
            delete chooseNextLocationOptions.library;
        }
        if (Application.dataForSave.visitedHarbor) {
            delete chooseNextLocationOptions.harbor;
        }
        if (Application.dataForSave.visitedCafe) {
            delete chooseNextLocationOptions.cafe;
        }
        if (Application.dataForSave.visitedBar) {
            delete chooseNextLocationOptions.bar;
        }
        if (Object.entries(chooseNextLocationOptions).length == 0) {
            return "Outro";
        }
        let chooseNextLocation = await Application.ƒS.Menu.getInput(chooseNextLocationOptions, "locationChoice");
        switch (chooseNextLocation) {
            case chooseNextLocationOptions.library:
                return "Bücherei";
            case chooseNextLocationOptions.harbor:
                return "Hafen";
            case chooseNextLocationOptions.cafe:
                return "Café";
            case chooseNextLocationOptions.bar:
                return "Kneipe";
        }
    }
    Application.NextLocationChoice = NextLocationChoice;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Outro() {
        console.log("Outro");
        let text = {
            lara: {
                T0000: "Wer wars?",
            },
        };
        // show background
        await Application.ƒS.Location.show(Application.locations.cafe);
        // transition
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        await Application.ƒS.Speech.tell(Application.characters.lara, text.lara.T0000);
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
    }
    Application.Outro = Outro;
})(Application || (Application = {}));
//# sourceMappingURL=VisualNovel.js.map