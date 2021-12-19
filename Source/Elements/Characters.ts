namespace Application {

    export let characters = {
        lara: {
            name: "Lara",
            origin: ƒS.ORIGIN.BOTTOMCENTER, // Anzeigeort des Charakters    
            pose: { // Sammeln der Bilddateien
                neutral: "./Images/Characters/lara_neutral.png", // Pfad
                happy: "./Images/Characters/lara_happy.png",
                sad: "./Images/Characters/lara_sad.png"
            }
        },
        katy: {
            name: "Katy",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/katy_neutral.png",
            }
        },
        barkeeper: {
            name: "Barkeeper",
            origin: ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                neutral: "./Images/Characters/barkeeper_neutral.png",
            }
        }
    }
    
}    