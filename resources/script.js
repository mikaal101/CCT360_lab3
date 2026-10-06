let images1 = ["resources/images/image1.png", "resources/images/image12.png", "resources/images/image13.png"];
let images2 = ["resources/images/image2.png", "resources/images/image22.png", "resources/images/image23.png"];
let images3 = ["resources/images/image3.png", "resources/images/image32.png", "resources/images/image33.png"];
let images4 = ["resources/images/image4.png", "resources/images/image42.png", "resources/images/image43.png"];

let image1top = document.getElementsByClassName("image1")[0];
let image1bottom = document.getElementsByClassName("image1")[1];
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");

function randomindex() {
    let randindex = Math.floor(Math.random() * 3);
    return randindex;
}

image1top.src = images1[randomindex()];
image1bottom.src = images1[randomindex()];
image2.src = images2[randomindex()];
image3.src = images3[randomindex()];
image4.src = images4[randomindex()];

function randomize() {
    let image1topbottom = images1[randomindex()];
    image1top.src = image1topbottom;
    image1bottom.src = image1topbottom;
    image2.src = images2[randomindex()];
    image3.src = images3[randomindex()];
    image4.src = images4[randomindex()];
}

function randomlayer1top() {
    let theindex = randomindex();
    let randimage = images1[theindex];
    if (image1top.src.includes(randimage)) {
        let nextindex = (theindex + 1) % images1.length;
        image1top.src = images1[nextindex];
    } else {
        image1top.src = randimage;
    }
}

function randomlayer1bottom() {
    let theindex = randomindex();
    let randimage = images1[theindex];
    if (image1bottom.src.includes(randimage)) {
        let nextindex = (theindex + 1) % images1.length;
        image1bottom.src = images1[nextindex];
    } else {
        image1bottom.src = randimage;
    }
}

function randomlayer2() {
    let theindex = randomindex();
    let randimage = images2[theindex];
    if (image2.src.includes(randimage)) {
        let nextindex = (theindex + 1) % images2.length;
        image2.src = images2[nextindex];
    } else {
        image2.src = randimage;
    }
}

function randomlayer3() {
    let theindex = randomindex();
    let randimage = images3[theindex];
    if (image3.src.includes(randimage)) {
        let nextindex = (theindex + 1) % images3.length;
        image3.src = images3[nextindex];
    } else {
        image3.src = randimage;
    }
}

function randomlayer4() {
    let theindex = randomindex();
    let randimage = images4[theindex];
    if (image4.src.includes(randimage)) {
        let nextindex = (theindex + 1) % images4.length;
        image4.src = images4[nextindex];
    } else {
        image4.src = randimage;
    }
}

document.getElementById("randombutton").addEventListener("click", randomize);
image1top.addEventListener("click", randomlayer1top);
image1bottom.addEventListener("click", randomlayer1bottom);
image2.addEventListener("click", randomlayer2);
image3.addEventListener("click", randomlayer3);
image4.addEventListener("click", randomlayer4);
