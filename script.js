const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("listContainer");



function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {

        let li = document.createElement("li"); // Create a new list item (li) element
        li.innerHTML = inputBox.value; // Set the inner HTML of the list item to the value of the input box
        listContainer.appendChild(li); // Append the new list item to the list container
        let span = document.createElement("span"); // Create a new span element
        span.innerHTML = "\u00d7"; // Set the inner HTML of the span to the Unicode character for '×' (multiplication symbol)
        li.appendChild(span); // Append the span to the newly created list item

    }
    inputBox.value = ""; // Clear the input box value
    saveData();

}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }


}, false);


function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();




inputBox.addEventListener("keyup", (event) => {
    if (event.which === 13) {
        addTask();
    }
});