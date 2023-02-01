// let numberOfDrumButtons = document.querySelectorAll(".drum").length;

// // for (var i = 0; i < numberOfDrumButtons; i++) {
// //     let buttonElement = document.querySelectorAll(".drum");
// //     buttonElement[i].addEventListener("click", function() {
// //         let buttonInnerHTML = this.innerHTML
// //         makeSound(buttonInnerHTML);
// //     })
// // }


// document.querySelectorAll(".drum").forEach(function(drumButtons){
//       drumButtons.addEventListener("click", function () {
//          let buttonInnerHTML = this.innerHTML;
//         // console.log(buttonInnerHTML);
//         makeSound(buttonInnerHTML);
//       });
// })
    
// document.addEventListener("keypress", function(event){
//     makeSound(event.key);
//   console.log(event.key);
  
//   }) 



// function makeSound(value){

//         let soundMap = {
//             w:"sounds/tom-1.mp3",
//             a:"sounds/tom-2.mp3",
//             s:"sounds/tom-3.mp3",
//             d:"sounds/tom-4.mp3",
//             j:"sounds/snare.mp3",
//             k:"sounds/crash.mp3",
//             l:"sounds/kick-bass.mp3"

//         };

//         if (!soundMap[value]) {
//           console.log(value);
//           return;
//         }
//         let sound = new Audio(soundMap[value]);
//             sound.play();


//     switch (key) {
//         case "w":
//             let tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play()
//             console.log("W have been selected");
//             break;
//         case "a":
//             let tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play()
//             console.log("a have been selected");
//             break;
//         case "s":
//             let tom3 = new Audio("sounds/tom-3.mp3");
//             tom3.play()
//             console.log("s have been selected");
//             break;
//         case "d":
//             let tom4 = new Audio("sounds/tom-4.mp3");
//             tom4.play()
//             console.log("d have been selected");
//             break;
//         case "j":
//             let snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             console.log("j have been selected");
//             break;
//         case "k":
//             let crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             console.log("k have been selected");
//             break;
//         case "l":
//             let kick = new Audio("sounds/kick-bass.mp3");
//             kick.play();
//             console.log("l have been selected");
//             break;
//             default: console.log(key)
//     }

// }


// // console.log(numberOfDrumButtons);


// // const drums = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
// // const drumButtons = document.getElementsByClassName('drum');

// // // Loop through the buttons
// // for (let i = 0; i < drumButtons.length; i++) {
// //     // Bind click listeners
// //     drumButtons[i].addEventListener('click', handleButtonClicks);
// // }

// // function handleButtonClicks (event) {
// //     const buttonText = event.target.innerText;

// //     // If clicked button's inner Text matches with one of the element of the array of drums
// //     // then set mathcedKey as our button string
// //     const matchedKey = drums.find((item) => item === buttonText);

// //     if (matchedKey) {
// //         new Audio(`sounds/${getSoundNameByDrumName(matchedKey)}`).play();
// //         console.log(`${matchedKey} drum was clicked!`);
// //     }
// // }

// // // Checking our keyboard pressings
// // document.addEventListener('keypress', handleKeyPressed);

// // // Handle keyboard pressings
// // function handleKeyPressed (event) {

// //     const key = event.key;

// //     // If pressed key matches with array of drums
// //     // then set mathcedKey as our key
// //     const matchedKey = drums.find((item) => item === key);

// //     if (matchedKey) {
// //         new Audio(`sounds/${getSoundNameByDrumName(matchedKey)}`).play();
// //         console.log(`${matchedKey} drum was pressed!`);
// //     } else {
// //         console.log(`${key} is not a drum key...`);
// //     }
// // }

// // function getSoundNameByDrumName (drumString) {
// //     switch (drumString) {
// //         case 'w':
// //             return 'tom-1.mp3';
// //         case 'a':
            
// //             return 'tom-2.mp3';
// //         case 's':
            
// //             return 'tom-3.mp3';
// //         case 'd':
            
// //             return 'tom-4.mp3';
// //         case 'j':
            
// //             return 'snare.mp3';
// //         case 'k':
            
// //             return 'crash.mp3';
// //         case 'l':
            
// //             return 'kick-bass.mp3';
// //         default:
// //             throw new Error('Unexpected drumString...');
// //     }
// // }
// //  const crash = new Audio()
// //  crash.src ="./sounds/crash.mp3"

// //  const kick = new Audio()
// //  kick.src ="./sounds/kick-bass.mp3"

// //  const snare = new Audio()
// //  snare.src ="./sounds/snare.mp3"

// //  const tom = new Audio()
// //  tom.src ="./sounds/tom-1.mp3"

// //  const tom2 = new Audio()
// //  tom2.src ="./sounds/tom-2.mp3"

// //  const tom3 = new Audio()
// //  tom3.src ="./sounds/tom-3.mp3"

// //  const tom4 = new Audio()
// //  tom4.src ="./sounds/tom-4.mp3"

let buttonOfDrums = document.querySelectorAll('.drum').length

for (let i = 0; i<buttonOfDrums.length; i++) {
    let inn=this.innerHTML
    let buttonElement = document.querySelectorAll('.drum')
    buttonElement[i].addEventListener('click',function(){
        let inner=this.innerHTML
       makeSound(inn)
    })
    
}

function makeSound(key){

    switch(key){
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break
            console.log('w has been pressed')
            default:console.log(key)
    }
}