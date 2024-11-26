const containerColor = document.getElementById("container-color-picker");
const container = document.getElementById("color-container");

containerColor.addEventListener("input", () => {
  container.style.backgroundColor = containerColor.value;
});
const borderColor = document.getElementById("border-color-picker");
;

borderColor.addEventListener("input", () => {
  container.style.border = `5px solid ${borderColor.value}`;
});

const textInput = document.getElementById("text-input");
const displayText = document.getElementById("display-text");

textInput.addEventListener("input", () => {
  displayText.innerText = textInput.value;
});

const textColor = document.getElementById("text-color-picker");


textColor.addEventListener("input", () => {
  displayText.style.color = textColor.value;
});
function download(){
  alert("this feature will get on next update");
}


function ss1(){
  const container = document.getElementById("color-container");
  
  container.style.height="400px";
  container.style.width="400px";
}
function ss2(){
  const container = document.getElementById("color-container");
  
  container.style.height="500px";
  container.style.width="275px";
}
function ss3(){
  const container = document.getElementById("color-container");
  
  container.style.height="275px";
  container.style.width="600px";
}
function ss4(){
  const container = document.getElementById("color-container");
  
  container.style.height="390px";
  container.style.width="530px";
}
function ss5(){
  const container = document.getElementById("color-container");
  
  container.style.height="470px";
  container.style.width="380px";
}
