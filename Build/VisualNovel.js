"use strict";
var Application;
(function (Application) {
    /**
     * TODO
     * - favicon
     * - Transitions: screen size fix
     * - focused buton
     * - Vorschaubild (Köpfe in Kreisen?)
     * - Name für VN
     * - Sound/Musik
     * */
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
                friendly: "./Images/Characters/elise_friendly.png",
                shocked: "./Images/Characters/elise_shocked.png",
                blushed: "./Images/Characters/elise_blushed.png",
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
                blushed: "./Images/Characters/uwe_blushed.png",
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
    function showCredits() {
        Application.ƒS.Text.setClass("credits");
        let credits = "<h1>CREDITS</h1>\
      <table>\
        <tr>\
          <td>Story</td>\
          <td>Carina Spangenberger</td>\
        </tr>\
        <tr>\
          <td>Charaktere</td>\
          <td>Carina Spangenberger</td>\
        </tr>\
        <tr>\
          <td>Hintergründe</td>\
          <td>Carina Spangenberger</td>\
        </tr>\
        <tr>\
          <td>Musik & Sounds</td>\
          <td>. . .</td>\
        </tr>\
        <tr>\
          <td>Transition-Bilder</td>\
          <td>. . .</td>\
        </tr>\
        <tr>\
          <td>Programmierung</td>\
          <td>Carina Spangenberger</td>\
        </tr>\
      </table>\
      <p>Erstellt mit FUDGE Story\
      <br\> (a Furtwangen University Didactic Game Editor Modul)</p>\
      ";
        Application.ƒS.Text.print(credits);
    }
    Application.showCredits = showCredits;
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
            static: true,
        },
        letter: {
            name: "Liebesbrief von Uwe",
            description: "Ein Liebesbrief von Uwe an Elise.",
            image: "./Images/Items/liebesbrief_inventory.png",
            static: true,
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
                Application.showCredits();
                break;
            case Application.gameMenuOptions.shortcuts:
                Application.showShortcuts();
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
    function showShortcuts() {
        Application.ƒS.Text.setClass("shortcuts");
        let credits = "<h1>Steuerung</h1>\
      <table>\
        <tr>\
          <th>Taste</th>\
          <th>Funktion</th>\
        </tr>\
        <tr>\
          <td>ESC</td>\
          <td>Menü öffnen und schließen</td>\
        </tr>\
        <tr>\
          <td>I</td>\
          <td>Inventar öffnen und schließen</td>\
        </tr>\
        <tr>\
          <td>F8</td>\
          <td>Szene speichern</td>\
        </tr>\
        <tr>\
          <td>F9</td>\
          <td>Szene laden</td>\
        </tr>\
      </table>\
      ";
        Application.ƒS.Text.print(credits);
    }
    Application.showShortcuts = showShortcuts;
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
        // show background
        await Application.ƒS.Location.show(Application.locations.bar);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character uwe
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Uwe!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Hallo Lara!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Lang nicht gesehen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wie war deine Reise?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Danke, bis auf die Fahrt mit dem Schiff war es super langweilig.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber dafür war meine Ankunft war direkt sehr spannend!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das Preisgeld von Tante Elise wurde nämlich geklaut.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Oh nein!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Dann hat sie es also doch getan . . .");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wie meinst du das?");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ähmm naja, also . . .");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Du musst versprechen, dass du es für dich behältst, ja?");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma hat mir gestern erzählt, dass sie mit dem Gedanken spielt, die Spardose zu klauen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Weißt du, Wilma hat es nicht gerade einfach.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ohne Vater aufzuwachsen war nicht leicht für sie.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Mit ihrer Mutter Gabi streitet sie sehr oft.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Irgendwann hat sie das Spielen angefangen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Glücksspiel, weißt du? Sie hat schnell viel Geld verloren.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber sie kommt da einfach nicht mehr von alleine raus.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Niemand außer mir weiß davon.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Noch nicht einmal Gabi.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Oha, das klingt ja gar nicht gut.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich habe ihr erst gestern Abend eine ziemliche Standpauke gehalten.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Kurz danach hatte ich ein ziemlich schlechtes Gewissen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich wollte ihr sagen, dass ich ihr helfen kann und sie unterstütze.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber sie meinte sie hat einen Plan und schaffe das selbst.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wenn du mich fragst, hat Wilma das Geld gestohlen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Vor lauter Stolz muss sie dies als letzten Ausweg gesehen haben.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wow, das habe ich nicht erwartet.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Bitte behalte das für dich.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma möchte bestimmt nicht, dass sich ihre Probleme herumsprechen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich weiß es ist nicht einfach, aber ich denke, wir sollten die Sache einfach ruhen lassen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Früher oder später wird Wilma es Elise erzählen und das Geld bestimmt zurückzahlen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Sie ist ein herzensguter Mensch.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ja, sie ist immer so fröhlich und unbeschwert.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Sei nicht traurig.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma ist erwachsen und ich werde sie so gut ich kann unterstützen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wahnsinn, ich glaube, so viel habe ich noch nie geredet.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wenn du magst, hole ich dir noch ein Eis von hinten aus der Kühltruhe.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich bin gleich zurück!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Der kleine Tresor sieht ja interessant aus.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich frage mich, was Uwe darin versteckt.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ob ich wohl mal einen Blick hineinwerfen sollte?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht finde ich dort das Preisgeld?");
        // COHICE look into safe
        let chooseActionOptions = {
            look: "Versuchen, den Tresor zu öffnen",
            wait: "Die Finger vom Tresor lassen",
        };
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.look:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich will versuchen, einen Blick hineinzuwerfen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Schließlich ermittle ich gerade.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, ich brauche wohl einen Code, um den Tresor zu öffnen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "So vergesslich wie ich Uwe in Erinnerung habe, hat er ihn bestimmt irgendwo aufgeschrieben und in der Nähe abgelegt.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Wo könnte der Code wohl sein?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht finde ich ihn in der Schublade hinter der Theke.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, da ist nichts.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht hinter den Flaschen im Regal?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Tatsächlich, da ist er ja.");
                //
                await Application.ƒS.Speech.tell(Application.characters.lara, "So, mal schauen, ob das funktioniert.");
                // Input
                await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist ja interessant.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Uwe wollte Elise wohl seine Liebe mit diesem Liebesbrief gestehen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Wieso er wohl so zerknittert ist? Ich frage mich, was damit passiert ist.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich lege den Brief besser wieder zurück.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Und jetzt den Tresor noch verschließen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, ". . .");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ohh und da kommt Uwe auch schon wieder.");
                break;
            case chooseActionOptions.wait:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, ich kann nicht einfach in die Privatsphäre von Uwe eingreifen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Immerhin holt er mir gerade ein Eis.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich warte einfach, bis er wieder da ist.");
                break;
        }
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Soo, endlich habe ich die doofe klemmende Türe des Kühlfaches aufbekommen!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Bitteschön, hier dein Eis.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Lass es dir schmecken.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Dankeschön!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Tante Elise hat mich gebeten, dich heute zum gemeinsamen Abendessen einzuladen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Um 18:30 Uhr bei ihr im Café.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ohh, tatsächlich? *wird rot*");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Da kann ich nicht nein sagen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Super, dann geh ich mal.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bis heute Abend!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        // choose next location
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
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.friendly, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Tante Elise!");
        // show character elise
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hallo Lara, schön dich zu sehen!");
        /*
    
        await ƒS.Speech.tell(characters.elise, "Komm herein.");
        await ƒS.Speech.tell(characters.elise, "Stell deinen Koffer einfach an der Treppe ab und setz dich erstmal an die Theke.");
        await ƒS.Speech.tell(characters.elise, "Heute ist zum Glück nicht allzu viel los im Café, dann können wir direkt ein bisschen quatschen.");
        await ƒS.Speech.tell(characters.elise, "Was darf ich dir zu trinken anbieten?");
        await ƒS.Speech.tell(characters.elise, "Wasser, Früchtetee, Apfelsaft oder eine heiße Schokolade?");
    
        // CHOICE
        let chooseDrinkOptions = {
          water: "Wasser",
          tea: "Früchtetee",
          applejuice: "Apfelsaft",
          hotChocolate: "Heiße Schokolade",
        };
        let chooseDrink = await ƒS.Menu.getInput(chooseDrinkOptions, "choice");
    
        // dialog
        await ƒS.Speech.tell(characters.elise, "Kommt sofort.");
    
        await ƒS.Speech.tell(characters.lara, "Ich freue mich so sehr darauf die Herbstferien wieder bei dir verbringen zu dürfen!");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Ich hoffe es wird dir nicht zu langweilig!");
        await ƒS.Speech.tell(characters.elise, "Immerhin ist hier gerade nicht viel los.");
        await ƒS.Speech.tell(characters.elise, "Die Saison ist vorbei und die meisten Bewohner der Insel sind jetzt selbst auf dem Weg in den Urlaub.");
        await ƒS.Speech.tell(characters.elise, "Die Leute hier kann man aktuell an einer Hand abzählen.");
    
        // change elises pose to friendly
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        // CHOICE Ergebnis
        switch (chooseDrink) {
          case chooseDrinkOptions.water:
            await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Wasser.");
            break;
          case chooseDrinkOptions.tea:
            await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Früchtetee.");
            break;
          case chooseDrinkOptions.applejuice:
            await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist dein Apfelsaft.");
            break;
          case chooseDrinkOptions.hotChocolate:
            await ƒS.Speech.tell(characters.elise, "Soo, bitteschön, hier ist deine heiße Schokolade.");
            break;
        }
    
        // dialog
        await ƒS.Speech.tell(characters.elise, "Möchtest du auch einen Cupcake?");
    
        await ƒS.Speech.tell(characters.lara, "Oh ja, sehr gerne!");
    
        await ƒS.Speech.tell(characters.elise, "Bitteschön.");
    
        await ƒS.Speech.tell(characters.lara, "Hmm, lecker!");
        await ƒS.Speech.tell(characters.lara, "Du bist wirklich die beste Konditorin der Welt!");
    
        // change elises pose to laughing
    
        await ƒS.Speech.tell(characters.elise, "Haha, das ist lieb!");
    
        // change elises pose to friendly
    
        await ƒS.Speech.tell(characters.elise, "Stell dir vor, ich habe dafür gestern tatsächlich einen Preis auf der kleinen Nachbarsinsel gewonnen.");
        await ƒS.Speech.tell(characters.elise, "„Bester Cupcake der Inselgruppe“ – Moment, ich hole ihn schnell.");
        await ƒS.Speech.tell(characters.elise, "…");
        await ƒS.Speech.tell(characters.elise, "Hier: eine Spardose in Cupcake-Form mit einem Preisgeld von stolzen 4000€.");
        
        // change laras pose to surprised
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.surprised, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
        
        await ƒS.Speech.tell(characters.lara, "Wow!");
    
        // change laras pose to friendly
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Nicht schlecht, Tante Elise!");
        await ƒS.Speech.tell(characters.lara, "Das ist eine Menge Geld!");
    
        // change laras pose to surprised
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.surprised, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Aber huch - Die Spardose ist ja leer!");
    
        // change elises pose to shocked
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Wie leer?");
        await ƒS.Speech.tell(characters.elise, "Zeig mal!");
        await ƒS.Speech.tell(characters.elise, "…");
        await ƒS.Speech.tell(characters.elise, "Oh Schreck, du hast Recht!");
        await ƒS.Speech.tell(characters.elise, "Das ganze Geld ist weg.");
        await ƒS.Speech.tell(characters.elise, "Das kann doch gar nicht sein.");
        await ƒS.Speech.tell(characters.elise, "Jemand muss es gestohlen haben!");
    
        // change laras pose to suspicious
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.suspicious, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Wer hätte das Preisgeld denn aus der Spardose an sich nehmen können?");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Heute hatte ich die Spardose den ganzen Morgen lang im Blick.");
        await ƒS.Speech.tell(characters.elise, "Da hat sich ihr niemand genähert.");
        await ƒS.Speech.tell(characters.elise, "Es muss also gestern Abend gewesen sein.");
        await ƒS.Speech.tell(characters.elise, "Wir haben zusammen auf meinen Gewinn angestoßen.");
        await ƒS.Speech.tell(characters.elise, "Das waren Uwe, Wilma, Gabi und ich.");
    
        await ƒS.Speech.tell(characters.lara, "Dann gibt es also drei Verdächtige.");
        await ƒS.Speech.tell(characters.lara, "Die Namen sagen mir noch etwas.");
    
        await ƒS.Speech.tell(characters.elise, "Ja, du solltest sie alle von deinem letzten Urlaub hier auf der Insel kennen.");
    
        // change laras pose to neutral
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Das ist aber schon echt lange her!");
        await ƒS.Speech.tell(characters.lara, "Magst du mir vielleicht nochmal eine kurze Vorstellung geben?");
    
        await ƒS.Speech.tell(characters.elise, "Na klar!");
        await ƒS.Speech.tell(characters.elise, "Also, zum einen ist da Uwe.");
        await ƒS.Speech.tell(characters.elise, "Ihm gehört die kleine Kneipe unten am Wasser.");
        await ƒS.Speech.tell(characters.elise, "Er ist sehr schüchtern und leise.");
    
        // change elises pose to blushed
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.blushed, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Aber er hat das Herz am richtigen Fleck.");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Wilma sollte dir ebenfalls noch bekannt sein.");
        await ƒS.Speech.tell(characters.elise, "Sie ist die junge Fischerin, die unten am Hafen ihren Stand hat.");
        
        // change elises pose to friendly
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Sie ist immer fröhlich und gut gelaunt und ganz schön kreativ.");
        await ƒS.Speech.tell(characters.elise, "Ein echter Wirbelwind.");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Und als letztes noch Gabi, Wilmas Mama.");
        await ƒS.Speech.tell(characters.elise, "Sie leitet unsere kleine Inselbücherei.");
        await ƒS.Speech.tell(characters.elise, "Sie wirkt immer ein wenig distanziert und sehr streng.");
        
        // change elises pose to friendly
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Aber sie ist mit Abstand am Längsten auf der Insel und unser Fels in der Brandung.");
        await ƒS.Speech.tell(characters.elise, "Wilma ist ihr ein und alles. Für sie würde sie alles tun.");
    
        // change laras pose to suspicious
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.suspicious, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Und der Dieb muss einer von ihnen gewesen sein?");
    
        // change elises pose to shocked
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Ich kann es mir ehrlich gesagt nicht vorstellen.");
        await ƒS.Speech.tell(characters.elise, "Aber eine andere Erklärung gibt es nicht.");
        await ƒS.Speech.tell(characters.elise, "Gestern Abend hätte jeder von ihnen ganz einfach und unbemerkt das Geld aus der Spardose nehmen können.");
        await ƒS.Speech.tell(characters.elise, "Niemand sonst war seitdem in ihrer Nähe.");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Hmm, das vereinfacht die Suche nach dem Geld natürlich.");
    
        // change laras pose to friendly
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Weißt du was, Tante Elise?");
        await ƒS.Speech.tell(characters.lara, "Ich werde in dem Fall ermitteln.");
    
        // change elises pose to shocked
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.shocked, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Ermitteln?");
    
        await ƒS.Speech.tell(characters.lara, "Ich werde alle Anwesenden von gestern befragen.");
        await ƒS.Speech.tell(characters.lara, "Und heute Abend werde ich den Fall auflösen.");
        await ƒS.Speech.tell(characters.lara, "Bei einem gemeinsamen Abendessen heute werde ich den Täter entlarven.");
    
        // change elises pose to neutral
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.neutral, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Ehm.");
        await ƒS.Speech.tell(characters.elise, "Ob das eine so gute Idee ist?");
    
        // change laras pose to neutral
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.neutral, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        // change elises pose to friendly
        await ƒS.Character.hide(characters.elise);
        await ƒS.Character.show(characters.elise, characters.elise.pose.friendly, ƒS.positionPercent(75, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.elise, "Naja, wieso eigentlich nicht.");
        await ƒS.Speech.tell(characters.elise, "Ich bin ja froh, wenn du dich nicht langweilen musst.");
        await ƒS.Speech.tell(characters.elise, "Und heute Abend wollte sowieso etwas besonders zum Essen zaubern.");
        await ƒS.Speech.tell(characters.elise, "Lade gerne alle zum Abendessen hier im Café ein!");
    
        // change laras pose to friendly
        await ƒS.Character.hide(characters.lara);
        await ƒS.Character.show(characters.lara, characters.lara.pose.friendly, ƒS.positionPercent(25, 100));
        await ƒS.update(0.2);
    
        await ƒS.Speech.tell(characters.lara, "Super, du bist die Beste!");
        await ƒS.Speech.tell(characters.lara, "Ich mache mich direkt auf den Weg.");
    
        */
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
        // show background
        await Application.ƒS.Location.show(Application.locations.library);
        await Application.ƒS.update(Application.transitions.clock.duration, Application.transitions.clock.alpha, Application.transitions.clock.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        //monolog
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, keiner da?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Im Nebenraum höre ich jemanden leise telefonieren.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ob das Gabi ist?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Sollte ich lauschen oder mich lieber bemerkbar machen?");
        // COHICE listen to phone call
        let chooseActionOptions = {
            overhear: "Telefonat belauschen",
            makeNoticebale: "Bemerkbar machen",
        };
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.overhear:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ein kleines bisschen lauschen hat noch niemandem geschadet.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Und vielleicht bekomme ich ja ein paar Hinweise zum Diebstahl.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Ja ja, ich werde das Geld so schnell wie möglich bezahlen . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Wissen sie, meine Tochter . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Sie weiß doch nichts davon . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Das ist alles nicht so einfach, wie Sie denken . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Ich muss jetzt auflegen . . .");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Was hat das denn zu bedeuten?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Gabi scheint etwas zu verbergen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hat sie etwa Geldprobleme?");
                break;
            case chooseActionOptions.makeNoticebale:
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, fremde Telefongespräche belauschen gehört sich absolut nicht.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich mache mich lieber bemerkbar.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "HAAALLOOO! Gabi, bist du da?");
                break;
        }
        // show character gabi
        await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.overhear:
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ach du meine Güte, du hast mich jetzt aber erschreckt.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe gar nicht gehört, dass du hereingekommen bist.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich musste noch ein wichtiges Telefonat führen.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Du hast doch hoffentlich nicht allzu lange warten müssen?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Gabi!");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, nein, ähhhm, ich, also ähhm, ich bin gerade erst gekommen.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Soso . . .");
                break;
            case chooseActionOptions.makeNoticebale:
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Hallo, Lara!");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Schön, dass du vorbeischaust.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Mensch, bist du groß geworden!");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Gabi!");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Tut mir leid, dass ich Dein Telefonat unterbrochen habe, aber ich wollte nicht lauschen.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich weiß es zu schätzen, dass du so ehrlich bist.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich wollte das Gespräch sowieso gerade beenden.");
                break;
        }
        //dialog
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie kann ich dir denn helfen?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das Preisgeld von Tante Elise wurde gestohlen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich wollte mal hören, ob du etwas Verdächtiges bemerkt hast.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie bitte?");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Die 4000€ Preisgeld von Elise wurden gestohlen?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ja, gestern Abend bei eurem gemeinsamen Treffen bei Tante Elise!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Oha.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir leid, das sagen zu müssen.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Aber dann bin ich mir sehr sicher zu wissen, wer das gewesen ist.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Tatsächlich?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wer denn?");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Uwe natürlich!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er hat sich den ganzen Abend sehr komisch verhalten.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Zuerst habe ich mitbekommen, wie er Wilma ziemlich heruntergemacht hat.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Dann muss er Elise ziemlich wütend gemacht haben.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Sie ist ihm den ganzen restlichen Abend aus dem Weg gegangen.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Nachdem Elise verkündet hat, mit dem Geld die Insel zu verlassen, habe ich gesehen, wie er krampfhaft an der Spardose herumgefummelt hat.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich hatte gar keine Zeit, ihn darauf anzusprechen.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er hat die Party direkt im Anschluss sehr eilig verlassen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist ja interessant.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber was wäre sein Motiv? Hat er Geldprobleme?");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Puh, ich weiß nicht so recht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Darüber habe ich mit ihm noch nie geredet.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich vermute eher einen anderen Grund.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Weißt du, es ist folgendermaßen:");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Der Gute ist schon lange in Elise verliebt.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Seitdem sie den ersten Schritt auf die Insel gesetzt hat, hat er nur noch Augen für sie.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Nachdem sie gestern so plötzlich angekündigt hat, die Insel mit dem Geld verlassen zu wollen . . .");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich meine, das Geld zu stehlen war offensichtlich der klägliche Versuch, sie nicht zu verlieren.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er sah keinen anderen Ausweg, als ihr die Mittel zu nehmen, mit denen sie an einen anderen Ort gehen kann.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wenn du mich fragst, ist Uwe der Dieb des Geldes.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, das klingt durchaus plausibel.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ach du liebe Güte, jetzt habe ich mich aber verquatscht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie schnell die Zeit vergeht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich muss langsam los, Lara, ich habe noch etwas zu erledigen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Moment, eines noch:");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Elise kocht heute Abend.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Um 18:30 Uhr bei ihr im Café.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Was für eine schöne Einladung!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Vielen Dank.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Dann sehen wir uns wohl heute Abend nochmal.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Und mach dir nicht zu viele Gedanken wegen des Diebstahls.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Vielleicht ist es besser, wenn wir es einfach ruhen lassen.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Uwe wird schon wissen was er tut und früher oder später bringt er das Geld bestimmt zurück.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Machs gut und bis heute Abend!");
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
        let chooseNextLocation = await Application.ƒS.Menu.getInput(chooseNextLocationOptions, "choice");
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