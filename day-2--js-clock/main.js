const hourHand = document.getElementsByClassName('hour-hand')[0];
const minHand = document.getElementsByClassName('min-hand')[0];
const secHand = document.getElementsByClassName('sec-hand')[0];
const hourDisplay = document.getElementsByClassName('hour-display')[0];
const minDisplay = document.getElementsByClassName('minute-display')[0];
const SecDisplay = document.getElementsByClassName('second-display')[0];





function setTime() {
    const now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    
    if (hours > 12) {
        hours = hours - 12;
    }
    hourHand.style.transform = `rotate(${(hours*30)+90}deg)`;
    minHand.style.transform = `rotate(${(minutes*6)+90}deg)`;
    secHand.style.transform = `rotate(${(seconds*6)+90}deg)`;

    hourDisplay.textContent = `${now.getHours()} : `;
    minDisplay.textContent = `${minutes} : `;
    SecDisplay.textContent = `${seconds}`;

}

setInterval(setTime, 500);