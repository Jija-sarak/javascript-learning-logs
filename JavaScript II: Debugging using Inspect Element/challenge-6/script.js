const selectPriority = document.getElementById("priority");
const taskContainer = document.getElementById("task-container");
const addTaskBtn = document.getElementById("add-task");
const TaskList = [];
const task = {name: "", priority: "", status: "Pending"};

selectPriority.addEventListener("change", (e) =>{
    console.log(e.target.value);
});

addTaskBtn.addEventListener("click", () => {

});