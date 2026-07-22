// Variables
let inputField = document.querySelector("input");
let submitBtn = document.querySelector(".input button");
let clearAllBtn = document.querySelector(".clearAll");
let taskList = document.querySelector("ul");

// Functions

const addTask = () => {
  let task = inputField.value;

  if (task == "") {
    console.log("Empty input"); //to avoid empty input
    return;
  }

  let newItem = document.createElement("li"); // to create a new item

  newItem.innerHTML = `
              <p>${task}</p>
              <div>
                <button>
                  <i class="fa-solid fa-check" style="color: rgb(0, 209, 70)"></i>
                </button>
                <button>
                  <i
                    class="fa-regular fa-trash-can"
                    style="color: rgb(211, 0, 0)"
                  ></i>
                </button>
              </div>`;

  taskList.appendChild(newItem); // to add the new item.

  console.log("submit button clicked");
};

const clearAllTasks = () => {
    taskList.innerHTML = ""; //to clear the tasks!

    console.log("All Tasks Cleared");
};

// Event Listeners
submitBtn.addEventListener("click", addTask);
clearAllBtn.addEventListener("click", clearAllTasks);
