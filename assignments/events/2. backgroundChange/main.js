
function getRandomHex() {
    let decNum = getRandomDec(0, 256*256*256);
    return decNum.toString(16);
}
function getRandomDec(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
document.body.addEventListener("click", ()=> {
     document.body.style.background = '#'+getRandomHex();
});

