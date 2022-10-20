const displayDoc = document.querySelector("title");
document.title = "Modifying the DOM";
console.log(document.title); //change title name

const bodyColor = document.querySelector('body');
bodyColor.style.background = 'rgb(150,100,1)'; //change body color

let bodyChildren = document.body.children;

for ( const bodyChild of bodyChildren ) {

    console.log(bodyChild);

} // add children to the console
