const input = document.querySelector("input[type='text']");
const add = document.querySelector(".btn");
const list = document.querySelector("ul");
const switchBtn = document.querySelector(".switch");


// THEME MODE SWITCHING STARTS HERE
let modeCheck = document.body.classList;
let getMode = localStorage.getItem("mode");
if (getMode === "light") {
  modeCheck.add("darkMode");
}
switchBtn.addEventListener("click", () => {
  modeCheck.toggle("darkMode");

  if (modeCheck.contains("darkMode")) {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
});

// ACTIONS OF TO-DO LIST STARTS HERE
add.addEventListener("click", (e) => {
  const getValues = input.value.trim();
  if (getValues === "") {
    return;
  }
  const listItem = document.createElement("li");
  list.appendChild(listItem);
  listItem.textContent = getValues;


  //   let span = document.createElement("span");
  // span.innerHTML = "&#x274C";
  // listItem.appendChild(span);
  
  // ADDITION OF IMG (FOR REMOVING LIST ITEMS)
  let img = document.createElement("img");
  img.src = "./assets/close-40.png";
  listItem.appendChild(img);

  input.value = "";
  saveData();
});

// FOR REMOVING THE ITEMS FROM THE LIST 
list.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// SAVING THE TO DO LIST IN LOCALSTORAGE 
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();
