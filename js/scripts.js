window.onload = function () {
  // ------REPLACE SCREENS------
  function jsReplaceScreen() {
    let jsId = document.getElementById("js-id");
    jsId.classList.add("javaScript-screen");
  }
  function pythonReplaceScreen() {
    let pythonId = document.getElementById("python-id");
    pythonId.classList.add("python-screen");
  }
  function reactReplaceScreen() {
    let reactId = document.getElementById("react-id");
    reactId.classList.add("react-screen");
  }
  function rubyReplaceScreen() {
    let rubyId = document.getElementById("ruby-id");
    rubyId.classList.add("ruby-screen");
  }
  // ------REMOVE SCREENS------
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
    //this is a function that resets radio buttons only:
    function restForm() {
      document.getElementById("");
    }

    if (mnms.checked == true && boat.checked == true && vw.checked == true) {
      rubyRemoveScreen();
      pythonReplaceScreen();
      jsReplaceScreen();
      reactReplaceScreen();
    } else if (
      mnms.checked == true &&
      dolphins.checked == true &&
      nova.checked == true
    ) {
      pythonRemoveScreen();
      jsReplaceScreen();
      reactReplaceScreen();
      rubyReplaceScreen();
    } else if (
      potatoChips.checked == true &&
      boat.checked == true &&
      vw.checked == true
    ) {
      reactRemoveScreen();
      rubyReplaceScreen();
      jsReplaceScreen();
      pythonReplaceScreen();
    } else if (
      potatoChips.checked == true &&
      dolphins.checked == true &&
      nova.checked == true
    ) {
      jsRemoveScreen();
      rubyReplaceScreen();
      reactReplaceScreen();
      pythonReplaceScreen();
    } else if (
      vw.checked == true &&
      dolphins.checked == true &&
      mnms.checked == true
    ) {
      rubyRemoveScreen();
      pythonReplaceScreen();
      jsReplaceScreen();
      reactReplaceScreen();
    } else if (
      nova.checked == true &&
      boat.checked == true &&
      potatoChips.checked == true
    ) {
      pythonRemoveScreen();
      jsReplaceScreen();
      reactReplaceScreen();
      rubyReplaceScreen();
    } else if (
      vw.checked == true &&
      dolphins.checked == true &&
      potatoChips.checked == true
    ) {
      reactRemoveScreen();
      rubyReplaceScreen();
      jsReplaceScreen();
      pythonReplaceScreen();
    }

    document.getElementById("form-submit").reset();
    event.preventDefault();
  };
};
