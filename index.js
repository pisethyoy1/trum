var drumBtn = document.querySelectorAll("button");

// addEventListener("keypress", function (e) {
//   console.log(e.key);
// });

addEventListener("keypress", function (e) {
  makeSound(e.key);
});

for (i = 0; i < drumBtn.length; i++) {
  drumBtn[i].addEventListener("click", function () {
    makeSound(this.innerHTML);
  });
}

function makeSound(key) {
  var audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3").play();
      break;

    case "a":
      audio = new Audio("sounds/tom-2.mp3").play();
      break;

    case "s":
      audio = new Audio("sounds/tom-3.mp3").play();
      break;

    case "d":
      audio = new Audio("sounds/tom-4.mp3").play();
      break;

    case "j":
      audio = new Audio("sounds/crash.mp3").play();
      break;

    case "k":
      audio = new Audio("sounds/kick-bass.mp3").play();
      break;

    case "l":
      audio = new Audio("sounds/snare.mp3").play();
      break;

    default:
      console.log(btnHTML);
      break;
  }
}
