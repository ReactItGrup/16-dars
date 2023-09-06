const ul = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // ul.innerHTML += "<li>Something new text 😀</li>";
  const li = document.createElement("li");
  li.textContent = "Something new text 😀";
  ul.appendChild(li);
  // ul.prepend(li);
});

const items = document.querySelectorAll("li");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    // e.target.remove();
    console.log("Clicked li");
    e.stopPropagation;
    //   stopPropagation = itemdan tashqaridagi blockga event o'tkazmaydi
  });
});

ul.addEventListener("click", (e) => {
  //   console.log(e.target);
  if (e.target.nodeName == "LI") {
    e.target.remove();
  }
  //   console.log(e.target.nodeName)
});
