// window.onload = function () {
//   document.querySelector("form").onsubmit = function (event) {
//     event.preventDefault();
//   };
// function jsRemoveScreen() {
//   let jsId = document.getElementById("js-id");
//   jsId.classList.remove("javaScript-screen");
// }
// function pythonRemoveScreen() {
//   let pythonId = document.getElementById("python-id");
//   pythonId.classList.remove("python-screen");
// }
// function reactRemoveScreen() {
//   let reactId = document.getElementById("react-id");
//   reactId.classList.remove("react-screen");
// }
function rubyRemoveScreen() {
  let rubyId = document.getElementById("ruby-id");
  rubyId.classList.remove("ruby-screen");
}

document.querySelector("form").onsubmit = function (event) {
  let vw = document.getElementById("vw");
  rubyRemoveScreen();
  event.preventDefault();
};
// };

//   function rubyRemoveScreen() {
//     let rubyId = document.getElementById("ruby-id");
//     rubyId.classList.remove("ruby-screen");
//   }
