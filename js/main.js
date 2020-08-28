let spand = document.querySelectorAll(".card-header");
for (let el of spand) {
  el.addEventListener("click", () => {
    let toogleSign = el.querySelector(".spand").children;
    for (const index of toogleSign) {
      index.classList.toggle("active");
    }
  });
}
