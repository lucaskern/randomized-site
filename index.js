
$(document).ready(function(){
    randomizeStyle();
});

function randomizeStyle() {


    getColor();

    getSize();
    getMargin();
    getPadding();
}

function getColor() {
    let rval = getRandomInt(0, 255);
    let gval = getRandomInt(0, 255);
    let bval = getRandomInt(0, 255);

    let colorVal =  `rgb(${rval}, ${gval}, ${bval})`;

    $("body").css("background-color", colorVal);
}

function getSize() {
    let randS = getRandomInt(6, 18);
    $("p").css("font-size", randS);

    randS = getRandomInt(18, 64);
    $("h1").css("font-size", randS);
    $("h2").css("font-size", randS * .8);
    $("h3").css("font-size", randS * .7);
    $("h4").css("font-size", randS * .6);

}

function getMargin() {
    $("body").each(function() {
        console.log(this);
        let randM = getRandomInt(0, 30)
        $(this).css("margin-top", randM + 'px');
        randM = getRandomInt(0, 30)
        $(this).css("margin-right", randM + 'px');
        randM = getRandomInt(0, 30)
        $(this).css("margin-bottom", randM + 'px');
        randM = getRandomInt(0, 30)
        $(this).css("margin-left", randM + 'px');
    });
}

function getPadding() {

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
  