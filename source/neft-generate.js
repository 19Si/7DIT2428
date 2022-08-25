function loadContent() {
    console.log('No.')
    randomHexColorCode()
    //inetiateDisplay()
    const canvasDiv = document.getElementsByClassName('displayedItem');
    for (let i = 0; i < 20; i++) {
        document.body.appendChild(
            console.log('No.'),
            createCanvas(i)
        )
        setImages(i)
    }
}
function loadNeFT() {
    console.log('No 1 asked ')
    randomHexColorCode()
    setImages(i)
}


function randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

function setImages(id) {
    var c = document.getElementById(id);
    var ctx = c.getContext("2d");
    ctx.beginPath()
    ctx.rect(0, 0, 512, 512)
    Math.random(16)
    ctx.fillStyle = randomHexColorCode()  
    ctx.fill()
    let randomNumber = Math.floor(Math.random() * 30);
    if (randomNumber < 10) randomNumber = "0" + randomNumber
    const img1Src = `./Base/${randomNumber}.svg`
    
    let randomNumber2 = Math.floor(Math.random() * 49);
    if (randomNumber2 < 10) randomNumber2 = "0" + randomNumber2
    const img2Src = `./Additional/a${randomNumber2}.svg`
    
    let randomNumber3 = Math.floor(Math.random() * 49);
    while (randomNumber3 === randomNumber2) {
        let randomNumber3 = Math.floor(Math.random() * 49);
    }
    if (randomNumber3 < 10) randomNumber3 = "0" + randomNumber3
    const img3Src = `./Additional/a${randomNumber3}.svg`
    
    var img1 = new Image;
    img1.fill = randomHexColorCode() 
    img1.src = img1Src
    img1.onload = function() {
        ctx.drawImage(img1, 0, 0, 350, 350);
    }
    var img2 = new Image;
    img2.fill = randomHexColorCode() 
    img2.src = img2Src
    img2.onload = function() {
        ctx.drawImage(img2, 0, 0, 350, 350);
    }
    var img3 = new Image;
    img3.fill = randomHexColorCode() 
    img3.src = img3Src
    img3.onload = function() {
        ctx.drawImage(img3, 0, 0, 350, 350);
    }
    
}

function createCanvas(id) {
    //        <canvas id="myCanvas" width="512" height="512" style="border:1px solid #000000;" onclick="redirect()">
    const canvas = document.createElement('canvas');
    canvas.id = id;
    canvas.className = 'productImage'
    canvas.width = '256'
    canvas.height = '256'
    // canvas.onclick = 'redirect()'
    return canvas
}

function redirect() {
    window.location.href = `/display?img1=${img1}&img2=${img2}&img3=${img3}`
}