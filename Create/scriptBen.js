var names = ["ben", "diego", "hassan", "estime", "munise", "arseniia"]
var nalen = names.length

names.sort(() => Math.random() - 0.5);

for (i=0; i<nalen; i++) {
    var sec = document.createElement("section");
    var text = document.createTextNode(names[i]);
    sec.appendChild(text);
    var element = document.querySelector('article');
    element.appendChild(sec);

    d1 = Math.floor(Math.random() * 255);
    d2 = Math.floor(Math.random() * 255);
    d3 = Math.floor(Math.random() * 255);

    randomcolor = "rgb("+d1+","+d2+","+d3+")";

    sec.style.background = randomcolor;  

}

let bgColor = document.querySelectorAll('section');

for (let ntext of bgColor) {
    let d1 = Math.floor(Math.random() * 360);
    let d2 = Math.floor(Math.random() * 100);
    let d3 = Math.floor(Math.random() * 100);
    ntext.style.background = 'hsl('+ d1 +','+ d2 +'%,'+ d3 +'%)';
    if (d3 > 50) {
        ntext.style.color = 'black';
    }
    else if (d3 <= 50) {
        ntext.style.color = 'white';
    }
}