namespace Application {

  export function showShortcuts(): void {
    ƒS.Text.setClass("shortcuts");
    let shortcuts =
      "<h1>Steuerung</h1>\
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
    ƒS.Text.print(shortcuts);
  }
}
