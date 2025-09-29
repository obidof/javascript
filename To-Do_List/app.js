    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    // Vazifani qo'shish
    function addTask() {
      const taskText = input.value.trim();
      if (taskText === "") return;

      const li = document.createElement("li");
      li.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">O'chirish</button>
      `;

      // Vazifani bajarilgan qilish
      li.querySelector(".task-text").addEventListener("click", function() {
        li.classList.toggle("done");
      });

      // Vazifani o'chirish
      li.querySelector(".delete-btn").addEventListener("click", function() {
        li.remove();
      });

      taskList.appendChild(li);
      input.value = "";
    }

    addBtn.addEventListener("click", addTask);
    input.addEventListener("keypress", function(e) {
      if (e.key === "Enter") {
        addTask();
      }
    });