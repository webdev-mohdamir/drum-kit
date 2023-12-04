let numberOfDrumBtn = document.querySelectorAll('.drum');

for(let i=0; i<numberOfDrumBtn.length; i++){
    numberOfDrumBtn[i].addEventListener("click", function(){
        var buttonClicked = this.innerHTML;
        playSound(buttonClicked);

        buttonAnimation(buttonClicked);
    });
}


document.addEventListener('keydown', function(event){
    var keyClicked = event.key;
    playSound(keyClicked);

    buttonAnimation(keyClicked);
});

function playSound(key){

    switch(key){
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;

        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
            break;

        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;

        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        default:
            console.log("Wrong Key")

    }
    
    console.log(key); // It will tells you which button has clicked
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}


// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();

// function anotherAddEventListner(typeOfEvent, callback){

//     // Detect Event Code...
//     var eventThatHeppend = {
//         eventType: "keydown",
//         key: "p",
//         durationOfkeydown: 2
//     }

//     if(eventThatHeppend.eventType === typeOfEvent){
//         callback(eventThatHeppend);
//     }
// }

// debugger;
// anotherAddEventListner("keydown", function(evt){console.log(evt)});
