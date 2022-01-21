namespace Application  {

    //menu variables
    export let menuOpen: boolean = true;
    export let inventoryOpen: boolean = false;
    export let CreditsOpen: boolean = false; 

    export let gameMenuOptions = {
        save: "Speichern",
        load: "Laden",
        shortcuts: "Shortcuts",
        credits: "Credits"
    };

    export let gameMenu: ƒS.Menu;

    export function showCredits(): void {
        ƒS.Text.setClass("credits");
        ƒS.Text.print("<p>  xyz </p>");
    }

    export function showShortcuts(): void {
        ƒS.Text.setClass("shortcuts");
        ƒS.Text.print("<p>  xyz </p>");
    }

    export async function buttonFunctionalities(_option: string): Promise<void> {
        console.log(_option);
        switch (_option) {
            case gameMenuOptions.save:
                await ƒS.Progress.save();
                break;
            case gameMenuOptions.load:
                await ƒS.Progress.load();
                break;
            /* case gameMenuOptions.close: 
                gameMenu.close();
                menuOpen = false;
                break; */
            case gameMenuOptions.credits:
                showCredits();
                break;
            case gameMenuOptions.shortcuts:
                showShortcuts();
                break;
        };
    }




    // Shortcuts
    document.addEventListener("keydown", hndKeyPress);

    export async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
        switch (_event.code) {
            case ƒ.KEYBOARD_CODE.I:
                if (inventoryOpen) {
                    ƒS.Inventory.close();
                    inventoryOpen = false;
                  } else {
                    ƒS.Inventory.open();
                  }
                  break;
            case ƒ.KEYBOARD_CODE.F8:
                console.log("Save");
                await ƒS.Progress.save();
                break;
            case ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await ƒS.Progress.load();
                break;
            case ƒ.KEYBOARD_CODE.ESC:
                if (menuOpen) {
                    console.log("Schließen");
                    gameMenu.close();
                    menuOpen = false;
                }
                else {
                    console.log("Öffnen");
                    gameMenu.open();
                    menuOpen = true;
                }
                break;
        }
    }

}