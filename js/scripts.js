// window.onload = function () {
//   document.querySelector("form").onsubmit = function (event) {
//     event.preventDefault();
//   };
function jsRemoveScreen() {
  let jsId = document.getElementById("js-id");
  jsId.classList.remove("javaScript-screen");
}
function pythonRemoveScreen() {
  let pythonId = document.getElementById("python-id");
  pythonId.classList.remove("python-screen");
}
function reactRemoveScreen() {
  let reactId = document.getElementById("react-id");
  reactId.classList.remove("react-screen");
}
function rubyRemoveScreen() {
  let rubyId = document.getElementById("ruby-id");
  rubyId.classList.remove("ruby-screen");
}

document.querySelector("form").onsubmit = function (event) {
  let vw = document.getElementById("vw");
  let mnms = document.getElementById("mnms");
  let potatoChips = document.getElementById("potatoChips");
  let dolphins = document.getElementById("dolphins");
  let boat = document.getElementById("boat");
  let nova = document.getElementById("nova");
  let radioInput = document.querySelector("input");
  function restForm() {
    document.getElementById("");
  }

  if (mnms.checked == true && boat.checked == true && vw.checked == true) {
    rubyRemoveScreen();
  } else if (
    mnms.checked == true &&
    dolphins.checked == true &&
    nova.checked == true
  ) {
    pythonRemoveScreen();
  } else if (
    potatoChips.checked == true &&
    boat.checked == true &&
    vw.checked == true
  ) {
    reactRemoveScreen();
  } else if (
    potatoChips.checked == true &&
    dolphins.checked == true &&
    nova.checked == true
  ) {
    jsRemoveScreen();
  } else if (
    vw.checked == true &&
    dolphins.checked == true &&
    mnms.checked == true
  ) {
    rubyRemoveScreen();
  } else if (
    nova.checked == true &&
    boat.checked == true &&
    potatoChips.checked == true
  ) {
    pythonRemoveScreen();
  } else if (
    vw.checked == true &&
    dolphins.checked == true &&
    potatoChips.checked == true
  ) {
    reactRemoveScreen();
  } else if (radioInput.checked == !3) {
    document.getElementById("errorMessage").innerHTML =
      "ANSWER ALL THREE QUESTIONS";
  }

  // if (mnms.checked == false || potatoChips.checked == false) {
  //   document.getElementById("errorMessage").innerHTML = "error";
  // }
  document.getElementById("form-submit").reset();
  event.preventDefault();
};
// };
