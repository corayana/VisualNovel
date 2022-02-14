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
    ƒS.Text.print(credits);
  }
}