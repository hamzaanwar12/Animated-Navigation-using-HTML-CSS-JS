let button = document.querySelector("button")
console.log(button)
button.addEventListener("click",()=>
{
    document.querySelector("nav").classList.toggle("active")
})