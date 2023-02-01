let buttonOfDrums = document.querySelectorAll('.drum')

for (let i = 0; i<buttonOfDrums.length; i++) {
    
    let buttonElement = document.querySelectorAll('.drum')
    buttonElement[i].addEventListener('click',function(){
        let inn = this.innerHTML
       makeSound(inn)
    })
    
}
document.addEventListener('keypress',function(event){
    makeSound(event.key)
})
function makeSound(key){

    switch(key){
        case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            console.log('w has been pressed')
            break;
        case "a":
                let tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                console.log('a has been pressed')
                break
         case "s":
                    let tom4 = new Audio('sounds/tom-4.mp3')
                    tom4.play()
                    console.log('s has been pressed')
                    break;
         case "d":
                    let crash = new Audio('sounds/crash.mp3')
                        crash.play()
                        console.log('d has been pressed')
                        break;           
         case "j":
                            let kickbass = new Audio('sounds/kick-bass.mp3')
                            kickbass.play()
                            console.log('j has been pressed')
                            break;                
        case "k":
                                let snare = new Audio('sounds/snare.mp3')
                                snare.play()
                                console.log('k has been pressed')
                                break;    
          case "l":
                                    let tom3 = new Audio('sounds/tom-3.mp3')
                                    tom3.play()
                                    console.log('l has been pressed')
                                    break;  


            default:console.log(key)
    }
}