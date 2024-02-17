let button = document.querySelector("button")
let ul = document.querySelector("ul")
let li = document.querySelectorAll("li.item")
let first = document.getElementById("first")
let second = document.getElementById("second")

console.log(button)
console.log(ul)
console.log(first)
console.log(second)
let i = 0;
let margin =()=>
{
    if (i % 2 == 0) {
        first.style.left = "0px"
        second.style.right = "0px"
        i++
    }
    else {
        first.style.left = "5px"
        second.style.right = "5px"
        i++
    }
}

button.addEventListener("click", () => {
    setTimeout(() => 
    {
        margin()
        
        button.classList.toggle("equalAlignmet")
        
        first.classList.toggle("rotation")
        second.classList.toggle("rotation")
        setTimeout(() => {
            first.classList.toggle("endRotaion")
            second.classList.toggle("negendRotation")    
        }, 0100);
        

    }, 50);

    button.classList.toggle("buttonActive")
    first.classList.toggle("rotation")
    second.classList.toggle("rotation")
    ul.classList.toggle("ulInactive")
    li.forEach(element => element.classList.toggle("liInactive"))

})

