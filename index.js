const list = document.querySelector(".packingList");
const remaining = document.querySelector(".remaining");
document.querySelector(".form").addEventListener("submit", handleSubmit);

let count = 0;

function handleSubmit(e) {
  e.preventDefault();

  const itemInput = document.querySelector("#item");
  const item = itemInput.value.trim();

  if (item) {
    const li = document.createElement("li");
    li.style.fontSize = "1.2rem";

    const closebtn = document.createElement("button");
    closebtn.textContent = "❌";
    closebtn.style.cursor = "pointer";
    closebtn.addEventListener("click", () => {
      li.remove();
      if (count > 0) {
        count--;
        updateCount();
      }
    });

    const packedbtn = document.createElement("button");
    packedbtn.textContent = "✅";
    packedbtn.style.cursor = "pointer";
    packedbtn.addEventListener("click", () => {
      li.style.cursor = "pointer";
      li.style.textDecoration = "line-through";
      if (count > 0) {
        count--;
        updateCount();
      }
    });

    const span = document.createElement("span");
    span.textContent = " " + item + " ";

    // now append them in desired order:
    li.append(packedbtn);
    li.append(span);
    li.append(closebtn);
    list.append(li);
    count++;
    updateCount();

    itemInput.value = "";
  }
}

function updateCount() {
  remaining.textContent = `You have ${count} item(s) remaining`;
}
