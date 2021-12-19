namespace Application {

    //define transitions
    export let transitions = {
        clock: {                                  // name der transition
            duration: 1,
            alpha: "./Transitions/painting.jpg",  // pfad
            edge: 0.5                                 // haertegrad der transition (je niedriger die Zahl, desto weicher)
        }
    }

}