window.addEventListener('DOMContentLoaded', (event) => {
  let frame = document.getElementById("frame");
  let prev = document.getElementById("prev");
  let next = document.getElementById("next");
  let label = document.getElementById("label");
  let cur = 0;
  let src = ["./pics/p1.jfif", "./pics/p2.jpg", "./pics/p3.jpeg", "./pics/p4.jpg", "./pics/p5.jpg"];
  let names = ["Sourdough", "Banana bread", "Challah", "Naan", "Foccacia"];
  frame.src = src[cur];
  label.innerHTML = names[cur];
  next.addEventListener("click", ()=>{
    if(cur < src.length - 1){
      cur++
    }
    else{
      cur = 0
    }
    frame.src = src[cur]
    label.innerHTML = names[cur];

  })
  prev.addEventListener("click", ()=>{
    if(cur > 0){
      cur--
    }
    else{
      cur = src.length - 1
    }
    frame.src = src[cur]
    label.innerHTML = names[cur];

  })
});
