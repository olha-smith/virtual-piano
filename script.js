document.addEventListener('keypress', event => {
    switch (event.key) {
        case "a":
            console.log("The 'A' key is pressed.");
            let keyAAudio = new Audio("media/white_keys/A.mp3");
            keyAAudio.play();
            break;
        case "s":
            console.log("The 'S' key is pressed.");
            let keySAudio = new Audio("media/white_keys/S.mp3");
            keySAudio.play();
            break;
        case "d":
            console.log("The 'D' key is pressed.");
            let keyDAudio = new Audio("media/white_keys/D.mp3");
            keyDAudio.play();
            break;
        case "f":
            console.log("The 'F' key is pressed.");
            let keyFAudio = new Audio("media/white_keys/F.mp3");
            keyFAudio.play();
            break;
        case "g":
            console.log("The 'G' key is pressed.");
            let keyGAudio = new Audio("media/white_keys/G.mp3");
            keyGAudio.play();
            break;
        case "h":
            console.log("The 'H' key is pressed.");
            let keyHAudio = new Audio("media/white_keys/H.mp3");
            keyHAudio.play();
            break;
        case "j":
            console.log("The 'J' key is pressed.");
            let keyJAudio = new Audio("media/white_keys/J.mp3");
            keyJAudio.play();
            break;
        case "w":
            console.log("The 'W' key is pressed.");
            let keyWAudio = new Audio("media/black_keys/W.mp3");
            keyWAudio.play();
            break;
        case "e":
            console.log("The 'E' key is pressed.");
            let keyEAudio = new Audio("media/black_keys/E.mp3");
            keyEAudio.play();
            break;
        case "t":
            console.log("The 'T' key is pressed.");
            let keyTAudio = new Audio("media/black_keys/T.mp3");
            keyTAudio.play();
            break;
        case "y":
            console.log("The 'Y' key is pressed.");
            let keyYAudio = new Audio("media/black_keys/Y.mp3");
            keyYAudio.play();
            break;
        case "u":
            console.log("The 'U' key is pressed.");
            let keyUAudio = new Audio("media/black_keys/U.mp3");
            keyUAudio.play();
            break;
        default:
            console.log("The wrong key is pressed!");
    }
});

