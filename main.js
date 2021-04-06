//sounds
const tick = new Audio('sounds/tick.mp3');
const tock = new Audio('sounds/tock.mp3')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum = new Audio('sounds/snare-drum.mp3')
 
//count of the update function
let currentCount = 0;

// This function is called every 600ms
function update() {

    // Play the 'tick' sound
    const metronome = document.querySelector('#metronome')
    if (metronome.checked) {
        tick.play();
 
    }

    const element = document.body
        if (currentCount === 1) 
            element.style.background = 'red';
        if (currentCount === 2) 
            element.style.background = 'white';
        if (currentCount === 3) 
            element.style.background = 'blue';
        if (currentCount === 4) 
            element.style.background = 'turquoise';
        

    //play tock every 4th count
    if (currentCount % 4 === 0 && metronome.checked) {
        tock.play()
    }

    //check if hihat is checked
    const hiHatChecked = document.querySelector('#hi-hat')
    if (hiHatChecked.checked) {
        if (Number(hiHatChecked.value === currentCount)) {
            hiHat.load();
            hiHat.play();
        }
        hiHat.load()
        hiHat.play()
    }
    
    //check if there is a value for beats and play on the chosen number
    const hiHatBeat = document.querySelector('.hiHat-quantity')
    if (Number(hiHatBeat.value) === 1 && currentCount === 1) {
        hiHat.load();
        hiHat.play();
    } else if (Number(hiHatBeat.value) === 2 && currentCount === 2) {
        hiHat.load();
        hiHat.play();
    } else if (Number(hiHatBeat.value) === 3 && currentCount === 3) {
        hiHat.load();
        hiHat.play();
    } else if (Number(hiHatBeat.value) === 4 && currentCount === 4) {
        hiHat.load();
        hiHat.play();
    }

    //check if kickDrum is checked
    const kickDrumChecked = document.querySelector('#kick-drum')
    if (kickDrumChecked.checked) {
        if (Number(kickDrumChecked.value) === currentCount) {
            kickDrumChecked.play()
        }
        kickDrum.play()
    }

    const kickDrumBeat = document.querySelector('.kickDrum-quantity')
    if (Number(kickDrumBeat.value) === 1 && currentCount === 1) {
        kickDrum.play()
    } else if (Number(kickDrumBeat.value) === 2 && currentCount === 2) {
        kickDrum.play()
    } else if (Number(kickDrumBeat.value) === 3 && currentCount === 3) {
        kickDrum.play()
    } else if (Number(kickDrumBeat.value) === 4 && currentCount === 4) {
        kickDrum.play()
    }

    //check if snareDrum is checked
    const snareDrumChecked = document.querySelector('#snare')
    if (snareDrumChecked.checked) {
        if (Number(snareDrumChecked.value) === currentCount) {
            snareDrum.play()
        }
        snareDrum.play()
    }

    const snareDrumBeat = document.querySelector('.snare-quantity')
    if (Number(snareDrumBeat.value) === 1 && currentCount === 1) {
        snareDrum.play()
    } else if (Number(snareDrumBeat.value) === 2 && currentCount === 2) {
        snareDrum.play()
    } else if (Number(snareDrumBeat.value) === 3 && currentCount === 3) {
        snareDrum.play()
    } else if (Number(snareDrumBeat.value) === 4 && currentCount === 4) {
        snareDrum.play()
    }

    //grab and append the current count
    const count = document.querySelector('.metronome-count')
    count.innerText = currentCount

    //reset the current count
    if (currentCount > 3) {
        currentCount = 0
    }

    //increment the count
    currentCount++;
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
            setTimeout(setupUpdate, 300);
