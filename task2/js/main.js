
let boxes = document.querySelectorAll(".box");
let mainBox = document.querySelector(".main-box");
let mainBox2 = document.querySelector(".main-box-2");

boxes.forEach((elem, index) => {
    elem.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text", elem.getAttribute("data-id"));
    });
});

mainBox.addEventListener("dragover", function (e) {
    e.preventDefault();
});

mainBox.addEventListener("drop", function (e) {
    e.preventDefault();
    let dataId = e.dataTransfer.getData("text");
    let draggedBox = document.querySelector(`[data-id='${dataId}']`);
    if (draggedBox) {
        mainBox.appendChild(draggedBox);
    }
});

mainBox2.addEventListener("dragover", function (e) {
    e.preventDefault();
});

mainBox2.addEventListener("drop", function (e) {
    e.preventDefault();
    let dataId = e.dataTransfer.getData("text");
    let draggedBox = document.querySelector(`[data-id='${dataId}']`);
    if (draggedBox) {
        mainBox2.appendChild(draggedBox);
    }
});

let logo = document.getElementById("logo");
logo.addEventListener("click", function () {
    let fileInput = document.getElementById("fileInput");
    fileInput.click();
});

let fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", function () {
    let selectedFile = fileInput.files[0];
    let reader = new FileReader();
    reader.onload = function (event) {
        let newImage = document.createElement("img");
        newImage.src = event.target.result;
        newImage.className = "box";
        let mainBox = document.querySelector(".main-box");
        mainBox.appendChild(newImage);
    };
    reader.readAsDataURL(selectedFile);
});
