let btn = document.querySelector(".search button");
let inputVal = document.querySelector(".search input");
let bool = true;
let contOfItem = document.querySelector(".items");


function saveData(){
  localStorage.setItem("data",document.querySelector(".items").innerHTML);

}

function showTask(){
  contOfItem.innerHTML = localStorage.getItem("data");
}
showTask();
function createList(){
  let item = document.createElement("div");
  item.setAttribute("class","item");
  let div =  document.createElement("div");
  let img = document.createElement("img");
  let text = document.createElement("h5");
  let i = document.createElement("i");
  // console.log(i);
  i.setAttribute('class','bx bx-x');
  text.innerText = inputVal.value;
  img.src = "./images/unchecked.png";
  div.appendChild(img);
  div.appendChild(text);
  item.appendChild(div);
  item.appendChild(i);
  document.querySelector(".items").appendChild(item);
  // console.log(document.querySelector(".items"));
  console.log(document.querySelector(".items"));
  inputVal.value = '';
  saveData()
}


document.addEventListener("DOMContentLoaded", () => {
  btn.addEventListener("click", () => {
    if(inputVal.value === ''){
      alert("You Must Have To Write Something");
    }
    else{
      createList();
    }
  });
  

  document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      if(inputVal.value === ''){
        alert("You Must Have To Write Something");
      }
      else{
        createList();
      }
    }
    
  });

  document.addEventListener("click", (event) => {
    if (event.target.matches(".item img")) {
      const img = event.target;
      const currentState = img.getAttribute("data-state");
      const newState = currentState === "checked" ? "unchecked" : "checked";
      img.src = `./images/${newState}.png`;
      img.setAttribute("data-state", newState);
      const parentItem = img.closest(".item");
      const h5Element = parentItem.querySelector("h5");
      if(img.getAttribute("data-state") == "checked"){
        h5Element.style.textDecoration = "line-through";
        h5Element.style.textDecorationThickness = "2px";
      console.log("checked");
      }
      else{
        h5Element.style.textDecoration = "none";
      }
    }
    else if(event.target.matches(".item i")) {
      const x = event.target;
      const parentItem = x.closest(".item");
      parentItem.remove();
      saveData();
    }
  });
});


 
