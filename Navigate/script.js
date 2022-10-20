// Navigate

// Last Child becomes First Child

const list = document.querySelector("ol");

fast = list.lastElementChild

sleep = list.firstElementChild

list.insertBefore(fast, sleep)


// H2 moves to another section

const sections = document.querySelectorAll("section")

htwo = sections[1].firstElementChild

hthree = sections[2].firstElementChild.firstElementChild

sections[1].insertBefore(hthree, htwo)

sthreediv = sections[2].firstElementChild

sthreediv.appendChild(htwo)

sthreedivchild = sthreediv.firstElementChild

sthreediv.insertBefore(htwo, sthreedivchild)



// Remove the last section

const lastsection = Array.from(document.querySelectorAll("section")).pop();

lastsection.remove()