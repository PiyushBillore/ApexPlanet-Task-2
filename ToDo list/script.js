// Select DOM elements
const form = document.getElementById("todoForm");
const todoInput = document.getElementById("todo");
const descInput = document.getElementById("desc");
const taskSection = document.getElementById("taskSection");

// Form submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const taskText = todoInput.value.trim();
  const descText = descInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create a task card
  const taskCard = document.createElement("div");
  taskCard.classList.add("task-card");

  const title = document.createElement("h3");
  title.textContent = taskText;
  taskCard.appendChild(title);

  if (descText !== "") {
    const desc = document.createElement("p");
    desc.textContent = descText;
    taskCard.appendChild(desc);
  }

  // Status display
  const status = document.createElement("div");
  status.textContent = "Status: Pending";
  status.classList.add("status", "pending");
  taskCard.appendChild(status);

  // Buttons container
  const actions = document.createElement("div");
  actions.classList.add("task-actions");

  // Toggle Status Button
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Mark Completed";
  toggleBtn.classList.add("toggle-btn");

  toggleBtn.addEventListener("click", () => {
    if (status.classList.contains("pending")) {
      status.classList.remove("pending");
      status.classList.add("completed");
      status.textContent = "Status: Completed";
      toggleBtn.textContent = "Mark Pending";
    } else {
      status.classList.remove("completed");
      status.classList.add("pending");
      status.textContent = "Status: Pending";
      toggleBtn.textContent = "Mark Completed";
    }
  });

  // Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => taskCard.remove());

  actions.appendChild(toggleBtn);
  actions.appendChild(deleteBtn);
  taskCard.appendChild(actions);

  // Add to section
  taskSection.appendChild(taskCard);

  // Reset form
  todoInput.value = "";
  descInput.value = "";
});
