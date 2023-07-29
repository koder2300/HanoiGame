let disks = document.querySelectorAll(".disk");
let numberMoves = 0;
let numbers = document.querySelector(".number");
numbers.textContent = "0";
let draggable = [];
//
let disk1 = document.querySelector(".disk1");
let disk2 = document.querySelector(".disk2");
let disk3 = document.querySelector(".disk3");
//
let red1 = document.querySelector(".red");
let diskOne = document.querySelector("#disk1");
let diskTwo = document.querySelector("#disk2");
let diskThree = document.querySelector("#disk3");
let blue1 = document.querySelector(".blue");
let green1 = document.querySelector(".green");
let box3 = document.querySelector(".box:nth-child(3)");
// console.log(box3);
//      FIRST RESULT
let boxes = document.querySelectorAll(".box");
diskOne.addEventListener("dragstart", () => {
  diskOne.classList.add("dragging");
  console.log(`yes`);

  disks.forEach((disk) => {
    disk.addEventListener("dragstart", () => {
      disk.classList.add("dragging");
    });

    disk.addEventListener("dragend", (e) => {
      disk.classList.remove("dragging");
      numberMoves++;
      numbers.textContent = `${numberMoves}`;
      draggable.push(disk);

      //
      if (
        box3.contains(diskOne) &&
        box3.contains(diskTwo) &&
        box3.contains(diskThree)
      ) {
        if (
          draggable.indexOf(red1) === 0 &&
          draggable.indexOf(blue1) === 1 &&
          draggable.indexOf(green1) === 2
        ) {
          alert(`Koniec gry !! Wygrałeś w ${numberMoves} posunięciach`);
        }
      }
      //
    });
  });
});
boxes.forEach((box) => {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    box.appendChild(draggable);
  });
});

//
// if disk3 jest w box 3 &&box 1jest w box 3 &&
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
