// let input = document.getElementById("input")
// let button = document.getElementById("button")
// let output = document.getElementById("output")
// let remove = document.getElementById("remove")
// function add() {
//     let task = input.value
//     output.innerHTML += `<li >${task}</li>`    
//     input.value = ""     
// }
// function delet(element) {
//     task.innerHTML = "" 
// }
    


let output = document.getElementById("output");

        function add() {
            let input = document.getElementById("input");
            let task = input.value.trim(); // Remove leading and trailing spaces
            if (task !== "") {
                output.innerHTML += `<div onclick="removeTask(this)"> ${task} <span> <button class = "btn" >X</button><span> </div>`;
                input.value = "";
            } else {
                alert("Please enter a task!");
            }
        }

        function removeTask(element) {
            element.style.display = "none";
            // document.querySelector(".your").style.display = "visible";    
}
function reset() {
    output.innerHTML =""
}