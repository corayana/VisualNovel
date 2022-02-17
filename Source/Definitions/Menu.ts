namespace Application {

  //menu variables
  export let menuOpen: boolean = true;
  export let inventoryOpen: boolean = false;
  export let CreditsOpen: boolean = false;

  // volume 
  /* xeport let volume: number = 1.0;

  export function incrementSound(): void {
    if (volume >= 100)
      return;
    volume += 0.2;
    ƒS.Sound.setMasterVolume(volume);
  }

  export function decrementSound(): void {
    if (volume <= 0)
      return;
    volume -= 0.2;
    ƒS.Sound.setMasterVolume(volume);
  }
 */
  export let gameMenuOptions = {
    save: "Speichern",
    load: "Laden",
    shortcuts: "Shortcuts",
    credits: "Credits",
    /* turnUpVolume: "+",
    turnDownVolume: "-" */
  };

  export let gameMenu: ƒS.Menu;

  export async function buttonFunctionalities(_option: string): Promise<void> {
    console.log(_option);
    switch (_option) {
      case gameMenuOptions.save:
        await ƒS.Progress.save();
        break;
      case gameMenuOptions.load:
        await ƒS.Progress.load();
        break;
      case gameMenuOptions.credits:
        showCredits();
        break;
      case gameMenuOptions.shortcuts:
        showShortcuts();
        break;
      /* case gameMenuOptions.turnUpVolume:
        incrementSound();
        break;
      case gameMenuOptions.turnDownVolume:
        decrementSound();
        break; */
    }
  }

  // shortcuts
  document.addEventListener("keydown", hndKeyPress);

  async function hndKeyPress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.I:
        if (inventoryOpen) {
          ƒS.Inventory.close();
          inventoryOpen = false;
        } else {
          ƒS.Inventory.open();
          inventoryOpen = true;
        }
        break;
      case ƒ.KEYBOARD_CODE.F8:
        console.log("save");
        await ƒS.Progress.save();
        break;
      case ƒ.KEYBOARD_CODE.F9:
        console.log("load");
        await ƒS.Progress.load();
        break;
      case ƒ.KEYBOARD_CODE.ESC:
        if (menuOpen) {
          console.log("close menu");
          gameMenu.close();
          menuOpen = false;
        } else {
          console.log("open menu");
          gameMenu.open();
          menuOpen = true;
        }
        break;
    }
  }
}
