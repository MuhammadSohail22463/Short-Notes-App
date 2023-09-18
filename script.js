// create list editor and cross
const input = document.getElementById("inputbox");
const tasklist = document.getElementById("Tasklist");
function Addtask() {
    if (input.value === '') {
        alert("You Must Write Something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        tasklist.appendChild(li);
        let cross = document.createElement("span");
        cross.innerHTML = "\u00d7";
        li.appendChild(cross);
        savedata()
    }
    input.value = '';
    savedata()
}
//toggle between checked and unchecked and delete task
document.querySelector("#Tasklist").addEventListener("click", (a) => {
    if (a.target.tagName === "LI") {
        a.target.classList.toggle("checked");
        savedata()
    }else if (a.target.tagName === "SPAN") {
        a.target.parentElement.remove();
        savedata()
    }
},)
//Save Data
function savedata() {
    localStorage.setItem("data",tasklist.innerHTML)
}

function showdata() {
    tasklist.innerHTML = localStorage.getItem("data");
}
showdata()