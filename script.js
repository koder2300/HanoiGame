let disks = document.querySelectorAll(".disk");
let boxOne = document.querySelector(".box1");
let boxTwo = document.querySelector(".box2");
let boxThree = document.querySelector(".box3");

//
for (disk of disks) {
  disk.addEventListener("dragstart", function (e) {
    let selected = e.target;

    boxTwo.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    boxThree.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    boxOne.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    boxOne.addEventListener("drop", function (e) {
      boxOne.appendChild(selected);
      selected = null;
    });
    boxTwo.addEventListener("drop", function (e) {
      boxTwo.appendChild(selected);
      selected = null;
    });
    boxThree.addEventListener("drop", function (e) {
      boxThree.appendChild(selected);
      selected = null;
    });
  });
}
