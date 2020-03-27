window.addEventListener('DOMContentLoaded', (event) => {
  let apply = document.getElementById("apply");
  let redB = document.getElementById("redB");
  let greenB = document.getElementById("greenB");
  let blueB = document.getElementById("blueB");
  let widthB = document.getElementById("widthB");
  let text = document.getElementById("text");
  let greenBG = document.getElementById("greenBG");
  let blueBG = document.getElementById("blueBG");
  let widthBG = document.getElementById("widthBG");

  apply.addEventListener("click", ()=>{
    let bstyle = widthB.value + "px solid rgb(0" + redB.value + ",0" + greenB.value + ",0"+blueB.value+")";
    text.style.border = bstyle;
    let bgstyle = "rgb(0" + redBG.value + ",0" + greenBG.value + ",0"+blueBG.value+")";
    text.style.background = bgstyle;
  })

});
