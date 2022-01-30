namespace Application {

  export function showCredits(): void {
    ƒS.Text.setClass("credits");
    let credits =
      "<h1>CREDITS</h1>\
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
    ƒS.Text.print(credits);
  }
}