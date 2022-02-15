"use strict";
var Application;
(function (Application) {
    Application.ƒ = FudgeCore;
    Application.ƒS = FudgeStory;
    Application.dataForSave = {
        visitedBar: false,
        visitedCafe: false,
        visitedLibrary: false,
        visitedHarbor: false,
        triedToAccuseAll: false,
    };
    window.addEventListener("load", start);
    // text pace: pauses used by ticker between letters and before a paragraph in milliseconds
    Application.ƒS.Speech.setTickerDelays(25, 100);
    function start(_event) {
        // create menu
        Application.gameMenu = Application.ƒS.Menu.create(Application.gameMenuOptions, Application.buttonFunctionalities, "gameMenu");
        // scenes and ids: { id: "Id", scene: Scene, name: "Scene" } -> here: except for intro non-linear: order is given by id
        let scenes = [
            { scene: Application.Intro, name: "Intro" },
            { id: "NextLocationChoice", scene: Application.NextLocationChoice, name: "" },
            { id: "Kneipe", scene: Application.Bar, name: "Kneipe" },
            { id: "Bücherei", scene: Application.Library, name: "Bücherei" },
            { id: "Hafen", scene: Application.Harbor, name: "Hafen" },
            { id: "Café", scene: Application.Cafe, name: "Café" },
            { id: "Outro", scene: Application.Outro, name: "Outro" },
            { id: "AccusedWilma", scene: Application.AccusedWilma, name: "AccusedWilma", next: "EndOfNovel" },
            { id: "AccusedGabi", scene: Application.AccusedGabi, name: "AccusedGabi", next: "EndOfNovel" },
            { id: "AccusedUwe", scene: Application.AccusedUwe, name: "AccusedUwe", next: "EndOfNovel" },
            { id: "AccusedElise", scene: Application.AccusedElise, name: "AccusedElise", next: "EndOfNovel" },
            { id: "AccusedAll", scene: Application.AccusedAll, name: "AccusedAll", next: "EndOfNovel" },
            { id: "EndOfNovel", scene: Application.EndOfNovel, name: "EndOfNovel" },
        ];
        let uiElement = document.querySelector("[type=interface]");
        Application.dataForSave = Application.ƒS.Progress.setData(Application.dataForSave, uiElement);
        function preloadCharacterPoses() {
            Object.keys(Application.characters).forEach((characterName) => {
                Object.keys(Application.characters[characterName].pose).forEach(characterPose => {
                    Application.ƒS.Character.get(Application.characters[characterName]).getPose(Application.characters[characterName].pose[characterPose]);
                });
            });
        }
        ;
        preloadCharacterPoses();
        // start the sequence
        Application.ƒS.Progress.go(scenes);
    }
})(Application || (Application = {}));
var Application;
(function (Application) {
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
    function from75To90() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(75, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(90, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from75To90 = from75To90;
    function from90To75() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(90, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(75, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from90To75 = from90To75;
    function from75ToOutside() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(75, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(120, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from75ToOutside = from75ToOutside;
    function fromOutsideTo75() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(120, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(75, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.fromOutsideTo75 = fromOutsideTo75;
    function from25To40() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(25, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(40, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from25To40 = from25To40;
    function from40To25() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(40, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(25, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from40To25 = from40To25;
    function from25To80() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(25, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(80, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from25To80 = from25To80;
    function from80To25() {
        return {
            start: {
                translation: Application.ƒS.positionPercent(80, 100),
            },
            end: {
                translation: Application.ƒS.positionPercent(25, 100),
            },
            duration: 2,
            playmode: Application.ƒS.ANIMATION_PLAYMODE.PLAYONCE,
        };
    }
    Application.from80To25 = from80To25;
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
        narrator: {
            name: "",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {}
        },
        lara: {
            name: "Lara",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Assets/Characters/lara_neutral.png",
                friendly: "./Assets/Characters/lara_friendly.png",
                laughing: "./Assets/Characters/lara_laughing.png",
                pensive: "./Assets/Characters/lara_pensive.png",
                shocked: "./Assets/Characters/lara_shocked.png",
                suspicious: "./Assets/Characters/lara_suspicious.png",
            },
        },
        elise: {
            name: "Elise",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Assets/Characters/elise_neutral.png",
                friendly: "./Assets/Characters/elise_friendly.png",
                laughing: "./Assets/Characters/elise_laughing.png",
                grumpy: "./Assets/Characters/elise_grumpy.png",
                pensive: "./Assets/Characters/elise_pensive.png",
                shocked: "./Assets/Characters/elise_shocked.png",
                blushed: "./Assets/Characters/elise_blushed.png",
            },
        },
        wilma: {
            name: "Wilma",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Assets/Characters/wilma_neutral.png",
                friendly: "./Assets/Characters/wilma_friendly.png",
                grumpy: "./Assets/Characters/wilma_grumpy.png",
                pensive: "./Assets/Characters/wilma_pensive.png",
                laughing: "./Assets/Characters/wilma_laughing.png",
                shocked: "./Assets/Characters/wilma_shocked.png",
            },
        },
        uwe: {
            name: "Uwe",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Assets/Characters/uwe_neutral.png",
                friendly: "./Assets/Characters/uwe_friendly.png",
                pensive: "./Assets/Characters/uwe_pensive.png",
                shocked: "./Assets/Characters/uwe_shocked.png",
                blushed: "./Assets/Characters/uwe_blushed.png",
            },
        },
        gabi: {
            name: "Gabi",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Assets/Characters/gabi_neutral.png",
                friendly: "./Assets/Characters/gabi_friendly.png",
                sad: "./Assets/Characters/gabi_sad.png",
                pensive: "./Assets/Characters/gabi_pensive.png",
                shocked: "./Assets/Characters/gabi_shocked.png",
                grumpy: "./Assets/Characters/gabi_grumpy.png",
            },
        },
    };
    async function changePose(character, pose, position) {
        await Application.ƒS.Character.hide(character);
        await Application.ƒS.Character.show(character, character.pose[pose], position);
        await Application.ƒS.update(0.2);
    }
    Application.changePose = changePose;
    ;
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
          <td>Musik</td>\
          <td>www.bensound.com</td>\
        </tr>\
        <tr>\
          <td>Soundeffekte</td>\
          <td>www.quicksounds.com, www.zapsplat.com</td>\
        </tr>\
        <tr>\
          <td>Programmierung</td>\
          <td>Carina Spangenberger</td>\
        </tr>\
      </table>\
      <p><br>Erstellt mit FUDGE Story\
      ";
        Application.ƒS.Text.print(credits);
    }
    Application.showCredits = showCredits;
})(Application || (Application = {}));
var Application;
(function (Application) {
    /**
     *   id of the item: {
       *    name: "Name of the item", // also used to identify it,
       *    description: "Short description to show in the inventory",
       *    image: "path to the image to be used as icon",
       *    static: true // if the item can't be consumed
     *   }
     */
    Application.items = {
        bills: {
            name: "Rechnungen von Wilma",
            origin: Application.ƒS.ORIGIN.CENTER,
            pose: {
                default: "./Assets/Items/letter_wilma.png",
            }
        },
        code: {
            name: "Zahlencode für Uwes Tresor",
            origin: Application.ƒS.ORIGIN.CENTER,
            pose: {
                default: "./Assets/Items/code_safe_uwe.png",
            }
        },
        cupcake: {
            name: "Cupcake-Spardose",
            origin: Application.ƒS.ORIGIN.CENTER,
            pose: {
                default: "./Assets/Items/cupcake_box.png",
            }
        },
        drink: {
            name: "Getränk",
            origin: Application.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                hotchocolate: "./Assets/Items/hot_chocolate.png",
                water: "./Assets/Items/water.png",
                applejuice: "./Assets/Items/applejuice.png",
                tea: "./Assets/Items/tea.png",
            }
        },
        loveletter: {
            name: "Liebesbrief von Uwe",
            origin: Application.ƒS.ORIGIN.CENTER,
            pose: {
                default: "./Assets/Items/letter_uwe.png",
            }
        },
        safe: {
            name: "Tresor von Uwe",
            origin: Application.ƒS.ORIGIN.CENTER,
            pose: {
                default: "./Assets/Items/safe_uwe.png",
            }
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
            background: "./Assets/Backgrounds/cafe.png",
        },
        harbor: {
            name: "Hafen",
            background: "./Assets/Backgrounds/harbor.png",
        },
        library: {
            name: "Bücherei",
            background: "./Assets/Backgrounds/library.png",
        },
        bar: {
            name: "Kneipe",
            background: "./Assets/Backgrounds/bar.png",
        },
        outro: {
            name: "Outro",
            background: "./Assets/Backgrounds/outro.png",
        },
        blend: {
            name: "Übergang",
            background: "./Assets/Backgrounds/blend.png",
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
            case Application.gameMenuOptions.credits:
                Application.showCredits();
                break;
            case Application.gameMenuOptions.shortcuts:
                Application.showShortcuts();
                break;
        }
    }
    Application.buttonFunctionalities = buttonFunctionalities;
    // shortcuts
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
                    Application.inventoryOpen = true;
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
                    console.log("open menu");
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
})(Application || (Application = {}));
var Application;
(function (Application) {
    function showShortcuts() {
        Application.ƒS.Text.setClass("shortcuts");
        let shortcuts = "<h1>Steuerung</h1>\
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
          <td>F8</td>\
          <td>Szene speichern</td>\
        </tr>\
        <tr>\
          <td>F9</td>\
          <td>Szene laden</td>\
        </tr>\
      </table>\
      ";
        Application.ƒS.Text.print(shortcuts);
    }
    Application.showShortcuts = showShortcuts;
})(Application || (Application = {}));
var Application;
(function (Application) {
    Application.sound = {
        // intro
        backgroundIntroHappy: "./Assets/Sound/bensound-littleidea.mp3",
        backgroundIntroMysterious: "./Assets/Sound/bensound-enigmatic.mp3",
        shock: "./Assets/Sound/freesound-shock.wav",
        // bar
        backgroundBar: "./Assets/Sound/bensound-thelounge.mp3",
        barFootstepsFadeOut: "./Assets/Sound/quicksounds-footstepsInteriorCementFadeOut.mp3",
        barFootstepsFadeIn: "./Assets/Sound/quicksounds-footstepsInteriorCementFadeIn.mp3",
        barOpenSafe: "./Assets/Sound/quicksounds-doorOpen.mp3",
        // harbor
        backgroundHarbor: "./Assets/Sound/quicksounds-harborSeagulls.mp3",
        harborRingtone: "./Assets/Sound/zapsplat-ringtone.mp3",
        harborFootstepsFadeOut: "./Assets/Sound/quicksounds-footstepsOutsideFadeOut.mp3",
        harborFootstepsFadeIn: "./Assets/Sound/quicksounds-footstepsOutsideFadeIn.mp3",
        // library
        backgroundLibrary: "./Assets/Sound/freesound-hackneycentrallibrary.wav",
        libraryFootstepsFadeIn: "./Assets/Sound/quicksounds-footstepsStilettoOnWoodenFloorFadeIn.mp3",
        // cafe
        backgroundSoundCafe: "./Assets/Sound/quicksounds-ambienceCoffeeShopQuietLoop.mp3",
        backgroundMusicCafe: "./Assets/Sound/bensound-adaytoremember.mp3",
        // outro 
        tickingClockShort: "./Assets/Sound/quicksounds-tickingClock1.5s.mp3",
        tickingClockLong: "./Assets/Sound/quicksounds-tickingClock3s.mp3",
        backgroundOutro: "./Assets/Sound/bensound-theduel.mp3",
        // ending elise
        backgroundEndingElise: "./Assets/Sound/bensound-november.mp3",
        // ending uwe
        backgroundEndingUwe: "./Assets/Sound/bensound-photoalbum.mp3",
        // ending gabi
        backgroundEndingGabi: "./Assets/Sound/bensound-sadday.mp3",
        // ending wilma
        backgroundEndingWilma: "./Assets/Sound/bensound-ofeliasdream.mp3",
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    /**
     *   id of the transition: {
     *     duration: length of transition ind seconds,
     *     alpha: "path to the image to be used for the transition",
     *     edge: hardness of the transition (smooth 0 - 2 sharp: number between 0 and 2: the lower the number, the softer the transition)
     *   }
     */
    Application.transitions = {
        wave: {
            duration: 2,
            alpha: "./Assets/Transitions/Untitled_Artwork.png",
            edge: 0.2,
        },
        timefiller: {
            duration: 3,
            alpha: "./Assets/Transitions/timefiller.png",
            edge: 1.5,
        },
    };
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Bar() {
        console.log("Visit Bar");
        Application.dataForSave.visitedBar = true;
        // show background
        await Application.ƒS.Location.show(Application.locations.bar);
        // sound
        Application.ƒS.Sound.fade(Application.sound.backgroundBar, 0.2, 3, true);
        // background transition
        await Application.ƒS.update(Application.transitions.wave.duration, Application.transitions.wave.alpha, Application.transitions.wave.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character uwe
        await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Uwe!");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Hallo Lara!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Lang nicht gesehen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wie war deine Reise?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Danke, bis auf die Fahrt mit dem Schiff war es super langweilig.");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber dafür war meine Ankunft direkt sehr spannend!");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das Preisgeld von Tante Elise wurde nämlich geklaut.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Oh nein!");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Dann hat sie es also doch getan . . .");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wie meinst du das?");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ähmm naja, also . . .");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Du musst versprechen, dass du es für dich behältst, ja?");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma hat mir gestern erzählt, dass sie mit dem Gedanken spielt, die Spardose zu klauen.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Weißt du, Wilma hat es nicht gerade einfach.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ohne Vater aufzuwachsen war nicht leicht für sie.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Mit ihrer Mutter Gabi streitet sie sehr oft.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Irgendwann hat sie das Spielen angefangen.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Glücksspiel, weißt du? Sie hat schnell viel Geld verloren.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber sie kommt da einfach nicht mehr von alleine raus.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Niemand außer mir weiß davon.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Noch nicht einmal Gabi.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Oha, das klingt ja gar nicht gut.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich habe ihr erst gestern Abend eine ziemliche Standpauke gehalten.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Kurz danach hatte ich ein ziemlich schlechtes Gewissen.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich wollte ihr sagen, dass ich ihr helfen kann und sie unterstütze.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber sie meinte sie hat einen Plan und schaffe das selbst.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wenn du mich fragst, hat Wilma das Geld gestohlen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Vor lauter Stolz muss sie dies als letzten Ausweg gesehen haben.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wow, das habe ich nicht erwartet.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Bitte behalte das für dich.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma möchte bestimmt nicht, dass sich ihre Probleme herumsprechen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich weiß es ist nicht einfach, aber ich denke, wir sollten die Sache einfach ruhen lassen.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Früher oder später wird Wilma es Elise erzählen und das Geld bestimmt zurückzahlen.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Sie ist ein herzensguter Mensch.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ja, sie ist immer so fröhlich und unbeschwert.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Sei nicht traurig.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wilma ist erwachsen und ich werde sie so gut ich kann unterstützen.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wahnsinn, ich glaube, so viel habe ich noch nie geredet.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wenn du magst, hole ich dir noch ein Eis von hinten aus der Kühltruhe.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich bin gleich zurück!");
        // hide speech
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // sound footsteps
        Application.ƒS.Sound.play(Application.sound.barFootstepsFadeOut, 0.8, false);
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        // animate uwe leaving
        await Application.ƒS.Character.animate(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.from75ToOutside());
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Der kleine Tresor sieht ja interessant aus.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich frage mich, was Uwe darin versteckt.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ob ich wohl mal einen Blick hineinwerfen sollte?");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht finde ich dort das Preisgeld?");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // COHICE look into safe
        let chooseActionOptions = {
            look: "Den Tresor öffnen",
            wait: "Auf Uwe warten",
        };
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.look:
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich will versuchen, einen Blick hineinzuwerfen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Schließlich ermittle ich gerade.");
                // animate lara going to the safe
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from25To40());
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, ich brauche wohl einen Code, um den Tresor zu öffnen.");
                // change laras pose to laughing
                await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "So vergesslich wie ich Uwe in Erinnerung habe, hat er ihn bestimmt irgendwo aufgeschrieben und in der Nähe abgelegt.");
                // change laras pose to suspicious
                await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Wo könnte der Code wohl sein?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht finde ich ihn in der Schublade hinter der Theke.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, da ist nichts.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Vielleicht hinter den Flaschen im Regal?");
                // change laras pose to friendly
                await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Tatsächlich, da ist er ja.");
                // hide lara
                Application.ƒS.Character.hide(Application.characters.lara);
                await Application.ƒS.update(1);
                // show code
                await Application.ƒS.Character.show(Application.items.code, Application.items.code.pose.default, Application.ƒS.positionPercent(50, 50));
                await Application.ƒS.update(1);
                await Application.ƒS.Speech.tell(Application.characters.lara, "Okay, den sollte ich mir kurz merken.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "So, mal schauen, ob das funktioniert.");
                // hide code
                await Application.ƒS.Character.hide(Application.items.code);
                // show safe
                await Application.ƒS.Character.show(Application.items.safe, Application.items.safe.pose.default, Application.ƒS.positionPercent(50, 50));
                await Application.ƒS.update(1);
                // input field for code
                await codeInput();
                async function codeInput() {
                    await Application.ƒS.Speech.tell(Application.characters.narrator, "Code eingeben: ", false);
                    let code = await (await Application.ƒS.Speech.getInput()).trim();
                    if (code == "1469") {
                        await Application.ƒS.Sound.play(Application.sound.barOpenSafe, 0.5, false);
                        await Application.ƒS.Speech.tell(Application.characters.lara, "Na also.");
                    }
                    else {
                        await Application.ƒS.Speech.tell(Application.characters.lara, "Das war der falsche Code.");
                        await Application.ƒS.Speech.tell(Application.characters.lara, "Auf der Notiz von Uwe standen die Zahlen 1469.");
                        await codeInput();
                    }
                }
                // hide safe
                await Application.ƒS.Character.hide(Application.items.safe);
                // show loveletter
                await Application.ƒS.Character.show(Application.items.loveletter, Application.items.loveletter.pose.default, Application.ƒS.positionPercent(50, 50));
                await Application.ƒS.update(1);
                await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist ja interessant.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Uwe wollte Elise wohl seine Liebe mit diesem Liebesbrief gestehen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Wieso er wohl so zerknittert ist? Ich frage mich, was damit passiert ist.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich lege den Brief besser wieder zurück.");
                await Application.ƒS.Character.hide(Application.items.loveletter);
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Und jetzt den Tresor noch verschließen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, ". . .");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ohh und da kommt Uwe auch schon wieder.");
                // animate lara going back
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from40To25());
                break;
            case chooseActionOptions.wait:
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, ich kann nicht einfach in die Privatsphäre von Uwe eingreifen.");
                // change laras pose to friendly
                await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Immerhin holt er mir gerade ein Eis.");
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich warte einfach, bis er wieder da ist.");
                // transition // TODO
                Application.ƒS.Speech.clear();
                Application.ƒS.Speech.hide();
                await Application.ƒS.update(Application.transitions.timefiller.duration, Application.transitions.timefiller.alpha, Application.transitions.timefiller.edge);
                break;
        }
        // sound footsteps
        Application.ƒS.Sound.play(Application.sound.barFootstepsFadeIn, 0.8, false);
        // animate uwe coming back
        Application.ƒS.Character.animate(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.fromOutsideTo75());
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Soo, endlich habe ich die doofe klemmende Türe des Kühlfaches aufbekommen!");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Bitteschön, hier dein Eis.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Lass es dir schmecken.");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Dankeschön!");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Tante Elise hat mich gebeten, dich heute zum gemeinsamen Abendessen einzuladen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Um 18:30 Uhr bei ihr im Café.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ohh, tatsächlich?");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Da kann ich nicht nein sagen.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Super, dann geh ich mal.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bis heute Abend!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        Application.ƒS.Sound.fade(Application.sound.backgroundBar, 0, 3, false);
        // choose next location
        return "NextLocationChoice";
    }
    Application.Bar = Bar;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Cafe() {
        console.log("Visit Café");
        Application.dataForSave.visitedCafe = true;
        // show background
        await Application.ƒS.Location.show(Application.locations.cafe);
        // sound
        Application.ƒS.Sound.fade(Application.sound.backgroundMusicCafe, 0.02, 3, true);
        Application.ƒS.Sound.fade(Application.sound.backgroundSoundCafe, 1, 3, true);
        // background transition
        await Application.ƒS.update(Application.transitions.wave.duration, Application.transitions.wave.alpha, Application.transitions.wave.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.friendly, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show character elise
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.neutral, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.lara, "Nochmal zu dem Abend gestern:");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ist dir etwas Verdächtiges aufgefallen?");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Um ehrlich zu sein, war es ein komischer Abend.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Uwe hat öfters mit Wilma alleine getuschelt.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die beiden scheinen ein gemeinsames Geheimnis zu haben.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber naja, das geht mich nichts an.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Soll Uwe doch machen, was er will.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber dann braucht er auch nicht erwarten, dass ich ständig alles für ihn stehen und liegen lasse.");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das habe ich ihm gestern auch so klar gemacht.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Oh, du scheinst nicht gerade gut auf ihn zu sprechen zu sein?");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Auch, Uwe kann mich manchmal echt wahnsinnig machen mit seiner stillen Art.");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber das ist ein anderes Thema - da brauchst du dir keine Gedanken drum zu machen.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hat sich sonst noch etwas Ungewöhnliches ereignet?");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Gabi hat mir gestern Abend aus heiterem Himmel sehr gemeine Dinge vorgeworfen.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich hätte noch nie erleben müssen, wie es ist, hartes Geld verdienen zu müssen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das Glück käme mir nur so zugeflogen, alles würde mir in den Schoss fallen – und so weiter.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Kannst du dir vorstellen, dass sie das Preisgeld gestohlen haben könnte?");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Naja, ich weiß nicht recht.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Unmöglich wäre es sicherlich nicht.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie hat mir immerhin offen an den Kopf geworfen, dass ich das Preisgeld nicht verdiene.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie hatte es nie leicht und war schon immer sehr neidisch auf mich.");
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber das gestern Abend – das hat wirklich jede Stichelei übertroffen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Da muss mehr dahinterstecken!");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Also wenn du mich so fragst, hat Gabi das Geld an sich genommen.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, das ist ja interessant.");
        await Application.ƒS.Speech.tell(Application.characters.lara, ". . .");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich bin dann mal wieder unterwegs.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bis heute Abend!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        Application.ƒS.Sound.fade(Application.sound.backgroundSoundCafe, 0, 3, false);
        Application.ƒS.Sound.fade(Application.sound.backgroundMusicCafe, 0, 3, false);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Cafe = Cafe;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function EndOfNovel() {
        Application.showCredits();
    }
    Application.EndOfNovel = EndOfNovel;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Harbor() {
        console.log("Visit Harbor");
        Application.dataForSave.visitedHarbor = true;
        // show background
        await Application.ƒS.Location.show(Application.locations.harbor);
        // fade background sound
        Application.ƒS.Sound.fade(Application.sound.backgroundHarbor, 0.8, 1, true);
        // background transition
        await Application.ƒS.update(Application.transitions.wave.duration, Application.transitions.wave.alpha, Application.transitions.wave.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.friendly, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // show charakter wilma
        await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(1);
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Wilma!");
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Moin Lara!");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Schön dich zu sehen!");
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Elise hat erzählt, dass du für ein paar Tage zu Besuch kommst.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Wie geht es dir?");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Danke, ich kann mich nicht beklagen!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wie geht es dir? Was macht die Fischerei?");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ach, ich kann mich ebenfalls nicht beklagen.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Zurzeit ist natürlich ein bisschen weniger los, da die Touristen fehlen.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Aber ich komme gut über die Runden.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hast du es schon gehört?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Gestern wurde das Preisgeld aus der Spardose von Tante Elise geklaut.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Wirklich? Das ganze Geld ist weg?");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ja, wir haben die leere Spardose heute früh bei meiner Ankunft bemerkt.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Jemand muss das Geld gestern Abend an sich genommen haben.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hast du eine Ahnung, wer es gestohlen haben könnte?");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich kann mir nicht vorstellen, dass jemand von uns ein Dieb ist.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Meine Mama Gabi braucht das Geld bestimmt nicht.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Sie lebt sehr sparsam und leistet sich nicht viel.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Obwohl sie nicht viel verdient, kommt sie alleine gut über die Runden.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Könnte Uwe das Geld genommen haben?");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Uwes Kneipe läuft sehr gut.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Er braucht das Geld bestimmt nicht.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, ". . .");
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "<i>*lacht*</i>");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Warum lachst du?");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Oh naja, mir ist gerade eine Erklärung für den Diebstahl eingefallen:");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Elises spontane Verkündigung gestern, die Insel zu verlassen – das muss es sein!");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wie meinst du das?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Davon hat sie mir gegenüber nichts erwähnt.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Natürlich hat sie das nicht erwähnt.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich glaube auch nicht, dass sie das wirklich tun möchte.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Elise hat gestern aus heiterem Himmel verkündet, das Preisgeld zu nutzen, um die Insel zu verlassen.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich bin mir sicher, dass das nur ein Versuch von ihr ist, Uwe aus seinem Schneckenhaus zu locken.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Weißt du, die beiden sind schon lange ineinander verliebt.");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Aber Uwe ist einfach viel zu schüchtern und hat regelrecht Angst davor, ihr es zu gestehen.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Elise hat den plötzlichen Umzug bestimmt nur angekündigt, damit Uwe endlich den Schritt wagt, und ihr seine Gefühle offen gesteht, um sie nicht zu verlieren.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Sie hat ihn quasi vor die Wahl gestellt: Entweder er springt über seinen Schattten, oder sie geht.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und was hat das mit dem Diebstahl zu tun?");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich glaube, dass die Ansage eher nach hinten losgegangen ist.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Scheinbar hat Uwe noch immer keine Anstalten gemacht, ihr seine Liebe zu gestehen.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Um ihre Drohung nicht direkt wahr machen zu müssen, hat sie das Preisgeld sicherlich selbst verschwinden lassen.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "In Wirklichkeit will sie ja gar nicht weg von hier.");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Aber um das zuzugeben ist sie viel zu stolz.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Für sie ist es einfacher, das Preisgeld verschwinden zu lassen, als zugeben zu müssen, dass sie überhaupt nicht wegziehen möchte.");
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Und obendrauf hat sie dir so direkt eine Freude bereitet, weil du in dem Fall ermitteln kannst.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Sie macht sich doch immer Sorgen, dass du dich hier langweilen könntest.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Wenn du mich fragst, ist Elise selbst die Diebin des Geldes.");
        // sound phone call
        Application.ƒS.Sound.fade(Application.sound.harborRingtone, 1, 0, false);
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Moment, den Anruf muss ich kurz annehmen. Kannst du hier kurz aufpassen?");
        // sound footsteps
        Application.ƒS.Sound.play(Application.sound.harborFootstepsFadeOut, 0.8, false);
        // animation wilma leaving
        await Application.ƒS.Character.animate(Application.characters.wilma, Application.characters.wilma.pose.neutral, Application.from75ToOutside());
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das wirft natürlich ein ganz anderes Licht auf die Sache.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Die Anzahl der Verdächtigen hat sich gerade von drei auf vier erhöht.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ob Tante Elise den Diebstahl wirklich nur vorgetäuscht hat?");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, was für blaue Briefe sind da denn in der Tasche von Wilma?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ob ich mal einen Blick darauf werfen sollte?");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // CHOICE look at letters
        let chooseActionOptions = {
            look: "Die Briefe anschauen",
            wait: "Auf Wilma warten",
        };
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.look:
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Es schadet bestimmt nicht, wenn ich einen schnellen Blick auf die Papiere werfe, solange Wilma beschäftigt ist.");
                // animation lara to center
                await Application.ƒS.Character.hide(Application.characters.lara);
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from25To40());
                // hide lara
                Application.ƒS.Character.hideAll();
                await Application.ƒS.update(1);
                // show bills
                await Application.ƒS.Character.show(Application.items.bills, Application.items.bills.pose.default, Application.ƒS.positionPercent(50, 50));
                await Application.ƒS.update(1);
                // dialog
                await Application.ƒS.Speech.tell(Application.characters.lara, ". . .");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ohha, scheinbar hat Wilma ziemliche Geldprobleme.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Das Preisgeld von Elise wäre ihr sicher sehr gelegen gekommen.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ob sie das Geld aus der Spardose geklaut hat, um ihre Schulden zu begleichen?");
                await Application.ƒS.Speech.tell(Application.characters.lara, ". . .");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ohh, Wilma scheint ihr Telefonat zu beenden.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich lege die Briefe schnell zurück.");
                // hide bills
                await Application.ƒS.Character.hide(Application.items.bills);
                await Application.ƒS.update(1);
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(40, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Und jetzt nichts anmerken lassen.");
                // animation lara back to 25
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from40To25());
                break;
            case chooseActionOptions.wait:
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, ich will nicht einfach unbemerkt in Wilmas private Sachen schauen, das gehört sich nicht.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich warte lieber bis sie wieder zurück kommt.");
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                // transition //TODO
                Application.ƒS.Speech.clear();
                Application.ƒS.Speech.hide();
                // sound ticking clock
                Application.ƒS.Sound.play(Application.sound.tickingClockShort, 1, false);
                await Application.ƒS.update(Application.transitions.timefiller.duration, Application.transitions.timefiller.alpha, Application.transitions.timefiller.edge);
                break;
        }
        // sound footsteps
        Application.ƒS.Sound.play(Application.sound.harborFootstepsFadeIn, 0.8, false);
        // animation wilma coming back
        await Application.ƒS.Character.animate(Application.characters.wilma, Application.characters.wilma.pose.neutral, Application.fromOutsideTo75());
        await Application.ƒS.Speech.tell(Application.characters.wilma, "So, da bin ich wieder.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Meine Liebe, sei mir nicht böse, aber so langsam muss ich wieder an die Arbeit zurück.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Schön, dass du vorbeigeschaut hast.");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Komm gerne jederzeit wieder vorbei.");
        // change lara pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Moment, eines noch:");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Elise kocht heute Abend. ");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Um 18:30 Uhr bei ihr im Café.");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Oh, wie schön!");
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Da schaue ich doch sehr gerne vorbei.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Super, ich freue mich darauf!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bis später.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ach ja, und nochmal zu dem Diebstahl des Geldes:");
        // change wilmas pose to laughing
        await Application.changePose(Application.characters.wilma, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich bin mir sicher, dass Elise das Geld noch hat. Kein Grund, die Sache größer zu machen, als sie ist.");
        // change wilmas pose to friendly
        await Application.changePose(Application.characters.wilma, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Also, bis später dann.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        Application.ƒS.Sound.fade(Application.sound.backgroundHarbor, 0, 3, false);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Harbor = Harbor;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Intro() {
        console.log("Intro");
        Application.dataForSave.visitedBar = false;
        Application.dataForSave.visitedCafe = false;
        Application.dataForSave.visitedHarbor = false;
        Application.dataForSave.visitedLibrary = false;
        // show background
        await Application.ƒS.Location.show(Application.locations.cafe);
        // start happy background music
        Application.ƒS.Sound.fade(Application.sound.backgroundIntroHappy, 0.2, 3, true);
        // transition
        await Application.ƒS.update(Application.transitions.wave.duration, Application.transitions.wave.alpha, Application.transitions.wave.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.friendly, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(0.5);
        // show character elise
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(0.5);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Tante Elise!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hallo Lara, schön dich zu sehen!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Komm herein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Stell deinen Koffer einfach an der Treppe ab und setz dich zu mir an die Theke.");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Heute ist zum Glück nicht allzu viel los im Café, dann können wir direkt ein bisschen quatschen.");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Was darf ich dir zu trinken anbieten?");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wasser, Früchtetee, Apfelsaft oder eine heiße Schokolade?");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // CHOICE drink
        let chooseDrinkOptions = {
            water: "Wasser",
            tea: "Früchtetee",
            applejuice: "Apfelsaft",
            hotChocolate: "Heiße Schokolade",
        };
        let chooseDrink = await Application.ƒS.Menu.getInput(chooseDrinkOptions, "choice");
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Kommt sofort.");
        // animate elise going to grab a drink
        await Application.ƒS.Character.hide(Application.characters.elise);
        await Application.ƒS.Character.animate(Application.characters.elise, Application.characters.elise.pose.neutral, Application.from75To90());
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich freue mich so sehr darauf die Herbstferien wieder bei dir verbringen zu dürfen!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich hoffe es wird dir nicht zu langweilig!");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(90, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Immerhin ist hier gerade nicht viel los.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die Saison ist vorbei und die meisten Bewohner der Insel sind jetzt selbst auf dem Weg in den Urlaub.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die Leute hier kann man aktuell an einer Hand abzählen.");
        // animate elise coming back
        await Application.ƒS.Character.hide(Application.characters.elise);
        await Application.ƒS.Character.animate(Application.characters.elise, Application.characters.elise.pose.friendly, Application.from90To75());
        // CHOICE result
        switch (chooseDrink) {
            case chooseDrinkOptions.water:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Soo, bitteschön, hier ist dein Wasser.");
                await Application.ƒS.Character.show(Application.items.drink, Application.items.drink.pose.water, Application.ƒS.positionPercent(40, 100));
                break;
            case chooseDrinkOptions.tea:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Soo, bitteschön, hier ist dein Früchtetee.");
                await Application.ƒS.Character.show(Application.items.drink, Application.items.drink.pose.tea, Application.ƒS.positionPercent(40, 100));
                break;
            case chooseDrinkOptions.applejuice:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Soo, bitteschön, hier ist dein Apfelsaft.");
                await Application.ƒS.Character.show(Application.items.drink, Application.items.drink.pose.applejuice, Application.ƒS.positionPercent(40, 100));
                break;
            case chooseDrinkOptions.hotChocolate:
                await Application.ƒS.Speech.tell(Application.characters.elise, "Soo, bitteschön, hier ist deine heiße Schokolade.");
                await Application.ƒS.Character.show(Application.items.drink, Application.items.drink.pose.hotchocolate, Application.ƒS.positionPercent(40, 100));
                break;
        }
        // dialog
        await Application.ƒS.Speech.tell(Application.characters.elise, "Möchtest du auch einen Cupcake?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Oh ja, sehr gerne!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Bitteschön.");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, lecker!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du bist wirklich die beste Konditorin der Welt!");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Haha, das ist lieb!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Stell dir vor, ich habe dafür gestern tatsächlich einen Preis auf der kleinen Nachbarsinsel gewonnen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "„Bester Cupcake der Inselgruppe“ – Moment, ich hole ihn schnell.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // animate elise leaving
        await Application.ƒS.Character.hide(Application.characters.elise);
        await Application.ƒS.Character.animate(Application.characters.elise, Application.characters.elise.pose.friendly, Application.from75ToOutside());
        // animate elise coming back
        await Application.ƒS.Character.hide(Application.characters.elise);
        await Application.ƒS.Character.animate(Application.characters.elise, Application.characters.elise.pose.friendly, Application.fromOutsideTo75());
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hier: eine Spardose in Cupcake-Form mit einem Preisgeld von stolzen 4000€.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(0.5);
        // show cupcake money box 
        await Application.ƒS.Character.show(Application.items.cupcake, Application.items.cupcake.pose.default, Application.ƒS.positionPercent(50, 50));
        await Application.ƒS.update(1);
        await new Promise(resolve => setTimeout(resolve, 3000));
        // hide cupcake money box
        await Application.ƒS.Character.hide(Application.items.cupcake);
        await Application.ƒS.update(0.5);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.shocked, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.friendly, Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.update(0.5);
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wow!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Nicht schlecht, Tante Elise!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist eine Menge Geld!");
        // stop happy background music
        Application.ƒS.Sound.fade(Application.sound.backgroundIntroHappy, 0, 3, false);
        // start mysterious sound
        Application.ƒS.Sound.fade(Application.sound.backgroundIntroMysterious, 0.2, 5, true);
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        // play shock sound
        Application.ƒS.Sound.play(Application.sound.shock, 0.6, false);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber huch - Die Spardose ist ja leer!");
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wie leer?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Zeig mal!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "…");
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Oh Schreck, du hast Recht!");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das ganze Geld ist weg.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das kann doch gar nicht sein.");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Jemand muss es gestohlen haben!");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wer hätte das Preisgeld denn aus der Spardose an sich nehmen können?");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Heute hatte ich die Spardose den ganzen Morgen lang im Blick.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Da hat sich ihr niemand genähert.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Es muss also gestern Abend gewesen sein.");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wir haben zusammen auf meinen Gewinn angestoßen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das waren Uwe, Wilma, Gabi und ich.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Dann gibt es also drei Verdächtige.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Die Namen sagen mir noch etwas.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ja, du solltest sie alle von deinem letzten Urlaub hier auf der Insel kennen.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist aber schon echt lange her!");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Magst du mir vielleicht nochmal eine kurze Vorstellung geben?");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Na klar!");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Also, zum einen ist da Uwe.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ihm gehört die kleine Kneipe der Insel.");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Er ist sehr schüchtern und leise.");
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber er hat das Herz am richtigen Fleck.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wilma sollte dir ebenfalls noch bekannt sein.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie ist die junge Fischerin, die unten am Hafen ihren Stand hat.");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie ist immer fröhlich und gut gelaunt und ganz schön kreativ.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ein echter Wirbelwind.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und als letztes noch Gabi, Wilmas Mama.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie leitet unsere kleine Inselbücherei.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Sie wirkt immer ein wenig distanziert und sehr streng.");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber für uns alle ist sie der Fels in der Brandung.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wilma ist ihr ein und alles. Für sie würde sie alles tun.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und der Dieb muss einer von ihnen gewesen sein?");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich kann es mir ehrlich gesagt nicht vorstellen.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber eine andere Erklärung gibt es nicht.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Gestern Abend hätte jeder von ihnen ganz einfach und unbemerkt das Geld aus der Spardose nehmen können.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Niemand sonst war seitdem in ihrer Nähe.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, das vereinfacht die Suche nach dem Geld natürlich.");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Weißt du was, Tante Elise?");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich werde in dem Fall ermitteln.");
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ermitteln?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich werde alle Anwesenden von gestern befragen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und heute Abend werde ich den Fall auflösen.");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Bei einem gemeinsamen Abendessen heute werde ich den Täter entlarven.");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(75, 100));
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ehm.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ob das eine so gute Idee ist?");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Naja, wieso eigentlich nicht.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich bin ja froh, wenn du dich nicht langweilen musst.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und heute Abend wollte sowieso etwas besonders zum Essen zaubern.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Lade gerne alle zum Abendessen hier im Café ein!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(75, 100));
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Super, du bist die Beste!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich mache mich direkt auf den Weg.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        Application.ƒS.Sound.fade(Application.sound.backgroundIntroMysterious, 0, 3, false);
        //choose next location
        return "NextLocationChoice";
    }
    Application.Intro = Intro;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function Library() {
        console.log("Visit Library");
        Application.dataForSave.visitedLibrary = true;
        // show background
        await Application.ƒS.Location.show(Application.locations.library);
        // sound
        Application.ƒS.Sound.fade(Application.sound.backgroundLibrary, 0.2, 1, true);
        // transition
        await Application.ƒS.update(Application.transitions.wave.duration, Application.transitions.wave.alpha, Application.transitions.wave.edge);
        // show charakter lara
        await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.update(1);
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, keiner da?");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Im Nebenraum höre ich jemanden leise telefonieren.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Sollte ich lauschen oder mich lieber bemerkbar machen?"); /*  */
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // COHICE listen to phone call
        let chooseActionOptions = {
            overhear: "Das Telefonat belauschen",
            makeNoticebale: "Sich bemerkbar machen",
        };
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.overhear:
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ein kleines bisschen lauschen hat noch niemandem geschadet.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Und vielleicht bekomme ich ja ein paar Hinweise zum Diebstahl.");
                // animate lara going to the door
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from25To80());
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Ja ja, ich werde das Geld so schnell wie möglich bezahlen . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Wissen sie, meine Tochter . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Sie weiß doch nichts davon . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Das ist alles nicht so einfach, wie Sie denken . . .");
                await Application.ƒS.Speech.tell(Application.characters.gabi, ". . . Ich muss jetzt auflegen . . .");
                // change laras pose to shocked
                await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(80, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Was hat das denn zu bedeuten?");
                await Application.ƒS.Speech.tell(Application.characters.lara, "Gabi scheint etwas zu verbergen.");
                // change laras pose to suspicious
                await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(80, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hat sie etwa Geldprobleme?");
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(80, 100));
                // animate lara going back
                await Application.ƒS.Character.animate(Application.characters.lara, Application.characters.lara.pose.neutral, Application.from80To25());
                break;
            case chooseActionOptions.makeNoticebale:
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, fremde Telefongespräche belauschen gehört sich absolut nicht.");
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Ich mache mich lieber bemerkbar.");
                await Application.ƒS.Speech.tell(Application.characters.lara, "HAAALLOOO! Gabi, bist du da?");
                break;
        }
        // play sound footsteps
        await Application.ƒS.Sound.play(Application.sound.libraryFootstepsFadeIn, 1, false);
        // show character gabi
        await Application.ƒS.Character.animate(Application.characters.gabi, Application.characters.gabi.pose.neutral, Application.fromOutsideTo75());
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.overhear:
                // change gabis pose to shocked
                await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ach du meine Güte, du hast mich jetzt aber erschreckt.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe gar nicht gehört, dass du hereingekommen bist.");
                // change gabis pose to neutral
                await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich musste noch ein wichtiges Telefonat führen.");
                // change gabis pose to sad
                await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Du hast doch hoffentlich nicht allzu lange warten müssen?");
                // change laras pose to friendly
                await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Gabi!");
                // change laras pose to pensive
                await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Nein, nein, ähhhm, ich, also ähhm, ich bin gerade erst gekommen.");
                // change gabis pose to grumpy
                await Application.changePose(Application.characters.gabi, "grumpy", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Soso . . .");
                break;
            case chooseActionOptions.makeNoticebale:
                // change gabis pose to friendly
                await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Hallo, Lara!");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Schön, dass du vorbeischaust.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Mensch, bist du groß geworden!");
                // change gabis pose to neutral
                await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
                // change laras pose to friendly
                await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Hallo Gabi!");
                // change laras pose to neutral
                await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
                await Application.ƒS.Speech.tell(Application.characters.lara, "Tut mir leid, dass ich Dein Telefonat unterbrochen habe, aber ich wollte nicht lauschen.");
                // change gabis pose to friendly
                await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(75, 100));
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich weiß es zu schätzen, dass du so ehrlich bist.");
                await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich wollte das Gespräch sowieso gerade beenden.");
                break;
        }
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie kann ich dir denn helfen?");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das Preisgeld von Tante Elise wurde gestohlen.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich wollte mal hören, ob du etwas Verdächtiges bemerkt hast.");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie bitte?");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Die 4000€ Preisgeld von Elise wurden gestohlen?");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ja, gestern Abend bei eurem gemeinsamen Treffen bei Tante Elise!");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Oha.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir leid, das sagen zu müssen.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Aber dann bin ich mir sehr sicher zu wissen, wer das gewesen ist.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Tatsächlich?");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Wer denn?");
        // change gabis pose to grumpy
        await Application.changePose(Application.characters.gabi, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Uwe natürlich!");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er hat sich den ganzen Abend sehr komisch verhalten.");
        // change gabis pose to grumpy
        await Application.changePose(Application.characters.gabi, "grumpy", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Zuerst habe ich mitbekommen, wie er Wilma ziemlich heruntergemacht hat.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Dann muss er Elise ziemlich wütend gemacht haben.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Sie ist ihm den ganzen restlichen Abend aus dem Weg gegangen.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Nachdem Elise verkündet hat, mit dem Geld die Insel zu verlassen, habe ich gesehen, wie er krampfhaft an der Spardose herumgefummelt hat.");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich hatte gar keine Zeit, ihn darauf anzusprechen.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er hat die Party direkt im Anschluss sehr eilig verlassen.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Das ist ja interessant.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber was wäre sein Motiv? Hat er Geldprobleme?");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Puh, ich weiß nicht so recht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Darüber habe ich mit ihm noch nie geredet.");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich vermute eher einen anderen Grund.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Weißt du, es ist folgendermaßen:");
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Der Gute ist schon lange in Elise verliebt.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Seitdem sie den ersten Schritt auf die Insel gesetzt hat, hat er nur noch Augen für sie.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Nachdem sie gestern so plötzlich angekündigt hat, die Insel mit dem Geld verlassen zu wollen . . .");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich meine, das Geld zu stehlen war offensichtlich der klägliche Versuch, sie nicht zu verlieren.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Er sah keinen anderen Ausweg, als ihr die Mittel zu nehmen, mit denen sie an einen anderen Ort gehen kann.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wenn du mich fragst, ist Uwe der Dieb des Geldes.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Hmm, das klingt durchaus plausibel.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(25, 100));
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ach du liebe Güte, jetzt habe ich mich aber verquatscht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Wie schnell die Zeit vergeht.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich muss langsam los, Lara, ich habe noch etwas zu erledigen.");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Moment, eines noch:");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Elise kocht heute Abend.");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich würde mich sehr freuen, wenn du auch kommst!");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(25, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Um 18:30 Uhr bei ihr im Café.");
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Was für eine schöne Einladung!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Vielen Dank.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Dann sehen wir uns wohl heute Abend nochmal.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Und mach dir nicht zu viele Gedanken wegen des Diebstahls.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Vielleicht ist es besser, wenn wir es einfach ruhen lassen.");
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(75, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Uwe wird schon wissen was er tut und früher oder später bringt er das Geld bestimmt zurück.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(0);
        Application.ƒS.Sound.fade(Application.sound.backgroundLibrary, 0, 3, false);
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
        if (Application.dataForSave.triedToAccuseAll == false) {
            // start mysterious music
            Application.ƒS.Sound.fade(Application.sound.backgroundIntroMysterious, 0.2, 1, true);
            // show charakter lara
            await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(50, 100));
            await Application.ƒS.update(1);
            // change laras pose to shocked
            await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(50, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Oha, es ist ja schon fast Abend!");
            // change laras pose to pensive
            await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(50, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Ich habe eine Menge Informationen gesammelt.");
            // change laras pose to friendly
            await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(50, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Am besten lasse ich mir das alles noch einmal durch den Kopf gehen, bevor ich beim gemeinsamen Abendessen den Dieb des Geldes entlarve.");
            Application.ƒS.Sound.fade(Application.sound.backgroundIntroMysterious, 0, 3, false);
            // sound ticking clock
            Application.ƒS.Sound.play(Application.sound.tickingClockLong, 1, false);
            // hide elements
            Application.ƒS.Speech.clear();
            Application.ƒS.Speech.hide();
            Application.ƒS.Character.hideAll();
            Application.ƒS.update(0);
            // show background
            await Application.ƒS.Location.show(Application.locations.outro);
            await Application.ƒS.update(Application.transitions.timefiller.duration, Application.transitions.timefiller.alpha, Application.transitions.timefiller.edge);
            // start exiting music
            Application.ƒS.Sound.fade(Application.sound.backgroundOutro, 0.2, 3, true);
            // novel page
            Application.ƒS.Text.setClass("novelPage");
            await Application.ƒS.Text.print("Elise, Uwe, Wilma, Gabi und Lara kommen im Café zum gemeinsamen Abendessen zusammen. Die Stimmung ist angespannt und zwischen oberflächlichen Gesprächen mustern sich die Anwesenden gegenseitig mit misstrauischen Blicken.");
            // show charakters
            await Application.ƒS.Character.show(Application.characters.lara, Application.characters.lara.pose.neutral, Application.ƒS.positionPercent(15, 100));
            await Application.ƒS.update(0.5);
            await Application.ƒS.Character.show(Application.characters.elise, Application.characters.elise.pose.neutral, Application.ƒS.positionPercent(40, 100));
            await Application.ƒS.update(0.5);
            await Application.ƒS.Character.show(Application.characters.uwe, Application.characters.uwe.pose.neutral, Application.ƒS.positionPercent(55, 100));
            await Application.ƒS.update(0.5);
            await Application.ƒS.Character.show(Application.characters.wilma, Application.characters.wilma.pose.neutral, Application.ƒS.positionPercent(72, 100));
            await Application.ƒS.update(0.5);
            await Application.ƒS.Character.show(Application.characters.gabi, Application.characters.gabi.pose.neutral, Application.ƒS.positionPercent(88, 100));
            await Application.ƒS.update(0.5);
            // change laras pose to friendly
            await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(15, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Schön, dass ihr heute alle hierher gekommen seid!");
            await Application.ƒS.Speech.tell(Application.characters.lara, "Ich habe euch nicht ganz ohne Grund alle auf einmal hier eingeladen.");
            // change laras pose to shocked
            await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(15, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Wie ihr wisst, wurde gestern Abend das Preisgeld von 4000€ aus der Spardose von Tante Elise gestohlen.");
            // change laras pose to suspicious
            await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Ich habe mit euch allen gesprochen und Motive und Beweise gesammelt.");
            // change laras pose to laughing
            await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(15, 100));
            await Application.ƒS.Speech.tell(Application.characters.lara, "Und nun werde ich offenbaren, wer von euch das Geld an sich genommen hat!");
        }
        // show background
        await Application.ƒS.Location.show(Application.locations.outro);
        await Application.ƒS.update(0);
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        // CHOICE accuse Somebody
        let chooseActionOptions = {
            wilma: "Wilma beschuldigen",
            gabi: "Gabi beschuldigen",
            uwe: "Uwe beschuldigen",
            elise: "Elise beschuldigen",
            all: "Alle beschuldigen",
        };
        if (Application.dataForSave.triedToAccuseAll) {
            delete chooseActionOptions.all;
        }
        // stop background music
        Application.ƒS.Sound.fade(Application.sound.backgroundOutro, 0, 3, false);
        let chooseAction = await Application.ƒS.Menu.getInput(chooseActionOptions, "choice");
        // CHOICE result
        switch (chooseAction) {
            case chooseActionOptions.wilma:
                return "AccusedWilma";
            case chooseActionOptions.gabi:
                return "AccusedGabi";
            case chooseActionOptions.uwe:
                return "AccusedUwe";
            case chooseActionOptions.elise:
                return "AccusedElise";
            case chooseActionOptions.all:
                return "AccusedAll";
        }
    }
    Application.Outro = Outro;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function AccusedAll() {
        console.log("Accused All");
        Application.dataForSave.triedToAccuseAll = true;
        await Application.ƒS.Text.print("Moment mal!<br>\
      Wir sind hier doch nicht im Orient Express!<br>\
      Diese Anschuldigung ist doch etwas weit her geholt.<br>\
      Probiere das besser noch einmal.\
      ");
        return "Outro";
    }
    Application.AccusedAll = AccusedAll;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function AccusedElise() {
        console.log("Accused Elise");
        // start background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingElise, 0.2, 3, true);
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        // play shock sound
        await Application.ƒS.Sound.play(Application.sound.shock, 0.6, false);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Elise! Du warst es!");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(15, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich?");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Warum sollte ich mein eigenes Preisgeld stehlen?");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das ergibt doch gar keinen Sinn!");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Ich konnte es zuerst auch nicht glauben.");
        // change laras pose to friendly
        await Application.changePose(Application.characters.lara, "friendly", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber Wilma hat es mir recht plausibel erklärt:");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du hast gestern verkündet mit dem Geld von der Insel wegzuziehen.");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Aber ich glaube nicht, dass du das wirklich willst.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du liebst das Leben hier und die Leute . . .");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du warst nur zu stolz, um einen Rückzieher zu machen.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(15, 100));
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Du hast recht.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich will nicht weg von hier.");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Die Ankündigung gestern war nur eine Laune aus dem Affekt.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich war echt eifersüchtig.");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Uwe hat gestern so viel mit Wilma getuschelt.");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich wusste einfach nicht mehr, wo ich stehe.");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber einen Diebstahl habe ich deswegen nicht vorgetäuscht.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ach Elise, das macht mich so froh.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich dachte wirklich, dass du die Insel verlassen willst.");
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich hätte dir gestern fast meine Liebe gestanden.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber dann hast du die Ankündigung gemacht und dann habe ich mich nicht mehr getraut.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber jetzt bin ich mir sicher.");
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Hier, bitte nimm diesen Liebesbrief von mir an.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ohh . . .");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wow, Uwe!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Darauf habe ich so lange gewartet.");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ach wisst ihr was - Mir ist egal wer das Geld gestohlen hat, oder was damit passiert ist!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        await Application.ƒS.Text.setClass("novelPage");
        await Application.ƒS.Text.print("Wie schön, endlich konnten sich Elise und Uwe ihre Liebe gestehen.<br>\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");
        // stop background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingElise, 0, 3, false);
        let finalDecisionOptions = {
            end: "Beenden",
            startAgain: "Nochmal spielen"
        };
        let finalDecision = await Application.ƒS.Menu.getInput(finalDecisionOptions, "choice");
        switch (finalDecision) {
            case finalDecisionOptions.end:
                return Application.EndOfNovel();
            case finalDecisionOptions.startAgain:
                return Application.Intro();
        }
        ;
    }
    Application.AccusedElise = AccusedElise;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function AccusedGabi() {
        console.log("Accused Gabi");
        // start background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingGabi, 0.2, 3, true);
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        // play shock sound
        await Application.ƒS.Sound.play(Application.sound.shock, 0.6, false);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du hast das Geld gestohlen, Gabi!");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(15, 100));
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, ". . .");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Du hast ja recht.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir so leid, aber ich habe das Geld geklaut.");
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wie bitte?");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Nur, weil du mir das Geld nicht gegönnt hast?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Nein, ach Quatsch.");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Entschuldige, das habe ich gestern wirklich nicht so gemeint.");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich war nur so aufgeregt.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe gehört, wie Wilma und Uwe darüber geredet haben, dass Wilma hohe Spielschulden hat.");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich . . .");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich fühle mich so schuldig, dass ich das nicht bemerkt habe.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich hätte meine Tochter doch davor beschützen müssen!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir so leid, Wilma.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Mama, ich wollte nicht, dass du davon erfährst!");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich hätte das bestimmt wieder unter Kontrolle bekommen.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir wirklich leid, Elise!");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe aus dem Affekt gehandelt.");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Das Geld war so nahe und ich musste doch etwas tun.");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich selbst komme gerade so über die Runden.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber . . .");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich habe doch gesagt, dass ich helfen kann!");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Hätte ich das gewusst, hätte ich auch sofort geholfen!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wisst ihr was?");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wir packen das gemeinsam an!");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und über deinen Diebstahl reden wir später nochmal, Gabi!");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ja, das ist eine gute Idee!");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wir greifen dir finanziell unter die Arme, Wilma.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Und wir unterstützen dich dabei, aus der Spielsucht herauszukommen.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Oh nein, das kann ich nicht annehmen.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Oh doch, das musst du!");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Was für eine tolle Idee!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich helfe auch wo ich kann.");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Und das Geld bekommst du selbstverständlich zurück, Elise.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich wollte mich sowieso noch auf einen Nebenjob unten im Laden bewerben.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Woow, ich weiß gar nicht, wie ich euch allen danken soll!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        // novel page ending
        await Application.ƒS.Text.setClass("novelPage");
        await Application.ƒS.Text.print("Gut gemacht, du hast Gabi als die richtige Täterin entlarvt,<br>auch wenn vielleicht aus einem anderen Grund als erwartet?<br>\
      Was wohl passiert wäre, wenn du jemand anderen angeklagt hättest?<br>\
      Beginne von vorne oder lade einen Spielstand, um es zu erfahren.\
      ");
        // stop background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingGabi, 0, 3, false);
        let finalDecisionOptions = {
            end: "Beenden",
            startAgain: "Nochmal spielen"
        };
        let finalDecision = await Application.ƒS.Menu.getInput(finalDecisionOptions, "choice");
        switch (finalDecision) {
            case finalDecisionOptions.end:
                return Application.EndOfNovel();
            case finalDecisionOptions.startAgain:
                return Application.Intro();
        }
        ;
    }
    Application.AccusedGabi = AccusedGabi;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function AccusedUwe() {
        console.log("Accused Uwe");
        // start background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingUwe, 0.2, 3, true);
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        // play shock sound
        await Application.ƒS.Sound.play(Application.sound.shock, 0.6, false);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du bist der Dieb, Uwe.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wie bitte?");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Wieso sollte ich das Geld gestohlen haben?");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Die Bar läuft gut und ich habe bei weitem keine Geldprobleme.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Geld ist nicht der Grund.");
        // change laras pose to laughing
        await Application.changePose(Application.characters.lara, "laughing", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Der wahre Grund ist die Liebe.");
        // Wenn in Kneipe Choice look ausgewählt wurde: await ƒS.Speech.tell(characters.lara, "Das weiß ich aus sicheren Quellen: Ich habe deinen Liebesbrief gefunden!");
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du wolltest nicht, dass Elise mit dem Geld die Insel verlässt!");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Außerdem wurde gestern gesehen, wie du an der Spardose herumgefummelt hast.");
        // change laras pose to neutral
        await Application.changePose(Application.characters.lara, "neutral", Application.ƒS.positionPercent(15, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Aber . . .");
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wie meinst du das?");
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Uwe?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Nein, so war es nicht.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, ". . .");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Puh okay, vielleicht ist jetzt der Zeitpunkt gekommen, um es endlich zu gestehen:");
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich liebe dich, Elise.");
        // change uwes pose to friendly
        await Application.changePose(Application.characters.uwe, "friendly", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Seitdem du hier bist, dreht sich mein ganzes Leben nur um dich.");
        // change uwes pose to blushed
        await Application.changePose(Application.characters.uwe, "blushed", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich wollte es dir so gerne sagen, aber ich habe mich einfach nicht getraut.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Deshalb habe ich dir einen Liebesbrief geschrieben.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich wollte ihn dir gestern geben.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Du warst nur so wütend auf mich, weil ich so viel Zeit mit Wilma verbracht habe.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich dachte es wäre eine gute Idee, den Brief in die Spardose zu dem Geld zu stecken, damit du ihn in Ruhe lesen kannst.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber dann hast du verkündet, die Insel zu verlassen.");
        // change uwes pose to pensive
        await Application.changePose(Application.characters.uwe, "pensive", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Und da ist mir klar geworden, dass du meine Gefühle nicht erwiderst.");
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Deshalb habe ich an der Dose herumgefummelt:");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Ich musste den Liebesbrief unbedingt wieder herausbekommen.");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Oh Uwe.");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Du Dummerchen!");
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Natürlich erwidere ich deine Gefühle!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ich bin so froh, dass du das sagst.");
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Du hast mich gerade zum glücklichsten Menschen gemacht!");
        // change elises pose to laughing
        await Application.changePose(Application.characters.elise, "laughing", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wer auch immer das Geld gestohlen hat: Es ist mir egal!");
        // change elises pose to friendly
        await Application.changePose(Application.characters.elise, "friendly", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Es spielt keine Rolle mehr.");
        // change elises pose to blushed
        await Application.changePose(Application.characters.elise, "blushed", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Dein Geständnis ist so viel mehr wert als Geld, Uwe!");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        await Application.ƒS.Text.setClass("novelPage");
        await Application.ƒS.Text.print("Wer hätte damit gerechnet! Was für ein Happy End!<br>\
      Aber Moment - wer hat nun das Geld wirklich gestohlen?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.\
      ");
        // stop background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingUwe, 0, 3, false);
        let finalDecisionOptions = {
            end: "Beenden",
            startAgain: "Nochmal spielen"
        };
        let finalDecision = await Application.ƒS.Menu.getInput(finalDecisionOptions, "choice");
        switch (finalDecision) {
            case finalDecisionOptions.end:
                return Application.EndOfNovel();
            case finalDecisionOptions.startAgain:
                return Application.Intro();
        }
        ;
    }
    Application.AccusedUwe = AccusedUwe;
})(Application || (Application = {}));
var Application;
(function (Application) {
    async function AccusedWilma() {
        console.log("Accused Wilma");
        // start  background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingWilma, 0.2, 3, true);
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        // play shock sound
        await Application.ƒS.Sound.play(Application.sound.shock, 0.6, false);
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du bist die Diebin, Wilma.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Was?");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Wie kommst du denn darauf?");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change laras pose to pensive
        await Application.changePose(Application.characters.lara, "pensive", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Du hast große Geldprobleme, Wilma.");
        // change laras pose to shocked
        await Application.changePose(Application.characters.lara, "shocked", Application.ƒS.positionPercent(15, 100));
        // if choice Harbor look: await ƒS.Speech.tell(characters.lara, "Ich habe deine Briefe mit den unbezahlten Rechnungen gesehen!");
        await Application.ƒS.Speech.tell(Application.characters.lara, "Uwe hat mir erzählt, dass du hohe Spielschulden hast.");
        // change laras pose to suspicious
        await Application.changePose(Application.characters.lara, "suspicious", Application.ƒS.positionPercent(15, 100));
        await Application.ƒS.Speech.tell(Application.characters.lara, "Und dass du gestern überlegt hast, das Geld aus der Spardose mitzunehmen.");
        // change uwes pose to shocked
        await Application.changePose(Application.characters.uwe, "shocked", Application.ƒS.positionPercent(55, 100));
        await Application.ƒS.Speech.tell(Application.characters.uwe, "Aber Lara, du hast versprochen, dass du das für dich behältst!");
        // change uwes pose to neutral
        await Application.changePose(Application.characters.uwe, "neutral", Application.ƒS.positionPercent(55, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Jetzt wird mir alles klar!");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Das war also das Geheimnis von Uwe und dir.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Früher oder später musste es ja rauskommen.");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ja, ich bin spielsüchtig und ja, ich habe große finanzielle Probleme.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Und ja, ich habe gestern ernsthaft mit dem Gedanken gespielt das Geld mitzunehmen.");
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Aber Uwe hat auf mich eingeredet und da habe ich gemerkt, wie dämlich die Idee ist.");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change elises pose to shocked
        await Application.changePose(Application.characters.elise, "shocked", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Ach Wilma, wieso hast du denn nie etwas gesagt?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change wilmas pose to grumpy
        await Application.changePose(Application.characters.wilma, "grumpy", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich wollte nicht, dass meine Mutter davon erfährt.");
        // change wilmas pose to pensive
        await Application.changePose(Application.characters.wilma, "pensive", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Ich wollte sie nicht enttäuschen und habe ihr schon genug Sorgen im Leben bereitet.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Das Geld habe ich aber sicher nicht geklaut!");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ach meine kleine Wilma.");
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Du hast mir so viel Freude gebracht, viel mehr als alles andere, viel mehr als du es dir vorstellen kannst!");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich . . .");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe gehört, wie Uwe und du gestern über deine Spielschulden geredet habt.");
        // change gabis pose to pensive
        await Application.changePose(Application.characters.gabi, "pensive", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, ". . .");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Und dann habe ich das Geld aus der Spardose geklaut.");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Was? Du Mama?");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich wollte dir unbedingt helfen!");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Meine Tochter – Spielschulden!");
        // change gabis pose to grumpy
        await Application.changePose(Application.characters.gabi, "grumpy", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Da musste ich doch etwas tun!");
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        // change elises pose to grumpy
        await Application.changePose(Application.characters.elise, "grumpy", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Und dann klaust du mein Preisgeld?");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Es tut mir wirklich leid, Elise!");
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich habe aus dem Affekt gehandelt.");
        // change gabis pose to shocked
        await Application.changePose(Application.characters.gabi, "shocked", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Das Geld war direkt in Griffweite und ich musste doch etwas tun.");
        // change gabis pose to sad
        await Application.changePose(Application.characters.gabi, "sad", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Ich selbst komme nur gerade so über die Runden.");
        // change wilmas pose to shocked
        await Application.changePose(Application.characters.wilma, "shocked", Application.ƒS.positionPercent(72, 100));
        await Application.ƒS.Speech.tell(Application.characters.wilma, "Aber . . .");
        // change wilmas pose to neutral
        await Application.changePose(Application.characters.wilma, "neutral", Application.ƒS.positionPercent(72, 100));
        // change gabis pose to neutral
        await Application.changePose(Application.characters.gabi, "neutral", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Unten im Laden wollte ich mich noch auf einen Nebenjob bewerben.");
        // change gabis pose to friendly
        await Application.changePose(Application.characters.gabi, "friendly", Application.ƒS.positionPercent(88, 100));
        await Application.ƒS.Speech.tell(Application.characters.gabi, "Das Geld werde ich dir auf jeden Fall wieder zurückzahlen, Elise!");
        // change elises pose to pensive
        await Application.changePose(Application.characters.elise, "pensive", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Also gut.");
        // change elises pose to neutral
        await Application.changePose(Application.characters.elise, "neutral", Application.ƒS.positionPercent(40, 100));
        await Application.ƒS.Speech.tell(Application.characters.elise, "Wenn ich das Geld mit der Zeit wieder zurückbekomme, soll es mir recht sein.");
        // hide elements
        Application.ƒS.Speech.clear();
        Application.ƒS.Speech.hide();
        Application.ƒS.Character.hideAll();
        await Application.ƒS.update(1);
        await Application.ƒS.Text.setClass("novelPage");
        await Application.ƒS.Text.print("Obwohl du falsch getippt hast, konnte der Täter letztendlich entlarvt werden.<br>\
      Was wohl passiert wäre, wenn du eine andere Person angeklagt hättest?<br>\
      Beginne von vorne oder lade den Spielstand neu, um es zu erfahren.<br>\
      ");
        // stop background music
        Application.ƒS.Sound.fade(Application.sound.backgroundEndingWilma, 0, 3, false);
        let finalDecisionOptions = {
            end: "Beenden",
            startAgain: "Nochmal spielen"
        };
        let finalDecision = await Application.ƒS.Menu.getInput(finalDecisionOptions, "choice");
        switch (finalDecision) {
            case finalDecisionOptions.end:
                return Application.EndOfNovel();
            case finalDecisionOptions.startAgain:
                return Application.Intro();
        }
        ;
    }
    Application.AccusedWilma = AccusedWilma;
})(Application || (Application = {}));
//# sourceMappingURL=VisualNovel.js.map