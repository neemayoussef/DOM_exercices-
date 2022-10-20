const important = document.querySelectorAll('.important');
console.log(important);

for (const iterator of important) {
    iterator.title = "This title is very important";  
    
}; //add a title


const changeImge = document.querySelectorAll('img');

for (const element of changeImge ) {
    if ( ! element.classList.contains('important')){
        element.style.display = "none";
    }
}; //select an img

const getParagph = document.querySelectorAll("p");
displayAllP = getParagph.length;

for ( i = 0; i < displayAllP; i++ ) {
    if(getParagph[i].classList.length ==0){
        console.log(getParagph[i].innerText);
    } else {
        console.log(getParagph[i].innerText);
        console.log(getParagph[i].className);
    }


};


const ClassSerch = (element) => {
    return element.classList.length > 0;
};

const SelectMyParag = document.querySelectorAll("p");
for ( const paragph of SelectMyParag ) {
    if (ClassSerch(SelectMyParag)){
        console.log(SelectMyParag.innerText);
        console.log(paragph.classList.value);
    } else {
        const a = Math.floor(Math.random() * 254);
        const b = Math.floor(Math.random() * 254);
        const c = Math.floor(Math.random() * 254);
        SelectMyParag.style.color = "rgb(${a}, ${b}, ${c})";
    }
};
























// var allpar = document.querySelectorAll('p')
// parlen = allpar.length

// for(i=0; i<parlen; i++) {

//     if (allpar[i].classList.length == 0) {
//         console.log(allpar[i].innerText)
//     }
//     else {
//        console.log(allpar[i].innerText)
//        console.log (allpar[i].className)
//     }
// }