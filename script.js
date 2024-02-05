const input = document.querySelector(".input");
const body = document.querySelector("body");

input.checked = JSON.parse (localStorage.getItem("mode"));

updateBody();

function updateBody()
{
     if(input.checked)
     {
        body.style.background = "blue";
     }
     else
     {
        body.style.background = "green";
     }
}

input.addEventListener("input", ()=>{
    updateBody();
    updateStorage();
})

function updateStorage()
{
    localStorage.setItem("mode", JSON.stringify(input.checked));
}