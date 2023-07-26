let diskOne = document.querySelector(".disk1");
let diskTwo = document.querySelector(".disk2");
let diskThree = document.querySelector(".disk3");
diskOne.addEventListener("click", function () {
  document.addEventListener(
    "mousemove",
    function (ev) {
      diskOne.style.transform = "translateY(" + (ev.clientY - 80) + "px)";
      diskOne.style.transform += "translateX(" + (ev.clientX - 100) + "px)";
    },
    false
  );
});
