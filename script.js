let disks = document.querySelectorAll(".disk");
let numberMoves = 0;
let numbers = document.querySelector(".number");
//
//      FIRST RESULT
let boxes = document.querySelectorAll(".box");
disks.forEach((disk) => {
  disk.addEventListener("dragstart", () => {
    disk.classList.add("dragging");
  });
  disk.addEventListener("dragend", (e) => {
    disk.classList.remove("dragging");
    numberMoves++;
    numbers.textContent = `${numberMoves}`;
    console.log(numberMoves);
  });
});
boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    // console.log(e);

    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    box.appendChild(draggable);
  });
});

////////// MATI RESULT

//////////////////////    MATI RESULT
// let boxOne = document.querySelector(".box1");
// let boxTwo = document.querySelector(".box2");
// let boxThree = document.querySelector(".box3");

// let selected;
// for (disk of disks) {
//   disk.addEventListener("dragstart", function (e) {
//     console.log("dragstart");
//     selected = e.target;
//   });
// }
// boxTwo.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// boxThree.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// boxOne.addEventListener("dragover", function (e) {
//   e.preventDefault();
// });

// boxOne.addEventListener("drop", function (e) {
//   console.log("box1 drop", selected);
//   boxOne.appendChild(selected);
//   selected = null;
// });

// boxTwo.addEventListener("drop", function (e) {
//   console.log("box2 drop", selected);
//   boxTwo.appendChild(selected);
//   selected = null;
// });

// boxThree.addEventListener("drop", function (e) {
//   console.log("box3 drop", selected);
//   boxThree.appendChild(selected);
//   selected = null;
// });
