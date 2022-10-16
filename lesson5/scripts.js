const inputElement= document.getElementById("favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("ul");

buttonElement.addEventListener("click", function () {
    if (inputElement.value !== "") {

        const listItem = document.createElement("li");
        listItem.textContent = inputElement.value;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";

        listItem.append(deleteBtn);
        listElement.append(listItem);

        deleteBtn.addEventListener("click", function () {
            listElement.removeChild(listItem)})

        inputElement.value = "";
        document.getElementById("favchap").focus();
    }

})