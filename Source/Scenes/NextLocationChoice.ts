namespace Application {
  export async function NextLocationChoice(): ƒS.SceneReturn {
    console.log("NextLocationChoice");

    let chooseNextLocationOptions = {
      library: "Zu Gabi in die Bücherei",
      harbor: "Zu Wilma an den Hafen",
      cafe: "Zu Tante Elise ins Café",
      bar: "Zu Uwe in die Kneipe",
    };

    if (dataForSave.visitedLibrary) {
      delete chooseNextLocationOptions.library;
    }
    if (dataForSave.visitedHarbor) {
      delete chooseNextLocationOptions.harbor;
    }
    if (dataForSave.visitedCafe) {
      delete chooseNextLocationOptions.cafe;
    }
    if (dataForSave.visitedBar) {
      delete chooseNextLocationOptions.bar;
    }

    if (Object.entries(chooseNextLocationOptions).length == 0) {
      return "Outro";
    }

    let chooseNextLocation = await ƒS.Menu.getInput(chooseNextLocationOptions, "choice");

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
}
