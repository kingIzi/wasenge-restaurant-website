//toggle menu page indicators
function menuIndicator() {
  var btnContainer = document.getElementById("myDIV");
  var btns = btnContainer.getElementsByClassName("myBtn");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      if (current.length > 0) {
        current[0].className = current[0].className.replace(" active", "");
      }
      this.className += " active";
    });
  }
}

//on menu page loaded global events
function onMenuPageLoaded(window) {
  window.addEventListener("DOMContentLoaded", () => {
    menuIndicator();
  });
}

//open navigation bar
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

//close navigation bar
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
