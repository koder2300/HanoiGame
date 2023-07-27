let disks = document.querySelectorAll(".disk");
let boxOne = document.querySelector(".box1");
let boxTwo = document.querySelector(".box2");
let boxThree = document.querySelector(".box3");


let selected
for (disk of disks) {
	disk.addEventListener("dragstart", function (e) {
        console.log('dragstart')
        selected = e.target;
    });
}

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
    console.log('box1 drop', selected)
    boxOne.appendChild(selected);
    selected = null;
});

boxTwo.addEventListener("drop", function (e) {
    console.log('box2 drop', selected)
    boxTwo.appendChild(selected);
    selected = null;
});

boxThree.addEventListener("drop", function (e) {
    console.log('box3 drop', selected)
    boxThree.appendChild(selected);
    selected = null;
});
