document.addEventListener("DOMContentLoaded", function() {
    let doneList = document.getElementById("doneTaskList");
    let todoList = document.getElementById("todoTaskList");
    let dropAreas = document.querySelectorAll(".drop-area");

    
    function addDragEvents() {
        let listItems = document.querySelectorAll(".task-list li");

        listItems.forEach((elem, index) => {
            elem.draggable = true;
            elem.addEventListener("dragstart", function (e) {
                e.dataTransfer.setData("index", index);
            });
        });
    }

    addDragEvents();

    dropAreas.forEach(elem => {
        elem.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        elem.addEventListener("drop", function (e) {
            e.preventDefault();
            let index = e.dataTransfer.getData("index");
            let draggedItem = document.querySelectorAll(".task-list li")[index];
            let currentList = draggedItem.closest('.task-list');
            let targetList = elem.querySelector('ul');

            if (currentList != targetList) {
                targetList.appendChild(draggedItem);
                addDragEvents();
            }
        });
    });
});
